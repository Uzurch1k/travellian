// ==============================================================

// ==============================================================

const refs = {
  body: document.querySelector('body'),
  burger: document.querySelector('.header-burger'),
  headerNav: document.querySelector('.header-nav'),
  headerLink: document.querySelectorAll('.header-item'),
};

// ========================= Bugrer =========================

refs.burger.addEventListener('click', () => {
  refs.burger.classList.toggle('active');
  refs.headerNav.classList.toggle('active');
  refs.body.classList.toggle('lock');
});

const mediaQueryList = window.matchMedia('(max-width: 1151px)');

mediaQueryList.addEventListener('change', event => {
  if (event.matches) {
    refs.headerLink.forEach(headerLink => {
      headerLink.addEventListener('click', () => {
        refs.burger.classList.toggle('active');
        refs.headerNav.classList.toggle('active');
        refs.body.classList.toggle('lock');
      });
    });
  }
});

// ==============================================================

// ==============================================================

// ==============================================================

// ==============================================================
