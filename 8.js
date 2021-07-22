//8. Напишите функцию isPalindrome(value) определяющую, является ли переданная строка палиндромом, то есть строкой, 
//которая одинаково читается слева направо и справа налево.

function isPalindrome(value) {
    let reversedString = value.split('').reverse().join('');
    return value === reversedString; 
    }
