var botonEncriptar = document.querySelector("#encriptar");
botonEncriptar.addEventListener("click", function (event) {
    var textoCajaEncriptado = EncriptarTexto(leerTexto()); //captuto el texto en una funcion
    escribirTexto(textoCajaEncriptado);//le envio el texto capturado
});
var botonDesencriptar = document.querySelector("#desencriptar");
botonDesencriptar.addEventListener("click", function(event){
    var textoCajaDesencriptado = desencriptar(leerTexto());
    escribirTexto(textoCajaDesencriptado);
});
function leerTexto() {
    var textoleido = document.querySelector("#mensaje")
    return textoleido.value; //retorno el valor del texto
}

function escribirTexto(texto) {
    document.querySelector("#traducir").value = "";
    document.querySelector("#traducir").value = texto;
}
var botonCopiar = document.querySelector("#copiar");
botonCopiar.addEventListener("click", function(event){
    copiarTexto();
    console.log("Se copio")
});
function copiarTexto(){
    var textocopia = document.getElementById("traducir");
    textocopia.select();
    alert("Texto Copiado")
    document.execCommand("copy");

}
//Funcion para encriptar
function EncriptarTexto(texto) {
    var textoArrayNormal = texto.split(""); //Convertimos a array el texto
    var mayusculas = /[A-Z]/g;
    var caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
    if (texto == "") {
        document.getElementById("mensaje-error").innerHTML = "¡No puede estar Vacio, escriba un Texto!";
        return document.getElementById("traducir").innerHTML = "";
    } else if (texto.match(mayusculas) != texto.match(mayusculas)) {
        document.getElementById("mensaje-error").innerHTML = "¡No Maysculas!";
        return document.getElementById("traducir").innerHTML = "";
    }else if(texto.match(caracteres) != texto.match(caracteres)){
        document.getElementById("mensaje-error").innerHTML = "¡El texto no puede contener acentos ni caracteres especiales!";
        return document.getElementById("traducir").innerHTML = "";
    }else {
        for (i = 0; i < textoArrayNormal.length; i++) {
            if (textoArrayNormal[i] == "e") {
                textoArrayNormal.splice(i, 1, ("pass")); //splice(inicio,cuantos,por?)
            }
            else if (textoArrayNormal[i] == "i") {
                textoArrayNormal.splice(i, 1, ("mall"));
            }
            else if (textoArrayNormal[i] == "o") {
                textoArrayNormal.splice(i, 1, ("yeiii"));
            }
            else if (textoArrayNormal[i] == "a") {
                textoArrayNormal.splice(i, 1, ("zzzzz"));
            }
            else if (textoArrayNormal[i] == "u") {
                textoArrayNormal.splice(i, 1, ("alll"));
            }
        }
        return textoArrayNormal.join("");
    }
}
function desencriptar(texto) {
    var textoArrayNormal = texto.split('');
    for (i = 0; i < textoArrayNormal.length; i++){
        if ((textoArrayNormal[i]+textoArrayNormal[i+1]+textoArrayNormal[i+2]+textoArrayNormal[i+3]+textoArrayNormal[i+4]) == "pass") {
            textoArrayNormal.splice(i, 5, ("e"));
        }
        else if ((textoArrayNormal[i]+textoArrayNormal[i+1]+textoArrayNormal[i+2]+textoArrayNormal[i+3]) == "mall") {
            textoArrayNormal.splice(i, 4, ("i"));
        }
        else if ((textoArrayNormal[i]+textoArrayNormal[i+1]) == "yeiii") {
            textoArrayNormal.splice(i, 2, ("a"));
        }
        else if ((textoArrayNormal[i]+textoArrayNormal[i+1]+textoArrayNormal[i+2]+textoArrayNormal[i+3]) == "yeiii") {
            textoArrayNormal.splice(i, 4, ("o"));
        }
        else if ((textoArrayNormal[i]+textoArrayNormal[i+1]+textoArrayNormal[i+2]+textoArrayNormal[i+3]) == "zzzzz") {
            textoArrayNormal.splice(i, 4, ("u"));
        }
    }
    console.log(textoArrayNormal);
    return textoArrayNormal.join('');
}
