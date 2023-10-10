import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  #elem;

  constructor(slides) {
    this.slides = slides;

    this.carouselShift = 0;
    this.render();
    this.clickButton();
    this.slider();

  }

  get elem() {
    return this.#elem
  }

  render() {
    this.#elem = createElement(`
      <div class="carousel">
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>
        <div class="carousel__inner">`
      + this.slides.map(({ name, price, image, id }) =>
        `<div class="carousel__slide" data-id="${id}">
            <img src="/assets/images/carousel/${image}" class="carousel__img" alt="slide">
              <div class="carousel__caption">
              <span class="carousel__price">${'€' + price.toFixed(2)}</span>
                <div class="carousel__title">${name}</div>
              <button type="button" class="carousel__button">
                <img src="/assets/images/icons/plus-icon.svg" alt="icon">
              </button>
            </div>
          </div>`).join('') + `
        </div>
      </div>
      `)


    return this.#elem;
  }

  slider() {
    let arrowRight = this.#elem.querySelector('.carousel__arrow_right');
    let arrowLeft = this.#elem.querySelector('.carousel__arrow_left');
    let carouselInner = this.#elem.querySelector('.carousel__inner');
    // this.carouselWidth = this.#elem.offsetWidth;
    // this.carouselShift = 0;
    let counter = 0;
    let arrowLength = this.slides.length - 1;

    arrowLeft.style.display = 'none';

    function arrowHideVisible(counter) {
      switch (counter) {
        case 0:
          arrowLeft.style.display = 'none';
          break;
        case arrowLength:
          arrowRight.style.display = 'none';
          break;
          default:
            arrowRight.style.display = '';
            arrowLeft.style.display = '';
          };
    };

    this.#elem.addEventListener('click', (event) => {

      let carouselWidth = this.#elem.offsetWidth;

      if (event.target.closest('.carousel__arrow_right')) {

        if ((counter) < arrowLength) {
          this.carouselShift += carouselWidth;
          counter++;
          carouselInner.style.transform = `translateX(-${this.carouselShift}px)`;

        };

      } else if (event.target.closest('.carousel__arrow_left')) {
        if (counter > 0) {
          counter--;
          this.carouselShift -= carouselWidth;
          carouselInner.style.transform = `translateX(-${this.carouselShift}px)`;
        };
      };
      arrowHideVisible(counter)

    });
  }

  clickButton() {
    this.#elem.onclick = ({ target }) => {
      let btn = target.closest('.carousel__button');
      if (btn) {
        let id = target.closest('[data-id]').dataset.id;

        this.elem.dispatchEvent(new CustomEvent('product-add', {
          detail: id,
          bubbles: true,
        }));

      }
    }
  }
}

