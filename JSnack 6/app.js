let numeriUtente = Math.floor(prompt('Inserisci un numero da 1 a 10'));
console.log(numeriUtente)

if (isNaN(numeriUtente) || numeriUtente >= 11) {
  alert('Errore')
} else {

  cubo = numeriUtente ** 3
  console.log(cubo)

  alert(`Elevato al cubo e ${cubo}`)
}