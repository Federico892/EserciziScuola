// Seleziona tutti i pulsanti della pagina
const bottoni = document.querySelectorAll("button");

// Usa un ciclo per cambiarli tutti insieme
bottoni.forEach(bottone => {
    bottone.style.backgroundColor = "green"; // Sfondo verde
    bottone.style.color = "white";            // Testo bianco
    bottone.style.borderRadius = "10px";      // Angoli arrotondati
});
