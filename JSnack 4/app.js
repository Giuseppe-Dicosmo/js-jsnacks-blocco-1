  // L'utente inserisce la sua email
  let nomeUser = prompt('Benvenuto alla festa del grande Gatsby, mi dica il suo nome.').trim();
  console.log(nomeUser);

  // Lista di email
  const invitati = [
    'franco',
    'peppino',
    'ciccio',
    'tonino'
  ]
  console.log(invitati);

  let cercanomeUser = false

  for (let i = 0; i < invitati.length; i++) {
    console.log(i)
    let invitatiLista = invitati[i];

    if (nomeUser == invitatiLista) {
      cercanomeUser = true
    }

  }

  if (cercanomeUser) {
    alert('Benvenuto, si accomodi')
  } else {
    alert('Vada fuori')
  }











