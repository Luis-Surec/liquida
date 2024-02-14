
let  recibeDatos=document.getElementById("encriptarTexto").value;
let resultado = sumar();

function sumar(){
    let valor1=50;
    let valor2=2;
    let resultado= valor1+valor2;
return resultado;
}


function resta(){

let resultadoSuma = sumar();
let restante = resultadoSuma-10;
console.log(restante+"  "+"desde funcion  resta");
let enviaDato=document.getElementById("recibeTexto").innerHTML=  resultado + recibeDatos;

}



/*

function sumar(){
    let valor1=50;
    let valor2=2;
    let resultado= valor1+valor2;
return resultado;
}


function resta(){

let resultadoSuma = sumar();
let restante = resultadoSuma-10;
console.log(restante+"  "+"desde funcion  resta");
let enviaDato=document.getElementById("recibeTexto").innerHTML=  recibeDatos;
}
*/



/*
function procesarTexto(){

    recibeDatos=document.getElementById("recibeTexto").innerHTML,procesarTexto;
    console.log(procesarTexto);
}*/