let img = new Image();
let canvasOriginal = document.getElementById("canvasOriginal");
let ctxOriginal = canvasOriginal.getContext("2d");

let canvasNegativ = document.getElementById("canvasNegativ");
let ctxNegativ = canvasNegativ.getContext("2d");

// 1. Încărcarea imaginii
function incarcaImagine(event) {
    let file = event.target.files[0];
    let reader = new FileReader();

    reader.onload = function(e) {
        img.onload = function() {
            ctxOriginal.clearRect(0, 0, canvasOriginal.width, canvasOriginal.height);
            ctxOriginal.drawImage(img, 0, 0, canvasOriginal.width, canvasOriginal.height);
        };
        img.src = e.target.result;
    };

    reader.readAsDataURL(file);
}

// 2. Transformarea în negativ
function transformaNegativ() {
    let imageData = ctxOriginal.getImageData(0, 0, canvasOriginal.width, canvasOriginal.height);
    let data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
        data[i]     = 255 - data[i];     // R
        data[i + 1] = 255 - data[i + 1]; // G
        data[i + 2] = 255 - data[i + 2]; // B
    }

    ctxNegativ.putImageData(imageData, 0, 0);
}
