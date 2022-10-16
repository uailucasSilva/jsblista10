var nome;
var txtS = 14;
function mostNome() {
    nome = prompt("Informe seu nome:");
    while (nome == "" || nome == null) {
        alert("Informe um nome!");
        nome = prompt("Informe seu nome:");
    }
    document.getElementById("pNome").innerHTML = nome;
    var cron = setInterval(function () {
        txtS += 2;
        document.getElementById("pNome").style.fontSize = `${txtS}px`;
        if (txtS == 40) clearInterval(cron);
    }, 500)
}




