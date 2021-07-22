//1. Написать функцию printPrimes(), которая выводит на консоль простые числа в помежутке от 2 до 1000, используя цикл while.

function getNumber() {
  let n = 1000;
  let i = 1;
  Label: while (i <= n) {
    i++;
    for (let counter = 2; counter < i; counter++) {
      if (i % counter == 0) continue Label;
    }
    console.log(i);
  }
}
