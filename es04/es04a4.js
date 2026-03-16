const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log("ERRORE! Inserisci num operazione num");
    console.log("Esempio: node es04a4.js 5 som 3");
    console.log("operazione valide: Somma: som, Sottrazione , sot, Moltiplicazione: molt, Divisione: div");
    process.exit(1); // per terminare il programma
  }

  let num1 = Number(process.argv[2]);
  let operazione = process.argv[3];
  let num2 = Number(process.argv[4]);

  if (operazione == "som"){
    console.log("Risultato: " ,num1+num2);
  }else if (operazione == "sot"){
    console.log("Risultato: " ,num1-num2);
  }else if (operazione == "molt"){
    console.log("Risultato: " ,num1*num2);
  }else if (operazione == "div"){
    if (num2 === 0) {
        console.log("Errore: Impossibile dividere per zero!");
    } else {
        console.log("Risultato:", num1 / num2);
    }
  }else{
    console.log("ERRORE! Operazione inserita non valida");
  }
