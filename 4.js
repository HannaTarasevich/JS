//4. Написать функцию getFibonacci(n), которая вовзращает n-ое число Фибоначчи.

function getFibonacci(n) {
  let fiArray = [0, 1];
  for (let counter = 2; counter <= n; counter++) {
    fiArray.push(fiArray[counter - 1] + fiArray[counter - 2]);
  }
  return fiArray[n - 1];
}
