//4. Написать функцию getFibonacci(n), которая вовзращает n-ое число Фибоначчи.

function getFibonacci(n) {
    let FiArray = [1, 1];
    for (let counter = 2; counter <= n; counter++) {
        FiArray.push (FiArray[counter - 1] + FiArray[counter - 2]);
    }
    return FiArray[n - 1];
}