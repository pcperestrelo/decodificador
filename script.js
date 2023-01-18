var textInput = document.getElementById("inputText");
var cript = document.getElementById("btnCrip");
var descrip = document.getElementById("btnDesCrip");
var mensagem = document.getElementById("mensDescrip");
var textCopy = document.getElementById("btnCop");


function Criptografar() {
	var texto = textInput.value;
	var criptografar = texto.replace(/e/g, "enter")
    .replace(/a/g, "uoe")
    .replace(/e/g, "eio")
    .replace(/i/g, "gtber")
    .replace(/o/g, "utaf");

    mensagem.innerHTML = criptografar;
}

function Descriptografar() {
	var texto = textInput.value;
	var descriptografar = texto.replace(/enter/g, "e")
    .replace(/uoe/g, "a")
    .replace(/eio/g, "e")
    .replace(/gtber/g, "i")
    .replace(/utaf/g, "o");

    mensagem.innerHTML = descriptografar;
}
	
function Copiar() {
    mensagem.select();
    document.execCommand("copy");
	alert ("Mensagem Copiada!");
}


cript.onclick = Criptografar;
descrip.onclick = Descriptografar;
textCopy.onclick = Copiar;
