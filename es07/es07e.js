// Seleziono il contenitore
const container = document.getElementById("container-tabella");

// 1. Creo l'elemento table
const tabella = document.createElement("table");

// Ciclo per le 10 righe
for (let i = 1; i <= 10; i++) {
    const riga = document.createElement("tr");

    // Ciclo per le 10 colonne
    for (let j = 1; j <= 10; j++) {
        const cella = document.createElement("td");
        
        // Calcolo il prodotto e lo inserisco come testo
        cella.textContent = i * j;
        
        // 2. Appendo la cella alla riga
        riga.appendChild(cella);
    }

    // 3. Appendo la riga alla tabella
    tabella.appendChild(riga);
}

// 4. Appendo la tabella completa al contenitore nel DOM
container.appendChild(tabella);
