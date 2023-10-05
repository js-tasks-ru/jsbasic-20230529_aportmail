/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  #rows;
  #elem;
  constructor(rows) {
    this.#rows = rows;
    this.#elem = document.createElement('table');
    this.render();
  }

  get elem() {
    return this.#elem;
  }

  render() {
    let createTable = `
      <thead>
            <tr>
                <th>Имя</th>
                <th>Возраст</th>
                <th>Зарплата</th>
                <th>Город</th>
                <th></th>
            </tr>
        </thead>
        <tbody>` + this.#rows
        .map(({ name, age, salary, city }) =>
          `<tr>
            <td>${name}</td>
            <td>${age}</td>
            <td>${salary}</td>
            <td>${city}</td>
            <td><button>X</button></td>
          </tr>`)
        .join('') +
      `</tbody>`;
    this.#elem.innerHTML = createTable;

    this.#elem.addEventListener('click', this.buttonClick)
  }

  buttonClick(event) {
    if (event.target.closest('button')) {
      event.target.closest('tr').remove();
    }
  }
}
