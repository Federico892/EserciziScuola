function inverti_cifre(numero) {
  let invertito = 0;
  let segno = 1;

  // Gestione numeri negativi
  if (numero < 0) {
    segno = -1;
    numero = -numero;
  }

  while (numero > 0) {
    let cifra = numero % 10;
    invertito = invertito * 10 + cifra;
    numero = Math.floor(numero / 10); // divisione intera corretta
  }

  return invertito * segno;
}

function calcola() {
  let valore = document.getElementById("numero").value;
  let numero = Number(valore);

  if (isNaN(numero)) {
    document.getElementById("risultato").innerHTML = "Inserisci un numero valido";
    return;
  }

  let risultato = inverti_cifre(numero);

  document.getElementById("risultato").innerHTML = risultato;
}
