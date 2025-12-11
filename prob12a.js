// Problema 12a: Componenta maximă dintre cele pare

let v = [3, 12, -4, 7, 18, 5, 10];  
let maxPar = null;

for (let i = 0; i < v.length; i++) {
    if (v[i] % 2 === 0) {        
        if (maxPar === null || v[i] > maxPar) {
            maxPar = v[i];      
        }
    }
}

if (maxPar === null) {
    console.log("Nu există elemente pare în vector.");
} else {
    console.log("Componenta maximă dintre cele pare este:", maxPar);
}
