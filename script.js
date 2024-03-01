/*Made by: Made by: Francisco Molina
Contacto: www.linkedin.com/in/frank-exequiel*/

const textoIngresado = document.querySelector("#texto-ingresado");
const matrizCripta = [
    ["e", "enter"], //cambio para la vocal
    ["i", "imes"],  //cambio para la vocal
    ["a", "ai"],    //cambio para la vocal
    ["o", "ober"],  //cambio para la vocal
    ["u", "ufat"]   //cambio para la vocal
];

function validar(condicion) {

    if (textoIngresado.value != "") {

        if (condicion == true) {

            encriptar(textoIngresado.value);

        } else if (condicion == false) {

            desencriptar(textoIngresado.value);

        }
    }

}

function encriptar(textoAencriptar) {

    for (let i = 0; i < matrizCripta.length; i++) {
        if (textoAencriptar.includes(matrizCripta[i][0])) {
            textoAencriptar = textoAencriptar.replaceAll(matrizCripta[i][0], matrizCripta[i][1]);
        }
    }
    //console.log(textoAencriptar);
    mostrarTexto('texto-procesado', textoAencriptar);

}

function desencriptar(textoAdesencriptar) {

    for (let i = 0; i < matrizCripta.length; i++) {
        if (textoAdesencriptar.includes(matrizCripta[i][1])) {
            textoAdesencriptar = textoAdesencriptar.replaceAll(matrizCripta[i][1], matrizCripta[i][0]);
        }
    }
    //console.log(textoAdesencriptar);
    mostrarTexto('texto-procesado', textoAdesencriptar);

}

function mostrarTexto(elemento, texto) {
    limpiarCaja();
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function limpiarCaja() {
    document.getElementById('btnCopiar').removeAttribute('hidden');

    document.getElementById('dibujo').setAttribute('hidden', true);
    document.getElementById('titulo2').setAttribute('hidden', true);
    document.getElementById('parrafo').setAttribute('hidden', true);
}

function copiar() {       
    const salidaTexto = document.getElementById('texto-procesado');
    salidaTexto.select();

    navigator.clipboard.writeText(salidaTexto.value)
        .then(function () {
            /*console.log('Texto copiado al portapapeles');*/
        })
        .catch(function (error) {
            /*console.error('Error al copiar el texto: ', error);*/
        });
}

function validarTexto() {
    const miTextarea = document.getElementById('texto-ingresado');
    if (miTextarea) {
      const texto = miTextarea.value;
      const textoSinAcentos = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const textoSinCaracteresEspeciales = textoSinAcentos.replace(/[^a-z\s]/g, "");
  
      miTextarea.value = textoSinCaracteresEspeciales;
    }
  }