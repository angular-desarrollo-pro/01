// ---------------------
//VOID - UNDEFINED

console.log(void true); //undefined

// void === undefined

function miPrimerFuncion(): undefined {
  return undefined
}

function saludar(): void {
}

function sumar(a: any, b: any) {
  return a + b
}

function sumar2(a: number, b: number): string[] {
  return [(a + b).toString()]
}

console.log(sumar2(4, 5)); //9


//VALORES OPCIONES EN FUNCIONES

const multiply = (firstname: string, multiply: number, lastname?: string) => {

  if (!lastname) {
    return (firstname + ' ').repeat(multiply)
  } else {
    return (firstname + ' ' + lastname + ' ').repeat(multiply)
  }

}

console.log(multiply('Napoleon', 3));

console.log(multiply('Paola', 2, 'Torres'));


export { }