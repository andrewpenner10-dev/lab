(() => {
  const section = document.querySelector('.link-section');
  if (!section) return;
  const bits = [0,1,1,0,1,0,0,1,0,1];
  let index = -1;
  section.querySelector('#step-bit').addEventListener('click', () => {
    index = (index + 1) % bits.length;
    section.querySelectorAll('.bit-cell').forEach((c,i) => c.classList.toggle('active', i === index));
    const name = index === 0 ? 'Start bit' : index === 9 ? 'Stop bit' : `Data bit D${index-1}`;
    section.querySelector('#step-caption').textContent = `${name}: ${bits[index]}. Receiver samples near ${((index + .5) * 5).toFixed(1)} µs after the start edge. Stepped illustration; light travel time omitted.`;
  });
  section.querySelector('#step-bit').hidden = false;
})();
