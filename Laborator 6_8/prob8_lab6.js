let secunde = 0;
let cronometru = null;

function startCronometru() {
    if (cronometru === null) {
        cronometru = setInterval(function () {
            secunde++;
            document.getElementById("afisareTimp").textContent =
                secunde + " secunde";
        }, 1000);
    }
}

function stopCronometru() {
    clearInterval(cronometru);
    cronometru = null;
}

function resetCronometru() {
    stopCronometru();
    secunde = 0;
    document.getElementById("afisareTimp").textContent =
        "0 secunde";
}
