let m = prompt("Inserisci il coefficiente della x");
let c = prompt("Inserisci il termine noto dell'equazione");

let ascissa1 = m*-1+c;
let ascissa2 = m*10+c;
let p1 = c;
let p2 = -c / m;
console.log(`Prima ascissa (x=-1) ${ascissa1}, Seconda ascissa (x=10) ${ascissa2}`);
console.log(`Intersezione con asse y ${p1}, Intersezione con asse x ${p2}`);

