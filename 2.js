//2. Написать функцию printWords(n),  которая в зависимости от переданного в неё целочисленного аргумента n, будет выводить слово «огурец» в нужной форме («12 огурцов», но «22 огурца»).

function printWords(n) {
  let stringN = String(n);
  let newArray = stringN.split('');
  let lastArgument = newArray.length - 1;
  if (
    (n > 5 && n < 20) ||
    newArray[lastArgument] == 5 ||
    newArray[lastArgument] == 0
  ) {
    console.log(`${n} огурцов`);
  } else if (
    newArray[lastArgument] == 2 ||
    newArray[lastArgument] == 3 ||
    newArray[lastArgument] == 4
  ) {
    console.log(`${n} огурца`);
  } else if (newArray[lastArgument] == 1) {
    console.log(`${n} огурец`);
  }
}
