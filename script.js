// a --> ai
// e --> enter
// i --> imes
// o --> ober
// u --> ufat



function encriptar(){
    var texto = document.getElementById("areatexto").value.toLowerCase();
    // i = es para q afecte tsnto mayusculas como minusculas
    // g = es para toda la linea u oracion
    // m = espara que afecte a multiples lineas o parrafos
            var textoCifrado = texto.replace(/e/igm,"enter");
            var textoCifrado = textoCifrado.replace(/i/igm,"imes");
            var textoCifrado = textoCifrado.replace(/a/igm,"ai");
            var textoCifrado = textoCifrado.replace(/o/igm,"ober");
            var textoCifrado = textoCifrado.replace(/u/igm,"ufat");
     //desaparecer imagen 
    document.getElementById("muñeco").style.dispaly= "none";
   //imprimimos el resultado en la clase textarea_2 
   document.getElementById("areatexto_2").innerHTML = textoCifrado;
   //boton copiar
   document.getElementById("copiar_1").style.display = "show";
   document.getElementById("copiar_1").style.display = "inherit";

   
}

function desencriptar(){
    var texto = document.getElementById("areatexto").value.toLowerCase();
    // i = es para q afecte tsnto mayusculas como minusculas
    // g = es para toda la linea u oracion
    // m = espara que afecte a multiples lineas o parrafos
            var textoCifrado = texto.replace(/enter/igm,"e");
            var textoCifrado = textoCifrado.replace(/imes/igm,"i");
            var textoCifrado = textoCifrado.replace(/ai/igm,"a");
            var textoCifrado = textoCifrado.replace(/ober/igm,"o");
            var textoCifrado = textoCifrado.replace(/ufat/igm,"u");
     //desaparecer imagen 
    document.getElementById("muñeco").style.dispaly = "none";
   //imprimimos el resultado en la clase textarea_2 
   document.getElementById("areatexto_2").innerHTML = textoCifrado;
   //boton copiar
   document.getElementById("copiar_1").style.display = "show";
   document.getElementById("copiar_1").style.display = "inherit";

}

function copiar(){
    var contenido = document.querySelector("#areatexto_2");
    contenido.select();
    document.execCommand("copy");
    alert("se copio");
}

