/* Tabs */
document.addEventListener('click', function (e) {
  var btn = e.target.closest('.tab-btn');
  if (!btn) return;
  document.querySelectorAll('.tab-btn').forEach(function (b) { b.classList.remove('active'); });
  document.querySelectorAll('.tab-pane').forEach(function (p) { p.classList.remove('active'); });
  btn.classList.add('active');
  document.getElementById(btn.getAttribute('data-tab')).classList.add('active');
});

/* Hover text swap (mirrors reference site's data-hover-text behavior) */
document.querySelectorAll('[data-hover-text]').forEach(function (el) {
  if (!el.childNodes[0]) return;
  var original = el.childNodes[0].nodeValue;
  el.addEventListener('mouseenter', function () {
    el.style.width = el.offsetWidth + 'px';
    el.style.height = el.offsetHeight + 'px';
    el.childNodes[0].nodeValue = el.getAttribute('data-hover-text');
  });
  el.addEventListener('mouseleave', function () {
    el.style.width = '';
    el.style.height = '';
    el.childNodes[0].nodeValue = original;
  });
});
