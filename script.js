document.getElementById('yr').textContent = new Date().getFullYear();
const $ = (s, c = document) => [...c.querySelectorAll(s)];
const links = document.getElementById('links'), mb = document.querySelector('.menu-btn');
mb.onclick = () => mb.setAttribute('aria-expanded', links.classList.toggle('open'));
links.onclick = e => { if (e.target.tagName === 'A') { links.classList.remove('open'); mb.setAttribute('aria-expanded', false); } };
const bar = document.querySelector('.progress');
addEventListener('scroll', () => { bar.style.width = (scrollY / (document.body.scrollHeight - innerHeight) * 100) + '%'; }, { passive: true });
// rotating hero word
const words = $('.rot em'); let w = 0;
setInterval(() => {
  const cur = words[w]; w = (w + 1) % words.length;
  cur.classList.replace('on', 'out');
  words[w].classList.remove('out'); words[w].classList.add('on');
  setTimeout(() => { cur.classList.remove('out'); cur.style.transition = 'none'; cur.offsetHeight; cur.style.transition = ''; }, 650);
}, 2400);
// tabs
const tabs = $('.tabs button'), panels = $('.panel');
tabs.forEach(b => b.onclick = () => {
  tabs.forEach(x => x.classList.toggle('active', x === b));
  panels.forEach((p, i) => p.classList.toggle('active', i == b.dataset.t));
});
// reveal + counters
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const count = el => {
  const end = +el.dataset.n; if (reduce) { el.textContent = end.toLocaleString('en-IN'); return; }
  const t0 = performance.now();
  const tick = t => { const p = Math.min((t - t0) / 1800, 1); el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))).toLocaleString('en-IN'); if (p < 1) requestAnimationFrame(tick); };
  requestAnimationFrame(tick);
};
const io = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  e.target.classList.add('in'); $('[data-n]', e.target).forEach(count);
  if (e.target.dataset.n) count(e.target);
  io.unobserve(e.target);
}), { threshold: .15 });
$('.rv').forEach((el, i) => { el.style.transitionDelay = (i % 4) * 90 + 'ms'; io.observe(el); });

// gallery filters + lightbox
const gs=$('.g'), fb=$('.filters button');
fb.forEach(b=>b.onclick=()=>{fb.forEach(x=>x.classList.toggle('on',x===b));gs.forEach(g=>g.hidden=b.dataset.f!=='all'&&g.dataset.c!==b.dataset.f)});
const lb=document.getElementById('lb'),li=lb.querySelector('img');
gs.forEach(g=>g.onclick=()=>{li.src=g.querySelector('img').src;li.alt=g.querySelector('img').alt;lb.hidden=false});
lb.onclick=()=>lb.hidden=true;addEventListener('keydown',e=>{if(e.key==='Escape')lb.hidden=true});
