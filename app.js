let numeroSecreto=0;
let intentos = 1;
let numerosSorteados = [];
let  numeroMaximo = 100;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);

    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento("p",`¡Felicidades! Adivinaste el número secreto en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}!`);
        asignarTextoElemento("h1","¡Ganaste!");
        document.getElementById("reiniciar").removeAttribute("disabled");

    }else { 
        // Usuario no acerto
        intentos++;

        if (numeroUsuario < numeroSecreto) {
            asignarTextoElemento("p","El número secreto es mayor que " + numeroUsuario);
 
        }else {
            asignarTextoElemento("p","El número secreto es menor que " + numeroUsuario);
    }
    limpiarCaja();
}
    return;
}

function generarNumeroSecreto(params) {
    // Generacion de numero aleatorio
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    // Condicion de parada de la recursividad
    if (numerosSorteados.length >= numeroMaximo) {
        asignarTextoElemento("p","Se han sorteado todos los números posibles.");

    }else{
        // Verificacion de numero repetido
        if (numerosSorteados.includes(numeroGenerado)) {

            // Si el numero ya fue sorteado, se llama a la funcion de nuevo
            return generarNumeroSecreto()
        }else{
            // Si el numero no fue sorteado, se agrega a la lista de numeros sorteados
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        } 
    }
    
}

function limpiarCaja(){
    document.querySelector("#valorUsuario").value = ""; // Limpia el campo de entrada del usuario
}

function condicionesIniciales() {
    asignarTextoElemento("h1","Adivina el número secreto");
    asignarTextoElemento("p",`Adivina el número entre 1 y ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Funcion que reinicia el juego
    // Tiene que reiniciar el numero secreto y los intentos
    // Hay que limpiar la limpiar caja  
    // poner mensaje de InputDeviceInfo
    // Y tiene que deshabilitar el boton reiniciar
    limpiarCaja();
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute("disabled", "true");

}

condicionesIniciales();