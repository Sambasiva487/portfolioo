/* Cursor lamp + grain overlay (injects into dark case pages) */
(function () {
  if (document.body.classList.contains('light')) return;
  var grain = document.createElement('div');
  grain.className = 'grain';
  var lamp = document.createElement('div');
  lamp.className = 'lamp';
  document.body.appendChild(grain);
  document.body.appendChild(lamp);
  var x = innerWidth / 2, y = innerHeight * .4, tx = x, ty = y;
  document.addEventListener('mousemove', function (e) { tx = e.clientX; ty = e.clientY; });
  (function loop() {
    x += (tx - x) * .08; y += (ty - y) * .08;
    lamp.style.left = x + 'px'; lamp.style.top = y + 'px';
    requestAnimationFrame(loop);
  })();
})();

/* Scroll reveals */
var io = new IntersectionObserver(function (entries) {
  entries.forEach(function (en) {
    if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
  });
}, { threshold: .15 });
document.querySelectorAll('.rv,.work-item,.meta-row,.hero-shot,.figure,.prose h2,.stats-row').forEach(function (el) {
  el.classList.add('rv');
  io.observe(el);
});

/* Tabs (index only) */
document.addEventListener('click', function (e) {
  var btn = e.target.closest('.tab-btn');
  if (!btn) return;
  document.querySelectorAll('.tab-btn').forEach(function (b) { b.classList.remove('active'); });
  document.querySelectorAll('.tab-pane').forEach(function (p) { p.classList.remove('active'); });
  btn.classList.add('active');
  document.getElementById(btn.getAttribute('data-tab')).classList.add('active');
});

/* Hover text swap */
document.querySelectorAll('[data-hover-text]').forEach(function (el) {
  if (!el.childNodes[0]) return;
  var original = el.childNodes[0].nodeValue;
  el.addEventListener('mouseenter', function () {
    el.style.width = el.offsetWidth + 'px';
    el.style.height = el.offsetHeight + 'px';
    el.childNodes[0].nodeValue = el.getAttribute('data-hover-text');
  });
  el.addEventListener('mouseleave', function () {
    el.style.width = ''; el.style.height = '';
    el.childNodes[0].nodeValue = original;
  });
});
