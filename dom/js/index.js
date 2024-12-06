let contador=0

function cambiarTexto() {
    document.getElementById("parrafo").innerText = "Cambie el texto con DOM y JS"
}

function cambiarColor() {
    const colorActual = document.body.style.backgroundColor;
    //es un operador ternario
    // condicion ? valor_si_verdadero : valor_si_falso

    document.body.style.backgroundColor = colorActual === "black" ? "white": "black";
}

function contadorClicks() {
    contador++;
    document.getElementById("contador").innerText = contador
}

function reiniciarContador() {
    contador = 0;
    document.getElementById("contador").innerText = contador
}