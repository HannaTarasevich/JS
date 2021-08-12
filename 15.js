//Создать класс матрицы. Инициализировать матрицу через конструктор в виде двумерного массива целых чисел размерностью 2x2 или 3x3.
//Вывести массив на консоль в удобочитаемом виде методом класса.
//Рассчитать определители полученных матриц (для матрицы 3-го порядка используйте правило треугольника) методом класса. Вывести определитель матрицы на консоль методом класса.

class Matrix2 {
  constructor([[a, b], [c, d]]) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
  }

  printMatrix() {
    return console.table([
      [this.a, this.b],
      [this.c, this.d],
    ]);
  }

  getMatrixDeterminant() {
    return this.a * this.d - this.b * this.c;
  }
}

class Matrix3 {
  constructor([[a, b, c], [d, e, f], [g, h, i]]) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.e = e;
    this.f = f;
    this.g = g;
    this.h = h;
    this.i = i;
  }

  printMatrix3() {
    return console.table([
      [this.a, this.b, this.c],
      [this.d, this.e, this.f],
      [this.g, this.h, this.i],
    ]);
  }

  getMatrixDeterminant3() {
    return (
      this.a * this.e * this.i +
      this.b * this.f * this.g +
      this.c * this.d * this.h -
      this.c * this.e * this.g -
      this.a * this.f * this.h -
      this.b * this.d * this.i
    );
  }
}
