var n = parseInt(prompt("Informe a quantidade de nomes que você irá cadastrar:"));
while (isNaN(n)) n = prompt("informe um valor válido: ");
var vet = [];
for (i = 0; i < n; i++) {
    nome = prompt(`Informe o ${i + 1}° nome:`);
    while (nome == "" || nome == null) nome = prompt("Informe um nome válido:");
    vet.push(nome);
    console.log(vet);
    console.log(nome);
}
var i = 0;
var cron = setInterval(function () {
    document.write(`<p>${vet[i]}</p>`);
    i++;
    if (i >= vet.length) {
        clearInterval(cron);
    }
}, 1000)

