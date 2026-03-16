document.getElementById('btnCalcola').addEventListener('click', function() {
    let n1 = Number(document.getElementById('num1').value);
    let n2 = Number(document.getElementById('num2').value);
    let op = document.getElementById('operazione').value;
    let display = document.getElementById('risultato');

    // Reset stile errore
    display.classList.remove('errore');

    let res;
    switch (op) {
        case "som": res = n1 + n2; break;
        case "sot": res = n1 - n2; break;
        case "mol": res = n1 * n2; break;
        case "div": 
            if (n2 === 0) {
                display.innerHTML = "ERRORE! Impossibile dividere per zero!";
                display.classList.add('errore');
                return;
            }
            res = n1 / n2; 
            break;
    }

    display.innerHTML = `Il risultato è: ${res}`;
});
