/*
let  recibeDatos=document.getElementById("encriptarTexto").value;
let resultado = sumar();
*/
function sumar(){
    let valor1=50;
    let valor2=2;
    let resultado= valor1+valor2;
return resultado;
}


function resta(){
let resultadoSuma = sumar();
let restante = resultadoSuma-10;
let  recibeDatos=document.getElementById("encriptarTexto").value;
console.log(recibeDatos.replace(/[a,e,i,o,u]/gi, 'ai' ,'enter','iam'));
let enviaDato=document.getElementById("recibeTexto").innerHTML="valor de:   "+restante +"mensaje:"+" "+recibeDatos;
console.log(enviaDato);
return restante;
}



//-----------funciona
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
let  recibeDatos=document.getElementById("encriptarTexto").value;
let enviaDato=document.getElementById("recibeTexto").innerHTML="valor de:   "+restante +"mensaje:"+" "+recibeDatos;
console.log(enviaDato);
return restante;
}*/