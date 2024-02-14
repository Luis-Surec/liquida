


function clickBoton(){
let recibeClic = document.getElementById("table_data").value;

if(recibeClic =="usuario01"){
  window.location.href="solicitudes.html";
  console.log(recibeClic+" este es el mensaje de *****************recpcion");

}else{
  console.log("no es  el usuario ----------------------------------correcto");
}

//document.getElementById("recibeDatos").innerHTML = recibeClic;
}



function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

asignarTextoElemento(p," cambiando texte desde function");
asignarTextoElemento(h1," cambiando texte desde function");


/*
if(recibeClic==="usuario01"){
   //console.log(recibeClic+"***********");
  window.location.href="solicitudes.html";
}
if(recibeClic=="usuario02"){
  window.location.href="solicitudesP.html"
  }
  if(recibeClic==3){
    window.location.href="solicitudesA.html"
  
  }
  document.getElementById("recibeDatos").innerHTML = recibeClic;
 //console.log(recibeClic+"***********");*/
