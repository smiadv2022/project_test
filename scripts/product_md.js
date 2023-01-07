(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-product-open1]"),
      openModa2Btn: document.querySelector("[data-product-open2]"),
      openModa3Btn: document.querySelector("[data-product-open3]"),
      closeModalBtn: document.querySelector("[data-product-close]"),
     
      modal: document.querySelector("[data-product]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.openModa2Btn.addEventListener("click", toggleModal);
    refs.openModa3Btn.addEventListener("click", toggleModal);
  
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden-product");
    }
  })();
  