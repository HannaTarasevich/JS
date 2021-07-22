//7. На экскурсионном маршруте автобусу высотой 512 см встречаются несколько мостов. 
//Напишите функцию checkBusTour(bridges) вычисляющую номер моста под которым не сможет проехать автобус, либо undefined в случае, когда втобус успешно проедет по маршруту. 
//Параметр bridges — это массив чисел.

function checkBusTour(bridges) {
    let busHeight = 512;
    for (let element of bridges) {
        if (element <= busHeight) {
            return bridges.indexOf(element);
        }
    }
}