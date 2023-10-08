import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  #elem;
  constructor(slides) {
    this.slides = slides;
    this.render();
  }

  get elem() {
    return this.#elem
  }

  render() {
    this.#elem = createElement(`
      <div class="carousel">
        <!--Кнопки переключения-->
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>

        <div class="carousel__inner">
          <!--Верстка 1-ого слайда-->`
          + this.slides.map(({name, price, image, id}) =>
          `<div class="carousel__slide" data-id="penang-shrimp">
          <img src="/assets/images/carousel/${image}" class="carousel__img" alt="slide">
            <div class="carousel__caption">
            <span class="carousel__price">${price}</span>
              <div class="carousel__title">${name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>`).join('') + `

        </div>
        </div>
      </div>
      `)
    return this.#elem;
  }
}
