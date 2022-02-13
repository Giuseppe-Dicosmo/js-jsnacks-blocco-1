let lista = []

for (let i = 1; i <= 10; i++) {
  lista.push(i)
}
console.log(lista)

let somma = 0;

for (let y = 0; y < lista.length; y++) {
  somma = somma + lista[y];
}
console.log(somma)

somma = somma / 10;
console.log(somma)

