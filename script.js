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

  // 마우스휠 헤더 이벤트
  // scrollEvent 클래스 추가 제거로 조정
  window.addEventListener(`wheel`, (event) => {
    const headerArea = document.querySelector(`.header_area`);

    if (event.deltaY > 0) {
      // wheel down
      headerArea.classList.remove(`scrollEvent`);
    } else {
      // wheel up
      headerArea.classList.add(`scrollEvent`);
    }
  });
});
