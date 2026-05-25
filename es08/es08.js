// AGGREGAZIONE LOGICA ESERCIZI 1-12

// --- 1. Bottoni & Hover ---
const bottoni = document.querySelectorAll("button");
bottoni.forEach(btn => {
    btn.addEventListener("mouseenter", () => { btn.style.transform = "scale(1.05)"; btn.style.filter = "brightness(1.2)"; });
    btn.addEventListener("mouseleave", () => { btn.style.transform = "scale(1)"; btn.style.filter = "brightness(1)"; });
});

// --- 2. Codice Fiscale ---
document.getElementById("codice_fiscale").addEventListener("input", function() {
    this.value = this.value.toUpperCase();
});

// --- 3. Focus/Blur ---
const campoDinamico = document.getElementById("campoDinamico");
campoDinamico.addEventListener("focus", () => { campoDinamico.style.backgroundColor = "#fef9c3"; campoDinamico.style.borderColor = "#f59e0b"; });
campoDinamico.addEventListener("blur", () => { campoDinamico.style.backgroundColor = ""; campoDinamico.style.borderColor = ""; });

// --- 4. Hidden ---
document.getElementById("btnNascondi").addEventListener("click", () => {
    document.getElementById("testoDaNascondere").hidden = true;
});

// --- 5. Confronto Password ---
const p1 = document.getElementById("password"), p2 = document.getElementById("ripetiPassword"), err5 = document.getElementById("messaggioErrore");
p2.addEventListener("input", () => {
    const isMatch = p1.value === p2.value;
    err5.style.display = isMatch ? "none" : "block";
    p2.style.borderColor = isMatch ? "#10b981" : "#ef4444";
});

// --- 6. Sfondo Password ---
document.getElementById("pass").addEventListener("input", function() {
    this.style.backgroundColor = this.value.length === 0 ? "white" : (this.value.length < 8 ? "#fee2e2" : "#dcfce7");
});

// --- 7. Messaggio Output ---
document.getElementById("btnMostra").addEventListener("click", () => {
    const out = document.getElementById("output7");
    out.textContent = "✅ Azione eseguita con successo!";
    out.style.color = "#2563eb";
});

// --- 8. Strength Meter + Colori Progress Bar ---
const barra = document.getElementById("barraForza"), out8 = document.getElementById("output8");
document.getElementById("passInput").addEventListener("input", function() {
    let pwd = this.value, score = 0;
    if (pwd.length >= 8) score += 20;
    if (/[A-Z]/.test(pwd)) score += 20;
    if (/[a-z]/.test(pwd)) score += 20;
    if (/[0-9]/.test(pwd)) score += 20;
    if (/[^A-Za-z0-9]/.test(pwd)) score += 20;

    barra.value = score;
    // Cambio colore dinamico della barra (Chrome/Safari)
    let color = score <= 40 ? "#ef4444" : (score <= 80 ? "#f59e0b" : "#10b981");
    document.styleSheets[0].insertRule(`progress::-webkit-progress-value { background-color: ${color}; }`, 0);
    
    out8.textContent = score <= 40 ? "Sicurezza: DEBOLE" : (score <= 80 ? "Sicurezza: MEDIA" : "Sicurezza: OTTIMA");
    out8.style.color = color;
});

// --- 9-10. Generatore Email ---
const genMail = (n, c, target) => {
    let name = n.value.trim().toLowerCase(), sur = c.value.trim().toLowerCase();
    target.value = (name && sur) ? `${name}.${sur}@dominio.it` : "";
};
document.getElementById("btnGeneraEmail").addEventListener("click", () => genMail(document.getElementById("nome"), document.getElementById("cognome"), document.getElementById("emailRisultato")));
document.querySelectorAll("#nomeChange, #cognomeChange").forEach(el => el.addEventListener("change", () => genMail(document.getElementById("nomeChange"), document.getElementById("cognomeChange"), document.getElementById("emailRisultatoChange"))));

// --- 11-12. Somiglianza ---
const oldP = document.getElementById("oldPass"), newP = document.getElementById("newPass"), outS = document.getElementById("outputSomiglianza");
newP.addEventListener("input", () => {
    if (!newP.value) { outS.textContent = ""; return; }
    if (newP.value === oldP.value) { outS.textContent = "❌ Identica alla vecchia!"; outS.style.color = "red"; }
    else if (oldP.value.length >= 4 && newP.value.includes(oldP.value)) { outS.textContent = "⚠️ Troppo simile!"; outS.style.color = "orange"; }
    else { outS.textContent = "✅ Password valida"; outS.style.color = "green"; }
});
