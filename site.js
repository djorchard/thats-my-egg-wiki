(() => {
  const preview = document.createElement('dialog');
  preview.className = 'image-preview';
  preview.setAttribute('aria-label', 'Image preview');
  const picture = document.createElement('img');
  const close = document.createElement('button');
  close.type = 'button';
  close.className = 'image-preview-close';
  close.setAttribute('aria-label', 'Close image preview');
  close.textContent = '\u00d7';
  preview.append(picture, close);
  document.body.append(preview);
  let opener = null;

  document.addEventListener('click', event => {
    if (event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const link = event.target.closest('a');
    const thumbnail = link?.querySelector('img');
    if (!thumbnail || !/\.(png|jpe?g|webp|gif)(?:[?#]|$)/i.test(link.href)) return;
    event.preventDefault();
    opener = link;
    picture.src = link.href;
    picture.alt = thumbnail.alt;
    document.documentElement.classList.add('image-preview-open');
    preview.showModal();
    close.focus();
  });
  // Clicking the image, close button or shaded background dismisses the preview.
  preview.addEventListener('click', () => preview.close());
  preview.addEventListener('keydown', event => {
    if (event.key === 'Tab') {
      event.preventDefault();
      close.focus();
    }
  });
  preview.addEventListener('close', () => {
    document.documentElement.classList.remove('image-preview-open');
    picture.removeAttribute('src');
    picture.alt = '';
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
      region.textContent = entry.region;
      link.append(name, region);
      item.append(link);
      results.append(item);
    }
  });
})();
