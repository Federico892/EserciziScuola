// 1. Chiediamo gli input all'utente
const input1 = prompt("Inserisci il primo numero:");
const input2 = prompt("Inserisci il secondo numero:");
const operazione = prompt("Inserisci l'operazione (+, -, *, /, **):");

// 2. Conversione con Number()
const num1 = Number(input1);
const num2 = Number(input2);

let risultato;
let errore = false;

// 3. Verifica validità (Number restituisce NaN se l'input è vuoto o contiene testo)
if (input1 === null || input1.trim() === "" || isNaN(num1) || 
    input2 === null || input2.trim() === "" || isNaN(num2)) {
    console.log("Errore: Inserisci dei numeri validi.");
    errore = true;
} else {
    // 4. Logica switch
    switch (operazione) {
        case "+":
            risultato = num1 + num2;
            break;
        case "-":
            risultato = num1 - num2;
            break;
        case "*":
            risultato = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                console.log("Errore: Divisione per zero non permessa.");
                errore = true;
            } else {
                risultato = num1 / num2;
            }
            break;
        case "**":
            risultato = num1 ** num2;
            break;
        default:
            console.log("Errore: Operatore non riconosciuto.");
            errore = true;
    }
}

// 5. Output
if (!errore) {
    console.log(`Risultato: ${num1} ${operazione} ${num2} = ${risultato}`);
    alert(`Il risultato è: ${risultato}`);
}
