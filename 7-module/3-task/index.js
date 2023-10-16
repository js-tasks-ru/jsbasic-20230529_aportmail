export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    this.elem = document.createElement('div');
    this.elem.classList.add('slider');
    this.render();
    this.addEventListeners();
  }

  render() {
    this.elem.innerHTML = `
      
        <div class="slider__thumb" style="left: 50%;">
          <span class="slider__value">2</span>
        </div>

        <div class="slider__progress" style="width: 50%;"></div>

    `
    this.span();
    this.elem.append(this.sliderSteps);
  }

  span() {
    this.sliderSteps = document.createElement('div');
    this.sliderSteps.classList.add('slider__steps')
    let i;
    for (i = 0; i < this.steps; i++) {
      let span = document.createElement('span');
      span.setAttribute('id', `${i}`);
      this.sliderSteps.append(span);
    }
    this.sliderSteps.firstChild.classList.add('slider__step-active')
    return this.sliderSteps
  }


  addEventListeners() {
    this.elem.onclick = (event) => {
      let left = event.clientX - this.elem.getBoundingClientRect().left;
      let leftRelative = left / this.elem.offsetWidth;
      let segments = this.steps - 1;
      let approximateValue = leftRelative * segments;
      this.value = Math.round(approximateValue);
      let valuePercents = this.value / segments * 100;

      let activeOld = document.querySelector('.slider__step-active');
      if (activeOld) {
        activeOld.classList.remove('slider__step-active');
      }
      document.querySelector('.slider__value').innerHTML = this.value;
      document.getElementById(`${this.value}`).classList.add('slider__step-active')

      let thumb = document.querySelector('.slider__thumb');
      let progress = document.querySelector('.slider__progress');

      thumb.style.left = `${valuePercents}%`
      progress.style.width = `${valuePercents}%`

      this.elem.dispatchEvent(new CustomEvent('slider-change', {
        detail: this.value,
        bubbles: true,
      }))

    }
  }

}
