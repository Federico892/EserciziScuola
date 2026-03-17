let inputNome = document.getElementById("nome");
let inputCognome = document.getElementById("cognome");
let inputEta = document.getElementById("eta");
let bottone = document.getElementById("btn");

bottone.addEventListener("click", ()=>{


    let persona = {
        nome: inputNome.value,
        cognome: inputCognome.value,
        eta: Number(inputEta.value),
    };

    console.log(persona);

})
