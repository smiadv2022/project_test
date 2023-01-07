(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-mobmenu-open]"),
      closeModalBtn: document.querySelector("[data-mobmenu-close]"),
      modal: document.querySelector("[data-mobmenu]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-menu");
    }
  })();
  