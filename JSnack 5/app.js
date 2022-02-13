const numeri = [];
let contatore = 0;
while (contatore < 6) {
  const numeroUser = parseInt(prompt('Inserisci un numero'));

  if (numeroUser % 2 === 0) {

  } else {
    numeri.push(numeroUser)
  }

  contatore++
}


console.log(numeri)