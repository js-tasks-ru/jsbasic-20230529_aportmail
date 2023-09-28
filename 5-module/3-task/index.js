function initCarousel() {
  let arrowRight = document.querySelector('.carousel__arrow_right');
  let carouselInner = document.querySelector('.carousel__inner');
  let carouselWidth = carouselInner.offsetWidth + 'px';

  arrowRight.addEventListener('click', () => {
    let carouselShift = 0;
    function shift() {
      carouselShift = carouselShift + carouselWidth;
      carouselInner.style.transform = `translateX(-${carouselShift})`;
    }
    shift();
    console.log(carouselWidth);

  });

}
