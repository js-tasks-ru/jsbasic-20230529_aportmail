import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.product = product;
    console.log(product);
    // this.render();
  }

  render() {
    this.elem = document.createElement('DIV');
    this.elem.classList.add('card');

    this.elem.innerHTML = this.product
      .map(({ name, price, category, image, id }) => 
        `
      <div class="card__top">
        <img src="/assets/images/products/laab_kai_chicken_salad.png" class="card__image" alt="product">
        <span class="card__price">${price}</span>
      </div>
      <div class="card__body">
        <div class="card__title">${name}</div>
        <button type="button" class="card__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
    
    `)
      .join('');

    return console.log(this.elem);
  }
}