//10. Напишите функцию addN(n), которая вернёт другую функцию.
//Возвращаемая функция должна складывать получаемый аргумент с аргументом n возвращающей функции. Задача на реализацию замыкания.

function addN(n) {
  return (x) => x + n;
}
