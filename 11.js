// Создать класс, описывающий комплексное число. Класс должен иметь 2 поля: действительную и мнимую части, которые инициализируются через конструктор и возвращаются геттерами. Класс должен иметь методы:
// •	возвращающий отображение комплексного числа в алгебраической форме
// •	возвращающий отображение комплексного числа в экспоненциальной форме
// •	возвращающий модуль комплексного числа
// •	возвращающий аргумент модуля комплексного числа в градусах
// •	возвращающий аргумент модуля комплексного числа в радианах
// •	сложения, складывающий комплексное число с другим числом, переданным в параметре
// •	вычитания, вычитающий от комплексного числа другое число, переданное в параметре
// •	умножения, умножающий комплексное число с другим числом, переданным в параметре
// •	деления, делящий комплексное число на другое число, переданное в параметре (в данном методе провести обработку деления на ноль)

class complexNumber {
  constructor(real, imaginary) {
    this._real = real;
    this._imaginary = imaginary;
  }

  get real() {
    return this._real;
  }

  get imaginary() {
    return `${this._imaginary}i`;
  }

  get complexNumber() {
    return `z = ${this._real} + ${this._imaginary}i`;
  }

  get exponential() {
    var argument;
    if (this._real > 0) {
      argument = Math.atan(this._imaginary / this._real);
    } else if (this._real < 0 && this._imaginary >= 0) {
      argument = Math.PI + Math.atan(this._imaginary / this._real);
    } else if (this._real < 0 && this._imaginary < 0) {
      argument = -Math.PI + Math.atan(this._imaginary / this._real);
    } else if (this._imaginary > 0) {
      argument = Math.PI / 2;
    } else if (this._real == 0 && this._imaginary < 0) {
      argument = -Math.PI / 2;
    }

    var r = Math.sqrt(
      this._real * this._real + this._imaginary * this._imaginary
    );

    return `z = ${r} * e ** i ** ${argument}`;
  }

  get module() {
    return Math.sqrt(
      this._real * this._real + this._imaginary * this._imaginary
    );
  }

  get argumentRadians() {
    var argument;
    if (this._real > 0) {
      argument = Math.atan(this._imaginary / this._real);
    } else if (this._real < 0 && this._imaginary >= 0) {
      argument = Math.PI + Math.atan(this._imaginary / this._real);
    } else if (this._real < 0 && this._imaginary < 0) {
      argument = -Math.PI + Math.atan(this._imaginary / this._real);
    } else if (this._imaginary > 0) {
      argument = Math.PI / 2;
    } else if (this._real == 0 && this._imaginary < 0) {
      argument = -Math.PI / 2;
    }
    return argument;
  }

  get argumentDegrees() {
    let radians = this.argumentRadians;
    return (z = (radians * 180) / Math.PI);
  }

  addition(number) {
    let array = number.split('+');
    var a = this._real;
    var b = this._imaginary;
    var c, d;

    if (array[0].includes('i')) {
      c = Number(array[1]);
      d = Number(array[0].split('i')[0]);
    } else if (!array[0].includes('i')) {
      c = Number(array[0]);
      d = Number(array[1].trim().split('i')[0]);
    }
    var imaginaryResult = b + d + 'i';
    var realResult = a + c;
    return `z = ${realResult} + ${imaginaryResult}`;
  }

  subtraction(number) {
    let array = number.split('+');
    var a = this._real;
    var b = this._imaginary;
    var c, d;

    if (array[0].includes('i')) {
      c = Number(array[1]);
      d = Number(array[0].split('i')[0]);
    } else if (!array[0].includes('i')) {
      c = array[0];
      d = array[1].trim().split('i')[0];
    }
    var imaginaryResult = b - d + 'i';
    var realResult = a - c;
    return `z = ${realResult} + ${imaginaryResult}`;
  }

  multiplication(number) {
    let array = number.split('+');
    var a = this._real;
    var b = this._imaginary;
    var c, d;

    if (array[0].includes('i')) {
      c = Number(array[0].split('i')[0]);
      d = Number(array[1]);
    } else if (!array[0].includes('i')) {
      c = array[1].trim().split('i')[0];
      d = array[0];
    }

    var imaginaryResult = a * c + b * d + 'i';
    var realResult = a * d - b * c;
    return `z = ${realResult} + ${imaginaryResult}`;
  }

  division(number) {
    if (number == 0 || number == null) {
      console.log('Division by zero is prohibited.');
      return 'Division by zero is prohibited.';
    }
    let array = number.split('+');
    var a = this._real;
    var b = this._imaginary;
    var c, d;
    if (array[0].includes('i') && number != 0 && number != null) {
      c = Number(array[1]);
      d = Number(array[0].trim().split('i')[0]);
    } else if (!array[0].includes('i') && number != 0 && number != null) {
      c = Number(array[0]);
      d = Number(array[1].trim().split('i')[0]);
    }
    var realResult = (a * c + b * d) / (c ** 2 + d ** 2);
    var imaginaryResult = (b * c - a * d) / (c ** 2 + d ** 2) + 'i';
    console.log(`z = ${realResult} + ${imaginaryResult}`);
    return `z = ${realResult} + ${imaginaryResult}`;
  }
}
