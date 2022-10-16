function verificar() {
    txt = document.getElementById("tx1");
    if (txt.value == "") {
        alert("É necessário preencher com algum texto primeiro")
        txt.focus();
    }
    else {
        time();
    }
}
function time() {
    opc = document.getElementById("opc").value;
    setTimeout(move, opc);
}
function move() {
    txt2 = document.getElementById("tx2").value = txt.value;
    txt.value = "";
}