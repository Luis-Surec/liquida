

//------------------recibiendo texto de enviandoTexto de textArea de html--------------------------- 

function botonEnviarTexto(){
   let  recibeTexto = document.getElementById("encriptar").value;
    var constantes = {
       e:"enter",
       i:"imes",
       a:"ai",
       o:"ober",
       u:"ufat"
    };
    recibeTexto = recibeTexto.replace(/e|i|a|o|u/g, function(matched){
      return constantes[matched];
    });
    console.log(recibeTexto);
 return(recibeTexto);
/* si esta aca en la funcion si se puede ver, pero afuera no funciona
    function asignarTexto(elemento,texto){
        let elementoHTML = document.querySelector(elemento);
        elementoHTML.innerHTML=texto;
    }
    
    asignarTexto("textarea",recibeTexto);
    asignarTexto("p",recibeTexto);
    */
 
}
let recibe = recibeTexto(constantes);
console.log(recibe);

let recibe1 = recibeTexto;
console.log(recibe1);



function asignarTexto(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
}

asignarTexto("textarea",recibeTexto);
asignarTexto("p",recibeTexto);

