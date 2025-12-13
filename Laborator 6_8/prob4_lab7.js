let browser = navigator.userAgent;

if (browser.includes("Firefox")) {
    document.body.style.backgroundColor = "green";
}
else if (browser.includes("MSIE") || browser.includes("Trident")) {
    document.body.style.backgroundColor = "red";
}
else if (browser.includes("Chrome")) {
    document.body.style.backgroundColor = "yellow";
}
else {
    document.body.style.backgroundColor = "cyan";
}

