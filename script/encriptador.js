function EnviarText(){

  let recibeT= document.getElementById("textoRec").value;
  let recibeProc = recibeT;
  var constantes = {
  e:"enter",
  i:"imes",
  a:"ai",
  o:"ober",
  u:"ufat",
  A:"AI"

};

if(recibeT = recibeT.replace(/e|i|a|o|u/gi, function(matched){
  return constantes[matched];
  
 })){


  let enviaDato = document.getElementById("textoEnc").innerHTML=recibeT;
  console.log( recibeT);
 } else{
  let enviaDato = document.getElementById("textoEnc").innerHTML= '<img src="../img/encriptador.png">';
console.log("no  hay mensaje");
 };
}








//-----https://app.aluracursos.com/forum/topico-encriptador-de-texto-213839
//https://www.google.com/search?q=encripatdor+conjavascritp&oq=encripatdor+conjavascritp&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIJCAEQIRgKGKABMgkIAhAhGAoYoAHSAQkxMzk3NGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:4eaf685d,vid:QI4Jaz3gLm4,st:0
//------------------recibiendo texto de enviandoTexto de textArea de html--------------------------- 
/*
function EnviarText(){

  let recibeT= document.getElementById("textoRec").value;
  let recibeProc = recibeT;
  var constantes = {
  e:"enter",
  i:"imes",
  a:"ai",
  o:"ober",
  u:"ufat",
  A:"AI"

};

if(recibeT = recibeT.replace(/e|i|a|o|u/gi, function(matched){
  return constantes[matched];
  
 })){


  let enviaDato = document.getElementById("textoEnc").innerHTML=recibeT;
  console.log( recibeT);
 } else{
  let enviaDato = document.getElementById("textoEnc").innerHTML="no  hay mensaje";
console.log("no  hay mensaje");
 };
}
*/