do {

  numeriutente = prompt('Dimmi un numero di 4 cifre e io ti farò la somma');
  console.log(numeriutente)

} while (parseInt(numeriutente) < 1000 || parseInt(numeriutente) > 9999);

let dividiNumeri = numeriutente.split('').map(Number);
console.log(dividiNumeri)

let somma = 0;

for (let i = 0; i < 4; i++) {
  somma = somma + dividiNumeri[i];
}

console.log(somma)

