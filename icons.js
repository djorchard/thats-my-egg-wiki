(() => {
  const query = document.querySelector('#icon-search');
  const category = document.querySelector('#icon-category');
  const active = document.querySelector('#icon-active');
  const cards = Array.from(document.querySelectorAll('.icon-card'));
  document.querySelector('#icon-background').addEventListener('change', event => {
    document.querySelector('.icons-grid').dataset.background = event.target.value;
  });
  const indexed = cards.map(card => ({card, text: card.textContent.toLowerCase()}));
  const update = () => {
    const text = query.value.trim().toLowerCase();
    let count = 0;
    indexed.forEach(({card, text: haystack}) => {
      const visible = (!text || haystack.includes(text)) && (!category.value || card.dataset.category === category.value) && (!active.checked || card.dataset.active === 'true');
      card.hidden = !visible;
      if (visible) count += 1;
    });
    document.querySelector('#icon-count').textContent = `${count} ${count === 1 ? 'icon' : 'icons'}`;
    document.querySelector('#icon-empty').hidden = count > 0;
  };
  query.addEventListener('input', update);
  category.addEventListener('change', update);
  active.addEventListener('change', update);
  update();
})();
