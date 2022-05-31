// Dada una lista de números, crear una función que los ordene de menor a mayor sin utilizar métodos nativos de arreglos (map, filter, forEach, reduce, etc)

let numbers = [23, 45, 1, 354, 17, 6, 80, -23, 0, 65, -10, -4];

function sortNumbers(numbers){
    for (let i = 1; i < numbers.length; i++) {
        let previous = i - 1;
        let aux = numbers[i];

        while (previous >= 0 && numbers[previous] > aux) {
            numbers[previous + 1] = numbers[previous];
            --previous;
        }
        numbers[previous + 1] = aux;
    }
    return numbers;
}
    
let resultado = sortNumbers(numbers);
console.log(resultado)

