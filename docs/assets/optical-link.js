(() => {
  const section = document.querySelector('.link-section');
  if (!section) return;
  const rate = section.querySelector('#link-rate');
  const bits = [0,1,1,0,1,0,0,1,0,1];
  let index = -1;
  section.querySelector('#step-bit').addEventListener('click', () => {
    index = (index + 1) % bits.length;
    section.querySelectorAll('.bit-cell').forEach((c,i) => c.classList.toggle('active', i === index));
    const name = index === 0 ? 'Start bit' : index === 9 ? 'Stop bit' : `Data bit D${index-1}`;
    section.querySelector('#step-caption').textContent = `${name}: ${bits[index]}. Receiver samples near ${((index + .5) * 1000000 / Number(rate.value)).toFixed(1)} µs after the start edge. Stepped illustration; light travel time omitted.`;
  });
  rate.addEventListener('change', () => {
    const bps = Number(rate.value), us = 1000000 / bps;
    section.querySelector('#link-period').textContent = `${bps.toLocaleString('en-US')} bit intervals per second · ${us} µs each`;
    section.querySelector('#frame-duration').textContent = `10 × ${us} µs = ${10*us} µs per byte frame`;
    section.querySelector('#payload-explanation').textContent = `With 8N1 framing, 8 data bits use 10 bit intervals. At ${bps/1000} kb/s, that allows at most ${bps*.8/1000} kb/s of byte data before packet headers, checks, and gaps. For comparison, the lab measured about 18.7 kb/s of useful payload at 200 kb/s signalling.`;
    index = -1;
    section.querySelectorAll('.bit-cell').forEach(c => c.classList.remove('active'));
    section.querySelector('#step-caption').textContent = 'Use Next bit to follow the start bit, eight data bits, and stop bit at this rate.';
  });
  section.querySelector('#step-bit').hidden = false;
})();
