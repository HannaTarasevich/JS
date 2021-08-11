//8. Напишите функцию isPalindrome(value) определяющую, является ли переданная строка палиндромом, то есть строкой,
//которая одинаково читается слева направо и справа налево.

function isPalindrome(value) {
  let checkSpecial = value.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  let reversedString = checkSpecial.split('').reverse().join('');
  return reversedString === checkSpecial;
}
