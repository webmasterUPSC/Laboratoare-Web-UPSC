// Problema 10 - Calculul numărului de cifre

let n = 123456;  // Poți schimba numărul
let count = 0;
let x = n;

while (x > 0) {
    count++;
    x = Math.floor(x / 10);
}

console.log("Numărul de cifre ale numărului", n, "este:", count);
