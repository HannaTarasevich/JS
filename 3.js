//3. Написать функцию divide(a, b), которая возвращает числовой результат деления a на b.
//Выполнить обработку ошибок деления на 0, случаев, когда в параметры a и b были переданы не числовые значения, либо таковые не были переданы вовсе.
//Обработкой ошибки в данном случае посчитаем сообщение пользователю об ошибке и возвращение undefined.

function divide(a, b) {
  if (b == 0) {
    console.log('Division by zero is not allowed.');
  } else if (isNaN(a) || isNaN(b) || !a || !b) {
    console.log('Please, enter numbers only');
  } else {
    let c = a / b;
    return c;
  }
}
