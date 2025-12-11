// Problema 9: nodesuma elementelor pozitive este impară

let m = 3, n = 4;  

let A = [
    [2, -5, 7, 1],
    [-3, 4, 0, 8],
    [6, -1, 9, -2]
];

let sumaPoz = 0;

for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
        if (A[i][j] > 0) {
            sumaPoz += A[i][j];
        }
    }
}

console.log("Suma elementelor pozitive =", sumaPoz);

if (sumaPoz % 2 === 1)
    console.log("Rezultat: Suma este număr IMPAR.");
else
    console.log("Rezultat: Suma NU este număr impar.");
