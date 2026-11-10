(() => {
  const root = document.documentElement;
  const body = document.body;
  const main = document.querySelector('#main');
  const sidebar = document.querySelector('#wiki-navigation');
  if (!main || !sidebar) return;
  body.classList.add('wiki-enhanced');
  const menu = document.querySelector('.nav-toggle');
  const scrim = document.querySelector('.nav-scrim');
  const phone = matchMedia('(max-width:680px)');
  const narrow = matchMedia('(max-width:1320px)');
  menu.hidden = false;
  const setMenu = (open, restore = false) => {
    body.classList.toggle('wiki-nav-open', open);
    menu.setAttribute('aria-expanded', String(open));
    scrim.hidden = !open;
    main.inert = open;
    if (open) sidebar.querySelector('a')?.focus();
    else if (restore) menu.focus();
  };
  menu.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
  scrim.addEventListener('click', () => setMenu(false, true));
  sidebar.addEventListener('click', event => { if (event.target.closest('a') && phone.matches) setMenu(false); });
  phone.addEventListener('change', () => setMenu(false));
  document.addEventListener('keydown', event => {
    if (!body.classList.contains('wiki-nav-open')) return;
    if (event.key === 'Escape') { event.preventDefault(); setMenu(false, true); }
    if (event.key === 'Tab') {
      const targets = [menu, ...sidebar.querySelectorAll('a,summary')].filter(node => node.getClientRects().length);
      const index = targets.indexOf(document.activeElement);
      event.preventDefault();
      targets[(index + (event.shiftKey ? -1 : 1) + targets.length) % targets.length].focus();
    }
  });

  const tools = document.querySelector('.page-tools');
  const toc = tools.querySelector('.page-toc');
  const settings = tools.querySelector('.reader-settings');
  const headings = [...main.querySelectorAll('h2')].filter(node => !node.closest('footer,details,.guide-contents'));
  const usedIds = new Set([...document.querySelectorAll('[id]')].map(node => node.id));
  const tocItems = [];
  for (const [index, heading] of headings.entries()) {
    if (!heading.id) {
      let id = 'on-page-' + heading.textContent.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      if (usedIds.has(id)) id += '-' + index;
      heading.id = id; usedIds.add(id);
    }
    const item = document.createElement('li');
    const link = document.createElement('a');
    link.href = '#' + heading.id; link.textContent = heading.textContent.trim();
    item.append(link); toc.querySelector('ol').append(item);
    tocItems.push({heading, link});
  }
  toc.hidden = !headings.length;
  const moveTools = () => {
    if (narrow.matches) {
      const heading = main.querySelector('.page-heading');
      main.insertBefore(tools, heading ? heading.nextSibling : main.firstChild);
      toc.open = false; settings.open = false;
    } else {
      document.querySelector('.shell').append(tools); toc.open = true;
    }
  };
  moveTools(); narrow.addEventListener('change', moveTools);
  const updateToc = () => {
    const visible = tocItems.filter(item => item.heading.getClientRects().length);
    const current = [...visible].reverse().find(item => item.heading.getBoundingClientRect().top <= 155) || visible[0];
    for (const item of tocItems) {
      if (item === current) item.link.setAttribute('aria-current', 'location');
      else item.link.removeAttribute('aria-current');
    }
  };
  let scrollQueued = false;
  document.addEventListener('scroll', () => {
    if (scrollQueued) return;
    scrollQueued = true; requestAnimationFrame(() => { updateToc(); scrollQueued = false; });
  }, {passive:true}); updateToc();
  const theme = document.querySelector('#wiki-theme');
  const size = document.querySelector('#wiki-text-size');
  const setting = (select, attribute, storageKey, valid) => {
    try { const saved = localStorage.getItem(storageKey); if (valid.includes(saved)) select.value = saved; } catch {}
    const apply = () => {
      root.setAttribute(attribute, select.value);
      try { localStorage.setItem(storageKey, select.value); } catch {}
    };
    select.addEventListener('change', apply); apply();
  };
  setting(theme, 'data-wiki-theme', 'tme-wiki-theme', ['dark','light']);
  setting(size, 'data-wiki-text', 'tme-wiki-text', ['standard','large']);

  const input = document.querySelector('#wiki-search');
  const clear = document.querySelector('#wiki-search-clear');
  const panel = document.querySelector('#wiki-search-results');
  const status = document.querySelector('#wiki-search-status');
  const list = panel.querySelector('ul');
  const entries = JSON.parse(document.querySelector('#wiki-search-data').textContent);
  const closeSearch = () => { panel.hidden = true; input.setAttribute('aria-expanded','false'); };
  const search = () => {
    const query = input.value.trim().toLocaleLowerCase();
    clear.hidden = !input.value; list.replaceChildren();
    if (!query) { closeSearch(); return; }
    const terms = query.split(/\s+/);
    const found = entries.filter(entry => terms.every(term => `${entry.name} ${entry.category} ${entry.keywords}`.toLocaleLowerCase().includes(term)))
      .sort((a,b) => Number(b.name.toLowerCase().startsWith(query))-Number(a.name.toLowerCase().startsWith(query)));
    panel.hidden = false; input.setAttribute('aria-expanded','true');
    status.textContent = found.length ? `${found.length} results${found.length > 12 ? ', showing the first 12' : ''}` : 'No matches. Try a creature, region, animal or country.';
    for (const entry of found.slice(0,12)) {
      const li = document.createElement('li'), link = document.createElement('a');
      const name = document.createElement('strong'), category = document.createElement('small');
      link.href = entry.href; name.textContent = entry.name; category.textContent = entry.category;
      link.append(name, category); li.append(link); list.append(li);
    }
  };
  input.addEventListener('input', search);
  input.addEventListener('focus', () => { if (input.value.trim()) search(); });
  clear.addEventListener('click', () => { input.value='';search();input.focus(); });
  input.addEventListener('keydown', event => {
    if (event.key === 'ArrowDown' && !panel.hidden) { event.preventDefault(); list.querySelector('a')?.focus(); }
    if (event.key === 'Enter') { event.preventDefault(); if (!panel.hidden) list.querySelector('a')?.click(); }
    if (event.key === 'Escape') { event.preventDefault(); closeSearch(); }
  });
  panel.addEventListener('keydown', event => {
    const links = [...list.querySelectorAll('a')], index = links.indexOf(document.activeElement);
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault(); const next=index+(event.key==='ArrowDown'?1:-1);
      if (next<0) input.focus(); else links[Math.min(next,links.length-1)]?.focus();
    }
    if (event.key === 'Escape') { input.focus();closeSearch(); }
  });
  document.addEventListener('click', event => { if (!event.target.closest('.global-search')) closeSearch(); });
  document.addEventListener('keydown', event => {
    if (event.key==='/' && !event.ctrlKey && !event.metaKey && !event.altKey && !event.target.closest('input,textarea,select,[contenteditable="true"]') && !document.querySelector('dialog[open]')) {
      event.preventDefault(); input.focus();
    }
  });
  document.querySelectorAll('a[href^="#credit-"]').forEach(link => link.addEventListener('click', () => {
    const credit = document.getElementById(link.getAttribute('href').slice(1)); if (credit) credit.open = true;
  }));
  const animalSearch = document.querySelector('#animal-search');
  if (animalSearch) {
    const group = document.querySelector('#animal-group-filter'), clearAnimal = document.querySelector('#animal-search-clear');
    const rows = [...document.querySelectorAll('tr[id^="animal-"]')];
    const sections = [...new Set(rows.map(row=>row.closest('section')))];
    const filter = () => {
      const query=animalSearch.value.trim().toLocaleLowerCase(); let shown=0;
      for(const row of rows){row.hidden=!(row.textContent.toLocaleLowerCase().includes(query)&&(group.value==='all'||group.value==='national'&&row.dataset.national==='true'||row.dataset.animalGroup===group.value));if(!row.hidden)shown++;}
      for(const section of sections)section.hidden=!rows.some(row=>row.closest('section')===section&&!row.hidden);
      for(const item of tocItems)item.link.parentElement.hidden=Boolean(item.heading.closest('section')?.hidden);
      updateToc();
      clearAnimal.hidden=!animalSearch.value;
      document.querySelector('.animal-filter-count').textContent=`${shown} of ${rows.length} animals shown`;
    };
    animalSearch.addEventListener('input',filter);group.addEventListener('change',filter);
    clearAnimal.addEventListener('click',()=>{animalSearch.value='';filter();animalSearch.focus();});
    filter();
  }
})();

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
