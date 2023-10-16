import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {

    this.categories = categories;
    this.render();
    this.addEventListeners();
  }

  render() {
    this.elem = createElement(`
        <div class="ribbon">

        <button class="ribbon__arrow ribbon__arrow_left ">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </button>

        <nav class="ribbon__inner">`

      + this.categories.map(({ id, name }) =>
        `<a href="#" class="ribbon__item" data-id="${id}">${name}</a>`
      ) +

      `</nav>
        <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </button>
      </div>
    `)
    this.elem.querySelector('.ribbon__item').classList.add('ribbon__item_active');
  }

  addEventListeners() {
    this.elem.querySelector('.ribbon__arrow_right').onclick = (event) => this.arrRightClick(event);
    this.elem.querySelector('.ribbon__arrow_left').onclick = (event) => this.arrLeftClick(event);

    this.elem.querySelector('.ribbon__inner').onscroll = (event) => this.onScroll(event);

    this.elem.onclick = (event) => {
      let item = event.target.closest('.ribbon__item');
      if (item) {
        event.preventDefault();
        this.itemClick(item);
      }
    }
  }

  itemClick(item) {
    this.elem.querySelector('.ribbon__item_active').classList.remove('ribbon__item_active');
    item.classList.add('ribbon__item_active');

    this.elem.dispatchEvent(
      new CustomEvent('ribbon-select', {
        detail: item.dataset.id,
        bubbles: true,
      })
    )
  }

  arrRightClick() {
    this.elem.querySelector('.ribbon__inner').scrollBy(350, 0);
    this.hideVisible();
  }

  arrLeftClick() {
    this.elem.querySelector('.ribbon__inner').scrollBy(-350, 0);
    this.hideVisible();
  }

  onScroll() {
    this.hideVisible()
  }

  scrollLeft() {
    return this.elem.querySelector('.ribbon__inner').scrollLeft;
  }

  scrollRight() {
    return this.elem.querySelector('.ribbon__inner').scrollWidth
      - this.scrollLeft()
      - this.elem.querySelector('.ribbon__inner').clientWidth;
  }

  hideVisible() {
    if (this.scrollLeft() > 0) {
      this.elem.querySelector('.ribbon__arrow_left').classList.add('ribbon__arrow_visible');
    } else {
      this.elem.querySelector('.ribbon__arrow_left').classList.remove('ribbon__arrow_visible');
    }

    if (this.scrollRight() > 1) {
      this.elem.querySelector('.ribbon__arrow_right').classList.add('ribbon__arrow_visible');
    } else {
      this.elem.querySelector('.ribbon__arrow_right').classList.remove('ribbon__arrow_visible');
    }
  }
}

