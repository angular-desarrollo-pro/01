//Arrays

const list: (string | number | boolean)[] = ['Tomates', 4, true, 'Lechuga', 2, true]

const list2: [string, number, boolean, string] = ['Bananas', 5, false, 'Tomates']

const list3: string[] = ['Hola mundo', 'Angular', 'Ts', 'JS']


// Objetos

// const user = {
//   name: string = 'Juan'
// }

//! INTERFACE

interface Country {
  name: string;
  idioma: string;
  comidasTipicas: string[];
  poblacion?: number
}

const country: Country = {
  name: 'Colombia',
  idioma: "Español",
  comidasTipicas: ['Bandeja paisa', 'Ajiaco'],
  // poblacion: 90
}

console.log(country.idioma);//accedo a las propiedades del objeto con la nomenclatura del punto

console.log(country['comidasTipicas']); //nomenclatura de los corchetes
export { }