(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[products-data-modal-open]'),
    closeModalBtn: document.querySelectorAll('[products-data-modal-close]'),
    modal: document.querySelector('[products-data-modal]'),
  };

  refs.openModalBtn.forEach(btn => btn.addEventListener('click', toggleModal));
  refs.closeModalBtn.forEach(btn => btn.addEventListener('click', toggleModal));

  function toggleModal(e) {
    const modal = e.currentTarget.nextElementSibling
    modal.classList.toggle('overlay-is-hidden');

  }
})();
