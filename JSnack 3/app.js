// const numeri = [];
// let somma = 0;

// for (let i = 0; i < 5; i++) {
//   const numeroUser = parseInt(prompt('Inserisci un numero'));
//   numeri.push(numeroUser)
// }
// console.log(numeri)

// for (let i = 0; i < 5; i++) {
//   somma = somma + numeri[i];
//   console.log(somma)
// }

// ----------------------------------------------------------

// let somma = 0;

// for (let i = 0; i < 5; i++) {
//   const numeroUser = parseInt(prompt('Inserisci un numero'));
//   somma = somma + numeroUser;
//   console.log(somma)
// }

// ----------------------------------------------------------

let somma = 0;
let contatore = 1;
while (contatore <= 5) {
  const numeroUser = parseInt(prompt('Inserisci un numero'));
  somma = somma + numeroUser;
  console.log(somma)
  contatore++
}




