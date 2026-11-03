(() => {
  const preview = document.createElement('dialog');
  preview.className = 'image-preview';
  preview.setAttribute('aria-label', 'Image preview');
  const picture = document.createElement('img');
  picture.className = 'image-preview-image';
  picture.draggable = false;
  const stage = document.createElement('div');
  stage.className = 'image-preview-stage';
  stage.append(picture);
  const toolbar = document.createElement('div');
  toolbar.className = 'image-preview-toolbar';
  toolbar.setAttribute('role', 'group');
  toolbar.setAttribute('aria-label', 'Image zoom');
  const control = (label, text) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.setAttribute('aria-label', label);
    button.title = label;
    button.textContent = text;
    toolbar.append(button);
    return button;
  };
  const smaller = control('Zoom out', '\u2212');
  const level = document.createElement('output');
  level.setAttribute('aria-label', 'Zoom level');
  toolbar.append(level);
  const larger = control('Zoom in', '+');
  const fit = control('Fit image', 'Fit');
  const close = document.createElement('button');
  close.type = 'button';
  close.className = 'image-preview-close';
  close.setAttribute('aria-label', 'Close image preview');
  close.textContent = '\u00d7';
  const caption = document.createElement('p');
  caption.className = 'image-preview-caption';
  caption.id = 'image-preview-caption';
  caption.hidden = true;
  preview.append(stage, toolbar, close, caption);
  document.body.append(preview);
  let opener = null;
  let zoom = 1;
  let pan = { x: 0, y: 0 };
  let fitted = { width: 0, height: 0 };
  const pointers = new Map();
  let gesture = null;
  let backdropClick = false;
  let dragged = false;
  const clamp = (value, limit) => Math.max(-limit, Math.min(limit, value));
  const render = () => {
    pan.x = clamp(pan.x, Math.max(0, (fitted.width * zoom - stage.clientWidth) / 2));
    pan.y = clamp(pan.y, Math.max(0, (fitted.height * zoom - stage.clientHeight) / 2));
    picture.style.transform = `translate(-50%, -50%) translate(${pan.x}px, ${pan.y}px) scale(${zoom})`;
    level.textContent = `${Number(zoom.toFixed(1))}x`;
    smaller.disabled = zoom <= 1;
    larger.disabled = zoom >= 6;
    stage.classList.toggle('can-pan', zoom > 1);
  };
  const measure = () => {
    if (!preview.open || !picture.naturalWidth) return;
    stage.style.bottom = caption.hidden ? '' : `${caption.offsetHeight + 16}px`;
    const ratio = Math.min(1, stage.clientWidth / picture.naturalWidth, stage.clientHeight / picture.naturalHeight);
    fitted = { width: picture.naturalWidth * ratio, height: picture.naturalHeight * ratio };
    picture.style.width = `${fitted.width}px`;
    picture.style.height = `${fitted.height}px`;
    render();
  };
  const zoomAt = (value, x = stage.clientWidth / 2, y = stage.clientHeight / 2) => {
    const next = Math.max(1, Math.min(6, value));
    const factor = next / zoom;
    pan.x = x - stage.clientWidth / 2 - (x - stage.clientWidth / 2 - pan.x) * factor;
    pan.y = y - stage.clientHeight / 2 - (y - stage.clientHeight / 2 - pan.y) * factor;
    zoom = next;
    render();
  };
  const reset = () => { zoom = 1; pan = { x: 0, y: 0 }; render(); };
  smaller.addEventListener('click', () => zoomAt(zoom - 0.5));
  larger.addEventListener('click', () => zoomAt(zoom + 0.5));
  fit.addEventListener('click', reset);
  picture.addEventListener('load', measure);
  window.addEventListener('resize', measure);
  const openImage = (thumbnail, trigger, source) => {
    opener = trigger;
    picture.alt = thumbnail.alt;
    caption.textContent = thumbnail.dataset.previewCaption || '';
    caption.hidden = !caption.textContent;
    if (caption.hidden) preview.removeAttribute('aria-describedby');
    else preview.setAttribute('aria-describedby', caption.id);
    picture.src = source;
    zoom = 1;
    pan = { x: 0, y: 0 };
    picture.style.visibility = 'hidden';
    fitted = { width: 0, height: 0 };
    document.documentElement.classList.add('image-preview-open');
    preview.showModal();
    measure();
    if (picture.complete && picture.naturalWidth) picture.style.visibility = '';
    render();
    close.focus();
  };
  picture.addEventListener('load', () => { picture.style.visibility = ''; });
  document.querySelectorAll('main img').forEach(image => {
    if (image.hasAttribute('data-animation-src')) return;
    const link = image.closest('a');
    if (link) {
      if (/\.(png|jpe?g|webp|gif|svg|avif)(?:[?#]|$)/i.test(link.href)) link.setAttribute('aria-haspopup', 'dialog');
      return;
    }
    image.tabIndex = 0;
    image.setAttribute('role', 'button');
    image.setAttribute('aria-haspopup', 'dialog');
    image.setAttribute('aria-label', `Enlarge ${image.alt || 'image'}`);
    image.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openImage(image, image, image.currentSrc || image.src);
      }
    });
  });

  document.addEventListener('click', event => {
    if (event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const link = event.target.closest('a');
    if (preview.contains(event.target)) return;
    const thumbnail = link?.querySelector('img') || event.target.closest('main img');
    if (thumbnail?.hasAttribute('data-animation-src')) return;
    if (!thumbnail || (link && !/\.(png|jpe?g|webp|gif|svg|avif)(?:[?#]|$)/i.test(link.href))) return;
    event.preventDefault();
    openImage(thumbnail, link || thumbnail, link?.href || thumbnail.currentSrc || thumbnail.src);
  });
  close.addEventListener('click', () => preview.close());
  preview.addEventListener('click', event => {
    if (event.target === preview || (event.target === stage && backdropClick && !dragged)) preview.close();
  });
  stage.addEventListener('wheel', event => {
    if (!picture.naturalWidth) return;
    event.preventDefault();
    const box = stage.getBoundingClientRect();
    zoomAt(zoom * Math.exp(-event.deltaY * 0.002), event.clientX - box.left, event.clientY - box.top);
  }, { passive: false });
  stage.addEventListener('dblclick', event => {
    event.preventDefault();
    const box = stage.getBoundingClientRect();
    zoomAt(zoom > 1 ? 1 : 3, event.clientX - box.left, event.clientY - box.top);
  });
  const pinch = () => {
    if (pointers.size !== 2) return null;
    const [a, b] = [...pointers.values()];
    return { distance: Math.hypot(a.x - b.x, a.y - b.y), x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
  };
  stage.addEventListener('pointerdown', event => {
    if (event.button !== 0) return;
    pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    backdropClick = event.target === stage;
    dragged = false;
    stage.setPointerCapture(event.pointerId);
    const pair = pinch();
    if (pair) gesture = { ...pair, zoom, pan: { ...pan } };
  });
  stage.addEventListener('pointermove', event => {
    const old = pointers.get(event.pointerId);
    if (!old) return;
    const dx = event.clientX - old.x, dy = event.clientY - old.y;
    pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    if (Math.abs(dx) + Math.abs(dy) > 2) dragged = true;
    const pair = pinch();
    if (pair && gesture) {
      const box = stage.getBoundingClientRect();
      zoom = Math.max(1, Math.min(6, gesture.zoom * pair.distance / Math.max(1, gesture.distance)));
      pan.x = pair.x - box.left - box.width / 2 - (gesture.x - box.left - box.width / 2 - gesture.pan.x) * zoom / gesture.zoom;
      pan.y = pair.y - box.top - box.height / 2 - (gesture.y - box.top - box.height / 2 - gesture.pan.y) * zoom / gesture.zoom;
    } else if (pointers.size === 1 && zoom > 1) {
      pan.x += dx;
      pan.y += dy;
    }
    render();
  });
  const release = event => {
    pointers.delete(event.pointerId);
    gesture = null;
    if (stage.hasPointerCapture(event.pointerId)) stage.releasePointerCapture(event.pointerId);
  };
  stage.addEventListener('pointerup', release);
  stage.addEventListener('pointercancel', release);
  preview.addEventListener('keydown', event => {
    if (event.key === 'Tab') {
      const buttons = [...preview.querySelectorAll('button:not(:disabled)')];
      const index = buttons.indexOf(document.activeElement);
      if (event.shiftKey ? index <= 0 : index === buttons.length - 1 || index < 0) {
        event.preventDefault();
        buttons[event.shiftKey ? buttons.length - 1 : 0].focus();
      }
      return;
    }
    if (event.target.tagName === 'BUTTON' && (event.key === ' ' || event.key === 'Enter')) return;
    if (['+', '=', '-', '0', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) {
      event.preventDefault();
      if (event.key === '+' || event.key === '=') zoomAt(zoom + 0.5);
      else if (event.key === '-') zoomAt(zoom - 0.5);
      else if (event.key === '0') reset();
      else {
        pan.x += event.key === 'ArrowLeft' ? 60 : event.key === 'ArrowRight' ? -60 : 0;
        pan.y += event.key === 'ArrowUp' ? 60 : event.key === 'ArrowDown' ? -60 : 0;
        render();
      }
    }
  });
  preview.addEventListener('close', () => {
    if (preview.open) return;
    document.documentElement.classList.remove('image-preview-open');
    picture.removeAttribute('src');
    picture.alt = '';
    pointers.clear();
    gesture = null;
    if (opener?.isConnected) opener.focus({ preventScroll: true });
    opener = null;
  });

  const input = document.querySelector('#creature-search');
  if (!input) return;
  const results = document.querySelector('#search-results');
  const count = document.querySelector('#search-count');
  const entries = JSON.parse(document.querySelector('#search-data').textContent);
  input.addEventListener('input', () => {
    const query = input.value.trim().toLowerCase();
    results.replaceChildren();
    results.hidden = !query;
    count.hidden = !query;
    if (!query) return;
    const found = entries.filter(entry => `${entry.name} ${entry.parents} ${entry.region}`.toLowerCase().includes(query));
    count.textContent = `${found.length} ${found.length === 1 ? 'creature' : 'creatures'} found`;
    for (const entry of found) {
      const item = document.createElement('li');
      const link = document.createElement('a');
      link.href = entry.href;
      const name = document.createElement('strong');
      name.textContent = entry.name;
      const region = document.createElement('small');
      region.textContent = entry.stage === 'scrapped' ? 'Scrapped idea' : entry.region;
      if (entry.stage === 'scrapped') {
        name.classList.add('scrapped-name');
        region.classList.add('pill', 'scrapped-tag');
      }
      link.append(name, region);
      item.append(link);
      results.append(item);
    }
  });
})();

(() => {
  document.querySelectorAll('details.animation-preview').forEach(preview => {
    const image = preview.querySelector('img[data-animation-src]');
    const summary = preview.querySelector('summary');
    if (!image || !summary) return;
    const playLabel = summary.textContent;
    preview.addEventListener('toggle', () => {
      if (preview.open) {
        image.src = image.dataset.animationSrc;
        summary.textContent = playLabel.replace(/^Play /, 'Pause ').replace(/^Show /, 'Hide ');
      } else {
        image.removeAttribute('src');
        summary.textContent = playLabel;
      }
    });
  });
})();
