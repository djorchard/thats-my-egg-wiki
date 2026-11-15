(() => {
  const documentation = document.querySelector('[data-ui-doc-page]');
  if (!documentation) return;

  if (documentation.dataset.uiDocPage === 'ui-rules.html') {
    const visualAnchors = new Set(["component-reference","screen-references","component-button-primary","component-button-secondary","component-button-warning","component-button-hotkey","component-button-disabled","component-icon-control","component-tabs","component-text-field","component-checkbox","component-keycap","component-quality-underlay","component-stat-underlay","component-progress-underlay","component-music-slider","component-weight-units","component-window","component-tray-tiles","component-hotbar-slot","component-pet-callout","component-egg-incubating","component-egg-ready","component-glyph-library","component-wild-egg-callout","component-search-field","component-selected-tile","component-typography-desktop","component-typography-phone","component-quality-chip","component-creature-detail-panel","ui-rubbish-bin","ui-garden-interactions","ui-pets","ui-eggs","ui-shop","ui-settings","ui-emotes","ui-developer-panel","ui-admin","ui-developer-tools","ui-creature-inspector","ui-birth-certificate","ui-hatch-choice","ui-away-reward","ui-loading","ui-notices","ui-action-dock","ui-hotbar","ui-world-hud","ui-swim-hud","ui-treadmill","ui-trap-placement","ui-sleep","ui-egg-delivery","ui-skill-progression","ui-running-stamina","ui-wardrobe","ui-statistics-board","ui-egg-debug","ui-health-warning","ui-interface-language","ui-server-boost-hud","ui-turbo-boost","ui-rare-egg-notices","ui-fishing","ui-cash-gain-feedback","ui-coin-gain-feedback","ui-house-flowers","ui-flower-gift","ui-boom-box","ui-inventory-tray","ui-mount-action","ui-pet-buffs","ui-search-focus","ui-collection-reward","ui-running-boost","ui-hatch-storage-feedback","ui-fake-egg-fuse-actions","ui-welcome-and-first-join-cinematic","ui-friends","ui-running-hide","ui-home-navigation","ui-active-buff-icons","ui-developer-popup-previews","ui-performance-advisor","ui-garden-crops","ui-character-tech-tree"]);
    const textAnchors = new Set(["ui-mailbox"]);
    const aliases = {"on-page-component-reference":"component-reference","on-page-screen-references":"screen-references"};
    const routeOldAnchor = () => {
      let anchor;
      try { anchor = decodeURIComponent(location.hash.slice(1)); } catch { return; }
      if (!anchor || document.getElementById(anchor)) return;
      anchor = Object.hasOwn(aliases, anchor) ? aliases[anchor] : anchor;
      const page = visualAnchors.has(anchor) ? 'ui-visual-examples.html'
        : textAnchors.has(anchor) ? 'ui-reference.html' : '';
      if (!page) return;
      const destination = new URL(page, location.href);
      destination.search = location.search;
      destination.hash = anchor;
      location.replace(destination.href);
    };
    routeOldAnchor();
    window.addEventListener('hashchange', routeOldAnchor);
    return;
  }

  const filter = documentation.querySelector('[data-ui-filter]');
  if (!filter) return;
  const input = filter.querySelector('input');
  const status = filter.querySelector('[data-ui-filter-status]');
  const cards = [...documentation.querySelectorAll('[data-ui-reference]')];
  const searchIndex = cards.map(card => card.textContent.toLocaleLowerCase());
  const update = () => {
    const terms = input.value.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
    cards.forEach((card, index) => {
      card.hidden = !terms.every(term => searchIndex[index].includes(term));
    });
    status.hidden = cards.some(card => !card.hidden);
  };
  input.addEventListener('input', update);
  window.addEventListener('hashchange', () => {
    const target = document.getElementById(location.hash.slice(1));
    if (!target?.closest('[data-ui-reference][hidden]')) return;
    input.value = '';
    update();
    target.scrollIntoView();
  });
  filter.hidden = false;
  update();
})();
