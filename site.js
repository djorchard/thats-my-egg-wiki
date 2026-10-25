(() => {
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
