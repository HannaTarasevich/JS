//4. Напишите функцию, которая принимает два массива строк и возвращает сколько раз каждая строка из второго массива появляется в первом массиве.

function comparisonArrays(firstArray, secondArray) {
  let amazingArray = [];
  for (let el in secondArray) {
    for (let i = 0; i < firstArray.length; i++) {
      console.log(secondArray[el], firstArray[i]);
      if (firstArray[i] == secondArray[el]) {
        amazingArray.push(el);
      }
    }
  }
  return amazingArray.length;
}
