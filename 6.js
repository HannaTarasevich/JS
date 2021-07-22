//6. Счастливым билетом называют такой билет с шестизначным номером, где сумма первых трёх цифр равна сумме последних трёх. 
//Напишите функцию ret которая проверяет «счастливость» билета. 
//Функция должна обрабатывать number и как строку, и как натуральное число, т.е. не важно, какой тип вы ей «скормите».

function isLuckyTicket(number) {
    let tempArray = String(number).split('');
    return (tempArray.length == 6) ? ((tempArray[0] + tempArray[1] + tempArray[2]) == (tempArray[tempArray.length - 1] + tempArray[tempArray.length - 2] + tempArray[tempArray.length - 3])) : false;
}
