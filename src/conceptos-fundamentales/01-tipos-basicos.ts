//Varible let

let name: string = 'Napoleon'
name = 'Romy'
// name = 6 
//! Error, la variable no pude ser aginada con un tipo diferente al que defini
name = '6'
name = 'David'

console.log(name);

//Variables tipo const
const pi: number = 3.145
console.log(pi);
const isValid: boolean = true
console.log(isValid);

//Union de tipos de datos 
let number: string | number = 4
number = 'cuatro'
console.log(number);


//valores por defecto
let age: number | 'menor de edad' = 18
age = 'menor de edad'
console.log(age);


export { }