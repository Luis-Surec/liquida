/*function encripta(){
let  recibeDatos=document.getElementById("encriptarTexto").value;

if( recibeDatos==recibeDatos ){  
let textoCifrado =recibeDatos
.replace(/a/gi, 'ia')
.replace(/e/gi, 'enter')
.replace(/i/gi, 'igls')
.replace(/o/gi, 'ober')
.replace(/u/gi, 'ufat')

let regresaDatos= document.getElementById("recibeTexto").innerHTML=textoCifrado; 
console.log(recibeDatos);
}else{
     
  console.log("no hay mensaje recibido");
}
}
*/

//acceder a la imagen------


let imgMensaje = [{ 
imagen: '../img/log.jpg'
}
];

let imgEnvia = document.getElementById("recibeTexto")
console.log(imgMensaje);

function encripta() {
  imgMensaje.forEach(mImagen => {
    imgEnvia.insertAdjacentHTML('beforeend','<div class="col-lg-4">' +
'<div align="center" color= b>'+
          '<div>            ' + mImagen.imagen          + '  </div> ' +
          '</div>'
          );
  });
}
document.getElementById("recibeTexto").addEventListener("click",encripta);



/*
function encripta(){
    let  recibeDatos=document.getElementById("encriptarTexto").value;
    let textoCifrado =recibeDatos
    .replace(/a/gi, 'ia')
    .replace(/e/gi, 'enter')
    .replace(/i/gi, 'ooooo')
    .replace(/o/gi, 'ober')
    .replace(/u/gi, 'ufat');
    if( document.getElementById("textoCifrado").value.length ){
    document.getElementById("recibeDatos").value =textoCifrado;
    let enviaDato=document.getElementById("recibeTexto").innerHTML=textoCifrado;
    console.log(enviaDato);
    return enviaDato
    }
    
    }*/
    
    