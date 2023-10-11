import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
this.elem;

    this.categories = categories;
    this.render();
  }

  render() {
    this.elem = createElement(`
        <div class="ribbon">

        <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </button>

        <nav class="ribbon__inner">`

      + this.categories.map(({ id, name }) =>
        `<a href="#" class="ribbon__item" data-id="${id}">${name}</a>`
      ) +

      `</nav>
        <button class="ribbon__arrow ribbon__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </button>
      </div>
    `)
    this.elem.querySelector('.ribbon__item').classList.add('ribbon__item_active');

    this.slider();
    this.elem.querySelector('.ribbon__inner').addEventListener('scroll', this.hideVisible() );

  }

  slider() {
    this.elem.onclick = ({ target }) => {

      if (target.closest('.ribbon__arrow_right')) {

        this.elem.querySelector('.ribbon__inner').scrollBy(-350, 0);
        // this.hideVisible();
      };

      if (target.closest('.ribbon__arrow_left')) {
        this.elem.querySelector('.ribbon__inner').scrollBy(350, 0);
        // this.hideVisible();
      };
    }


  }

  hideVisible() {
    let ribbonInner = this.elem.querySelector('.ribbon__inner');
    let arrLeft = this.elem.querySelector('.ribbon__arrow_left');
    let arrRight = this.elem.querySelector('.ribbon__arrow_right');
    let scrollWidth = ribbonInner.scrollWidth;
    let clientWidth = ribbonInner.clientWidth;
    let scrollLeft = ribbonInner.scrollLeft;
    let scrollRight = scrollWidth - scrollLeft - clientWidth;

    if (scrollRight == 0) {
      arrRight.classList.remove('.ribbon__arrow_visible')
    }

    if (scrollLeft == 0) {
      arrLeft.classList.remove('.ribbon__arrow_visible')
    }


    // let scrollLeft = this.elem.querySelector('.ribbon__inner').scrollLeft;
    console.log(scrollLeft);
  }
}
