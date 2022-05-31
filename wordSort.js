//Dada la siguiente cadena, ordenar cada una de las palabras a partir del número que se encuentre dentro de ellas

const values = "cof3fe b1anana s4ugar pie2";

const arraySplit = values.split(" ");
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
let output = []

numbers.forEach(existString);

function existString(item){
    for (let i = 0; i < arraySplit.length; i++) {
        const element = arraySplit[i];
        if(element.includes(item)){
            output.push(element)
        }
    }
}
console.log(values)
console.log(output.join(" "))