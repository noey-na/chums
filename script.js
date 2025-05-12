document.addEventListener(`DOMContentLoaded`, function () {
  const subMenu = document.querySelector(`.sub_menu`);
  const menuOpenBtn = document.querySelector(`.menu .booby`);
  const closeBtn = document.querySelector(`.close_btn`);

  menuOpenBtn.addEventListener(`click`, () => {
    subMenu.classList.add(`show`);
  });

  closeBtn.addEventListener(`click`, () => {
    subMenu.classList.remove(`show`);
  });
});
