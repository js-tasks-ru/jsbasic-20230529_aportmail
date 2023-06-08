let calculator = {
  read() {
    this.a = Number(prompt('Введите число а'));
    this.b = Number(prompt('Введите число b'));
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },
};

// calculator.read();

// console.log(calculator.sum());
// console.log(calculator.mul());

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
