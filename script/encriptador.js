
let enviaM = document.getElementById("textoEnc").innerHTML="Esperando Texto"
function EnviarText(){
let recibeT= document.getElementById("textoRec").value;
let recibeProc = recibeT;
let constantes = {e:"enter", i:"imes", a:"ai", o:"ober", u:"ufat",   A:"AI" };

if(recibeT = recibeT.replace(/e|i|a|o|u/gi, function(matched){
  return constantes[matched];
   })){
  let enviaDato = document.getElementById("textoEnc").innerHTML=recibeT;
  let limpia =document.getElementById("textoRec");
    limpia.value =limpia.defaultValue;
  console.log( recibeT);
 } else{
  let inserMsg = document.getElementById("textoEnc").innerHTML="no  hay mensaje";
console.log("no  hay mensaje");
 };
}





function EnviarText2(){
let recibeT2= document.getElementById("textoEnc").value;
let recibeProc2 = recibeT2;
let constantes2 = {enter: "e", imes:"i", ai:"a", ober:"o", ufat:"u", AI:"A" };

if(recibeT2 = recibeT2.replace(/enter|imes|ai|ober|ufat|AI/gi, function(matched){
  return constantes2[matched];
   })){
  let enviaDato3 = document.getElementById("textoEnc22").innerHTML=recibeT2;
  console.log("este es el texto desencripatdo"+recibeT2);
 } else{
  let inserMsg2 = document.getElementsByTagName("textoEnc2").innerHTML="no  hay mensaje";
console.log("no  hay mensaje");
 };
}


    
