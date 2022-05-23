var input = document.querySelector("input")
var MOSTRAR = document.getElementById("MOSTRAR");
//Funcion que encripta el texto, primero toma el valor del input y luego realiza el cambio de forma sensilla
function encriptar(){
    console.log(input.value)
    var frase = input.value.toLowerCase()
    var encriptar = frase
                    .replaceAll("e","enter")
                    .replaceAll("o","ober")
                    .replaceAll("i","imes")
		            .replaceAll("a","ai")
                    .replaceAll("u","ufat");
    console.log(" encriptado: "+encriptar);
    MOSTRAR.innerHTML = encriptar;
}
//funcion para desencriptar
function desencriptar(){
    var frase = input.value.toLowerCase()
    var desencriptar = frase
                        .replaceAll("imes","i")
			            .replaceAll("enter","e")
			            .replaceAll("ai","a")
			            .replaceAll("ober","o")
			            .replaceAll("ufat","u");
    console.log("desencriptado: "+desencriptar);
    MOSTRAR.innerHTML = desencriptar;
} 
//Funcion para copiar texto
function copiar(){
    navigator.clipboard.writeText(MOSTRAR.innerHTML)
    input.value= MOSTRAR.innerHTML
    console.log("UwU")
}