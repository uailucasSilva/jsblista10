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
    setTimeout(move, 2000);
}
function move() {
    txt2 = document.getElementById("tx2").value = txt.value;
    txt.value = "";
}