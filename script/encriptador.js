function encripta(){
let  recibeDatos=document.getElementById("encriptarTexto").value;
let textoCifrado =recibeDatos
.replace(/a/gi, 'ia')
.replace(/e/gi, 'enter')
.replace(/i/gi, 'ooooo')
.replace(/o/gi, 'ober')
.replace(/u/gi, 'ufat');
if( document.getElementById("textoCifrado").value.length !=0 ){
document.getElementById("recibeDatos").value =textoCifrado;
let enviaDato=document.getElementById("recibeTexto").innerHTML=textoCifrado;
console.log(enviaDato);
return enviaDato
}

}

