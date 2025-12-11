// Problema 18 – Verificarea conținerii unei litere într-un text

let text = "informatica este frumoasa";
let litera = "a";

let pozitie = -1;

// Căutăm prima apariție
for (let i = 0; i < text.length; i++) {
    if (text[i] === litera) {
        pozitie = i;
        break;
    }
}

if (pozitie !== -1) {
    console.log(`Litera '${litera}' se găsește în text, prima dată la poziția ${pozitie}.`);
} else {
    console.log(`Litera '${litera}' NU se găsește în text.`);
}
