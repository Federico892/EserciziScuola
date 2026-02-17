let a = 1;
let b = "ciao";
let c = null;
let d = {}
let e = function(){};

if (typeof a === "number"){
	console.log("e un numero");
}
if(typeof b === "string"){
	console.log("e una stringa");
}
if (typeof c === "null"){
	console.log("e null");
}
if (typeof d === "object"){
	console.log("e un oggetto");
}
if (typeof e === "function"){
	console.log("e una funzione");
}
