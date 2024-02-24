// ==============================================================

const refs = {
  body: document.querySelector('body'),
  burger: document.querySelector('.header-burger'),
  headerNav: document.querySelector('.header-nav'),
  headerLink: document.querySelectorAll('.header-item'),
};

// ========================= Bugrer =========================

function handleHeaderLinkClick() {
  refs.burger.classList.toggle('active');
  refs.headerNav.classList.toggle('active');
  refs.body.classList.toggle('lock');
}

refs.burger.addEventListener('click', handleHeaderLinkClick);

refs.headerLink.forEach(headerLink => {
  headerLink.addEventListener('click', handleHeaderLinkClick);
});

const mediaQueryList = window.matchMedia('(max-width: 1151px)');

mediaQueryList.addEventListener('change', event => {
  if (!event.matches) {
    refs.headerLink.forEach(headerLink => {
      headerLink.removeEventListener('click', handleHeaderLinkClick);
    });
  }
});

// ==============================================================

// ==============================================================

// ==============================================================

// ==============================================================
