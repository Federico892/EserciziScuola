let libro = {

    titolo: "libro1",
    autore: "federico",
    annoPubblicazione: 2026,
    genere: "avventura",
    numeroPagine: 500,

};

for (let key in libro){
    console.log(`${key} -> ${libro[key]}`);
}
