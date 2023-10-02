function initCarousel() {
  let carousel = document.querySelector('.carousel');
  let arrowRight = document.querySelector('.carousel__arrow_right');
  let arrowLeft = document.querySelector('.carousel__arrow_left');
  let carouselInner = document.querySelector('.carousel__inner');
  let carouselWidth = carouselInner.offsetWidth;
  let carouselShift = 0;
  let counter = 0;

  arrowLeft.style.display = 'none';

  function arrowHideVisible(counter) {
    switch (counter) {
      case 0:
        arrowLeft.style.display = 'none';
        break;
      case 3:
        arrowRight.style.display = 'none';
        break;
      default:
        arrowRight.style.display = '';
        arrowLeft.style.display = '';
    };
  };

  carousel.addEventListener('click', (event) => {

    if (event.target.closest('.carousel__arrow_right')) {
      if ((counter) < 3) {
        carouselShift += carouselWidth;
        counter++;
        carouselInner.style.transform = `translateX(-${carouselShift + 'px'})`;
        console.log(counter);
      };

    } else if (event.target.closest('.carousel__arrow_left')) {
      if (counter > 0) {
        counter--;
        carouselShift -= carouselWidth;
        carouselInner.style.transform = `translateX(-${carouselShift + 'px'})`;
        console.log(counter);
      };
    };
    arrowHideVisible(counter)

  });
};
