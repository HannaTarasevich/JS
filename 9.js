//9. Напишите функцию getTimeDelta(x, y) определяющую, сколько секунд прошло между двумя моментами времени x и y.
//Время передается в формате 'HH:MM:SS'. Минимальное значение — '00:00:00', максимальное — '23:59:59'.
//По условию x всегда меньше y.

function getTimeDelta2(x, y) {
  let arrayX = x.split(':');
  let arrayY = y.split(':');
  let z =
    (arrayY[0] - arrayX[0]) * 60 * 60 +
    (arrayY[1] - arrayX[1]) * 60 +
    (arrayY[2] - arrayX[2]);
  return z;
}

function getTimeDelta(x, y) {
  let getDate = (string) =>
    new Date(
      0,
      0,
      0,
      string.split(':')[0],
      string.split(':')[1],
      string.split(':')[2]
    );

  let differenceSec = (getDate(y) - getDate(x)) / 1000;
  return differenceSec;
}
