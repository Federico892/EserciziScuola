const container = document.getElementById("container-tabella");
const tabella = document.createElement("table");

for (let i = 1; i <= 10; i++) {
    const riga = document.createElement("tr");

    // Controllo se la riga è DISPARI
    // (i % 2 !== 0) Controllo con l'operatore % per vedere se è dispari
    if (i % 2 !== 0) {
        riga.setAttribute("class", "evidenziato");
    }

    for (let j = 1; j <= 10; j++) {
        const cella = document.createElement("td");
        cella.textContent = i * j;
        riga.appendChild(cella);
    }

    tabella.appendChild(riga);
}

container.appendChild(tabella);
