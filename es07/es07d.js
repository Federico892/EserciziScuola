// Seleziono gli elementi tramite ID
const inputTesto = document.getElementById("mioTesto");
const bottone = document.getElementById("btnConverti");

// Aggiungo l'evento al click del bottone
bottone.addEventListener("click", function() {
    // Trasformo il valore dell'input in maiuscolo
    inputTesto.value = inputTesto.value.toUpperCase();
});
