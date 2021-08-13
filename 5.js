//5. Известны результаты каждой из четырёх четвертей баскетбольной встречи.
//Нужно определить победителя матча. Побеждает команда, набравшая больше очков в течение всего матча.
//Напишите функцию getWinner(points) возвращающую номер победившей команды, либо undefined в случае ничьей.
//Параметр points — это массив строк.

function getWinner(points) {
  let finalCount1 = 0,
    finalCount2 = 0;
  for (let counter in points) {
    let onePart = points[counter].split(':');
    finalCount1 += Number(onePart[0]);
    finalCount2 += Number(onePart[1]);
  }
  if (finalCount1 > finalCount2) {
    return 1;
  } else if (finalCount1 < finalCount2) {
    return 2;
  }
}
