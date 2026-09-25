(function () {
  // 高亮当前导航
  var path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav.site-nav a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === path) a.classList.add('active');
  });

  // 页脚年份
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();