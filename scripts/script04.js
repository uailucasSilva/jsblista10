var tempo;
function def() {
    tempo = parseInt(prompt("Informe quanto(s) segundo(s) deseja esperar:"));
    while (isNaN(tempo)) {
        tempo = prompt("Informe um valor válido:");
    }
    document.getElementById("opc").innerHTML = tempo;
    var cron = setInterval(function () {
        tempo--;
        document.getElementById("opc").innerHTML = tempo;
        if (tempo == 0 || tempo < 0) {
            clearInterval(cron);
            window.open('https://www.google.com.br/', '_self')
        }
    }, 1000)
}