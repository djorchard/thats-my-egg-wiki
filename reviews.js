(() => {
  'use strict';
  const items = [...document.querySelectorAll('[data-review]')];
  if (!items.length) return;
  const records = items.map(item => ({ item, data: JSON.parse(item.dataset.review) }));
  const catalogue = JSON.parse(document.querySelector('#review-data').textContent);
  const key = data => `egg-wiki-review:${data.id}:${data.revision}`;
  const values = new Map();
  const messages = [...document.querySelectorAll('[data-review-message]')];
  const message = text => { for (const node of messages) node.textContent = text; };
  const refresh = () => {
    for (const { item, data } of records) {
      const approved = values.get(data.id) === true && data.codexApproved === true;
      const status = item.querySelector('[data-review-status]');
      status.textContent = approved ? '\u2713 Reviewed' : '\u2717 Not reviewed';
      status.dataset.approved = String(approved);
      item.querySelector('[data-daniel-review]').checked = values.get(data.id) === true;
    }
  };
  for (const { item, data } of records) {
    if (!values.has(data.id)) {
      let value = data.danielApproved;
      try {
        const stored = localStorage.getItem(key(data));
        if (stored !== null) value = stored === 'true';
      } catch {
        message('Browser saving is unavailable. Download your checklist to keep your ticks.');
      }
      values.set(data.id, value);
    }
    const input = item.querySelector('[data-daniel-review]');
    input.disabled = false;
    input.addEventListener('change', () => {
      values.set(data.id, input.checked);
      try {
        localStorage.setItem(key(data), String(input.checked));
        message('Your tick is saved in this browser. Download to keep a portable copy.');
      } catch {
        message('Your tick is not saved. Download your checklist to keep it.');
      }
      refresh();
    });
  }
  refresh();
  document.addEventListener('change', event => {
    if (!event.target.matches('[data-review-import]')) return;
    const file = event.target.files[0];
    if (!file) return;
    if (file.size > 100000) { message('Choose a review checklist smaller than 100 KB.'); return; }
    file.text().then(text => {
      const imported = JSON.parse(text);
      if (imported.format !== 'egg-wiki-review-v1' || !Array.isArray(imported.reviews)) throw new Error();
      const updates = [];
      const seen = new Set();
      for (const row of imported.reviews) {
        if (!row || typeof row.id !== 'string' || !Number.isInteger(row.revision) || typeof row.danielApproved !== 'boolean' || seen.has(`${row.id}:${row.revision}`)) throw new Error();
        seen.add(`${row.id}:${row.revision}`);
        const current = catalogue.find(data => data.id === row.id && data.revision === row.revision);
        if (current) updates.push({ data: current, value: row.danielApproved });
      }
      if (!updates.length) { message('No matching model revisions were found in this checklist.'); return; }
      let saved = true;
      for (const { data, value } of updates) {
        values.set(data.id, value);
        try { localStorage.setItem(key(data), String(value)); } catch { saved = false; }
      }
      refresh();
      message(saved ? 'Matching review ticks imported and saved in this browser.' : 'Ticks imported but not saved. Download your checklist to keep them.');
    }).catch(() => message('Choose a valid downloaded review checklist. Your ticks have not changed.'));
    event.target.value = '';
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('[data-review-download]')) return;
    const reviews = [];
    const seen = new Set();
    // Preserve reviews from other pages, including when downloading on a profile.
    try {
      for (let index = 0; index < localStorage.length; index++) {
        const storedKey = localStorage.key(index);
        const match = /^egg-wiki-review:([a-z0-9-]+):(\d+)$/.exec(storedKey || '');
        if (match) {
          const identity = `${match[1]}:${match[2]}`;
          reviews.push({ id: match[1], revision: Number(match[2]), danielApproved: localStorage.getItem(storedKey) === 'true' });
          seen.add(identity);
        }
      }
    } catch { /* Current page values remain available for download. */ }
    for (const { data } of records) {
      const identity = `${data.id}:${data.revision}`;
      const row = { id: data.id, revision: data.revision, danielApproved: values.get(data.id) === true };
      if (seen.has(identity)) Object.assign(reviews.find(r => r.id === data.id && r.revision === data.revision), row);
      else { reviews.push(row); seen.add(identity); }
    }
    const blob = new Blob([JSON.stringify({ format: 'egg-wiki-review-v1', reviews }, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'egg-model-reviews.json';
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
  window.addEventListener('storage', event => {
    for (const { data } of records) {
      if (event.key === key(data) || event.key === null) {
        let stored = null;
        try { stored = localStorage.getItem(key(data)); } catch { continue; }
        values.set(data.id, stored === null ? data.danielApproved : stored === 'true');
      }
    }
    refresh();
  });
})();
