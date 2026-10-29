(() => {
  const tablist = document.querySelector('.rate-tabs');
  if (!tablist) return;
  const tabs = [...tablist.querySelectorAll('[role="tab"]')];
  function select(tab, focus = false) {
    for (const item of tabs) {
      const selected = item === tab;
      item.setAttribute('aria-selected', String(selected));
      item.tabIndex = selected ? 0 : -1;
      const panel = document.getElementById(item.getAttribute('aria-controls'));
      panel.hidden = !selected;
      panel.setAttribute('role', 'tabpanel');
      panel.setAttribute('aria-labelledby', item.id);
      panel.tabIndex = 0;
    }
    if (focus) tab.focus();
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => select(tab));
    tab.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next !== undefined) { event.preventDefault(); select(tabs[next], true); }
    });
  });
  select(tabs[0]);
  tablist.hidden = false;
})();

(() => {
  const range = document.getElementById('history-range');
  if (!range) return;
  const rows = [...document.querySelectorAll('.history-list [data-bps]')];
  function updateScale() {
    const max = Number(range.value);
    let excluded = 0;
    rows.forEach(row => {
      const rate = Number(row.dataset.bps);
      row.hidden = rate > max;
      if (row.hidden) excluded++;
      row.querySelector('.rate-track > span').style.width = `${rate / max * 100}%`;
    });
    const label = range.selectedOptions[0].textContent.split(' · ')[0];
    document.getElementById('history-scale-end').textContent = `0 → ${label}`;
    document.getElementById('history-scale-note').textContent =
      (excluded ? `${excluded} faster links are outside this range and hidden. ` : 'All rates shown. ') +
      'Slower links can be too small to see at this scale; their exact rates are labelled.';
  }
  range.addEventListener('change', updateScale);
  updateScale();
  document.querySelector('.history-zoom').hidden = false;
})();
