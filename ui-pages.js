(() => {
  const documentation = document.querySelector('[data-ui-doc-page]');
  if (!documentation) return;

  const oldPage = documentation.dataset.uiDocPage;
  const defaultPage = documentation.dataset.uiRedirect;
  if (defaultPage || oldPage === 'ui-rules.html') {
    const componentIds = new Set(["component-button-primary","component-button-secondary","component-button-warning","component-button-hotkey","component-button-disabled","component-icon-control","component-tabs","component-text-field","component-checkbox","component-keycap","component-quality-underlay","component-stat-underlay","component-progress-underlay","component-music-slider","component-weight-units","component-window","component-tray-tiles","component-hotbar-slot","component-pet-callout","component-egg-incubating","component-egg-ready","component-glyph-library","component-wild-egg-callout","component-search-field","component-selected-tile","component-typography-desktop","component-typography-phone","component-quality-chip","component-creature-detail-panel","ui-search-focus"]);
    const exampleIds = new Set(["ui-rubbish-bin","ui-garden-interactions","ui-pets","ui-eggs","ui-shop","ui-settings","ui-emotes","ui-developer-panel","ui-admin","ui-developer-tools","ui-creature-inspector","ui-birth-certificate","ui-hatch-choice","ui-away-reward","ui-loading","ui-notices","ui-action-dock","ui-hotbar","ui-world-hud","ui-swim-hud","ui-treadmill","ui-trap-placement","ui-sleep","ui-egg-delivery","ui-skill-progression","ui-running-stamina","ui-wardrobe","ui-statistics-board","ui-egg-debug","ui-health-warning","ui-interface-language","ui-server-boost-hud","ui-turbo-boost","ui-rare-egg-notices","ui-fishing","ui-cash-gain-feedback","ui-coin-gain-feedback","ui-house-flowers","ui-flower-gift","ui-boom-box","ui-inventory-tray","ui-mount-action","ui-pet-buffs","ui-collection-reward","ui-running-boost","ui-hatch-storage-feedback","ui-fake-egg-fuse-actions","ui-welcome-and-first-join-cinematic","ui-friends","ui-running-hide","ui-home-navigation","ui-active-buff-icons","ui-developer-popup-previews","ui-performance-advisor","ui-garden-crops","ui-character-tech-tree","ui-mailbox"]);
    const componentAliases = new Set(["component-reference","on-page-component-reference","on-page-component-examples","tile-tile-example","on-page-tile-selection-example"]);
    const screenAliases = new Set(["on-page-screen-references","on-page-screen-examples"]);
    const route = () => {
      let anchor;
      try { anchor = decodeURIComponent(location.hash.slice(1)); } catch { anchor = ''; }
      if (!defaultPage && (!anchor || document.getElementById(anchor))) return;

      let page = defaultPage;
      if (componentIds.has(anchor) || componentAliases.has(anchor)) {
        page = 'ui-components.html';
        if (anchor.startsWith('on-page-tile-')) anchor = 'tile-tile-example';
        else if (componentAliases.has(anchor) && anchor !== 'tile-tile-example') anchor = 'component-reference';
      } else if (exampleIds.has(anchor) || screenAliases.has(anchor) || anchor === 'screen-references') {
        page = 'ui-examples.html';
        if (screenAliases.has(anchor)) anchor = 'screen-references';
      }
      if (!page) return;
      const destination = new URL(page, location.href);
      destination.search = location.search;
      destination.hash = anchor;
      location.replace(destination.href);
    };
    route();
    window.addEventListener('hashchange', route);
    return;
  }

  const filter = documentation.querySelector('[data-ui-filter]');
  if (!filter) return;
  const input = filter.querySelector('input');
  const status = filter.querySelector('[data-ui-filter-status]');
  const cards = [...documentation.querySelectorAll('[data-ui-reference]')];
  const sections = [...documentation.querySelectorAll('[data-ui-section]')];
  const sidebarLinks = [...document.querySelectorAll('.page-toc a')];
  const searchIndex = cards.map(card => card.textContent.toLocaleLowerCase());
  const update = () => {
    const terms = input.value.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
    cards.forEach((card, index) => {
      card.hidden = !terms.every(term => searchIndex[index].includes(term));
    });
    for (const section of sections) section.hidden = !section.querySelector('[data-ui-reference]:not([hidden])');
    for (const link of sidebarLinks) {
      const target = document.getElementById(link.hash.slice(1));
      link.parentElement.hidden = Boolean(target?.closest('[data-ui-section][hidden]'));
    }
    status.hidden = cards.some(card => !card.hidden);
  };
  input.addEventListener('input', update);
  window.addEventListener('hashchange', () => {
    const target = document.getElementById(location.hash.slice(1));
    if (!target?.closest('[data-ui-reference][hidden], [data-ui-section][hidden]')) return;
    input.value = '';
    update();
    target.scrollIntoView();
  });
  filter.hidden = false;
  update();
})();
