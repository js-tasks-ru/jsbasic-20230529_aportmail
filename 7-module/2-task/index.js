import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.render();
    this.addEventListeners();
  }

  render() {
    this.elem = createElement(`
      <div class="modal">
      <!--Прозрачная подложка перекрывающая интерфейс-->
      <div class="modal__overlay"></div>

      <div class="modal__inner">
        <div class="modal__header">
          <!--Кнопка закрытия модального окна-->
          <button type="button" class="modal__close">
            <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
          </button>

          <h3 class="modal__title">
            Вот сюда нужно добавлять заголовок
          </h3>
        </div>

        <div class="modal__body">
          A сюда нужно добавлять содержимое тела модального окна
        </div>
      </div>

    </div>
    `)
  }

  open() {
    document.body.append(this.elem);
    document.body.classList.add('is-modal-open');
  }

  setTitle(title) {
    this.elem.querySelector('.modal__title').innerHTML = title;
  }

  setBody(modalBodyElem) {
    let modalBody = this.elem.querySelector('.modal__body');
    modalBody.innerHTML = '';
    modalBody.insertAdjacentElement('beforeend', modalBodyElem)

  }

  close() {
    document.body.classList.remove('is-modal-open');
    this.elem.remove();
    document.onkeydown = null;
  }

  addEventListeners() {
    this.elem.querySelector('.modal__close').onclick = (event) => this.close(event);
    document.onkeydown = (event) => {
      if (event.code === 'Escape') {
        this.close(event);
      }
    };
  }
}
