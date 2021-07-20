(() => {
    const refs = {
      openMenuBtn: document.querySelector('.about-menu-open'),
      closeMenuBtn: document.querySelector('.about-menu-close'),
      menu: document.querySelector('.about-menu'),
    };
  
    refs.openMenuBtn.addEventListener('click', toggleMenu);
    refs.closeMenuBtn.addEventListener('click', toggleMenu);
  
    function toggleMenu() {
      refs.menu.classList.toggle('is-hidden');
    }
  })();