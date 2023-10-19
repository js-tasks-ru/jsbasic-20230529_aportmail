import createElement from '../../assets/lib/create-element.js';
debugger
export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.segments = steps - 1;
    this.render();

    this.addEventListeners();

    this.setValue(value);
  }

  render() {
    this.elem = createElement(`
        <div class="slider">

        <div class="slider__thumb" style="left: 50%;">
          <span class="slider__value">2</span>
        </div>

        <div class="slider__progress" style="width: 50%;"></div>

        <div class="slider__steps">
          ${'<span></span>'.repeat(this.steps)}

        </div>
      </div>
    `)
  }

  prefix(ref) {
    return this.elem.querySelector(`.slider__${ref}`);
  }

  setValue(value) {
    this.value = value;
    let valuePercents = (value / this.segments) * 100;

    this.prefix('thumb').style.left = `${valuePercents}%`;
    this.prefix('progress').style.width = `${valuePercents}%`;

    this.prefix('value').innerHTML = value;

    if (this.prefix('step-active')) {
      this.prefix('step-active').classList.remove('slider__step-active');
    }

    this.prefix('steps').children[value].classList.add('slider__step-active');
  }

  addEventListeners() {
    this.prefix('thumb').ondragstart = () => false;

    this.prefix('thumb').onpointerdown = this.onPointerDown;

    this.elem.onclick = this.onClick;

  }

  onClick = event => {
    let newLeft = (event.clientX - this.elem.getBoundingClientRect().left) / this.elem.offsetWidth;

    this.setValue(Math.round(this.segments * newLeft))

    this.elem.dispatchEvent(
      new CustomEvent('slider-change', {
        detail: this.value,
        bubbles: true,
      })
    );
  }

  onPointerDown = event => {
    event.preventDefault();
    this.elem.classList.add('slider_dragging');

    document.addEventListener('pointermove', this.onPointerMove);
    document.addEventListener('pointerup', this.onPointerUp);
  }

  onPointerMove = event => {
    event.preventDefault();

    let newLeft = this.newLeft(event);

    this.prefix('thumb').style.left = `${newLeft * 100}%`;
    this.prefix('progress').style.width = `${newLeft * 100}%`;

    this.value = Math.round(this.segments * newLeft);
    this.prefix('value').innerHTML = this.value;

    if (this.prefix('step-active')) {
      this.prefix('step-active').classList.remove('slider__step-active');
    }

    this.prefix('steps').children[this.value].classList.add('slider__step-active');
  }

  onPointerUp = () => {
    document.removeEventListener('pointermove', this.onPointerMove);
    document.removeEventListener('pointerup', this.onPointerUp);

    this.elem.classList.remove('slider_dragging');

    this.prefix('thumb').style.left = `${(this.value / this.segments) * 100}%`;
    this.prefix('progress').style.width = `${(this.value / this.segments) * 100}%`;

    this.elem.dispatchEvent(
      new CustomEvent('slider-change', {
        detail: this.value,
        bubbles: true,
      })
    );
  }

  newLeft(event) {
    let newLeft = (event.clientX - this.elem.getBoundingClientRect().left) / this.elem.offsetWidth;

    if (newLeft < 0) { newLeft = 0 }
    if (newLeft > 1) { newLeft = 1 }

    return newLeft;
  }
}

