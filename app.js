//variables


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}



function encriptador(){
    //capturamos el texto a encriptar, usamos "value" para que nos de el valor de la variable 
    let textoUsuario = document.getElementById("textoEncriptar").value; 

        // Llaves de encriptación  | nota: la letra a debe ir después de la letra i sino no no reconoce el cambio de la letra a    
        textoUsuario = textoUsuario.replace(/e/gi, "enter");
        textoUsuario = textoUsuario.replace(/i/gi, "iems");
        textoUsuario = textoUsuario.replace(/a/gi, "ai");
        textoUsuario = textoUsuario.replace(/o/gi, "ober");
        textoUsuario = textoUsuario.replace(/u/gi, "ufat");     
        //coloamos el texto en el seccion de encriptación  usando esta función con los parametos de que elemnto vamos a  cambiar  y que rexto nuebo vamos a colocar
        asignarTextoElemento("#texto-cifrado", textoUsuario); 

        document.getElementById("div1").style.visibility="hidden";
    }    

   
function desencriptador(){
    let textoUsuario = document.getElementById("textoEncriptar").value;

    textoUsuario = textoUsuario.replace(/enter/gi, "e");
    textoUsuario = textoUsuario.replace(/iems/gi, "i");
    textoUsuario = textoUsuario.replace(/ai/gi, "a");
    textoUsuario = textoUsuario.replace(/ober/gi, "o");
    textoUsuario = textoUsuario.replace(/ufat/gi, "u"); 

    asignarTextoElemento("#texto-cifrado", textoUsuario);

    document.getElementById("div1").style.visibility="hidden";   
}


function copiarTexto(){

let textoCopia = document.getElementById("texto-cifrado");
textoCopia.select();
navigator.clipboard.writeText(textoCopia.value);
alert(`Texto copiado: ${textoCopia.value}`)

}

