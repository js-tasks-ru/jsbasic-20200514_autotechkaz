//"use strict";
let calculator = {
  ValA : 0,
  ValB : 0,
  read(a,b) {
    this.ValA = a;
    this.ValB = b;
    },
  sum() {
    return this.ValB + this.ValA;
    },
  mul() {
    return this.ValB * this.ValA;
    }

};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
