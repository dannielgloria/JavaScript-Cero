//ADIVINADOR

/* Un programa en donde nosotros (Ususari) intente adivinar un numero aleatorio secreto que tenga la computadora

1) Usar una funcion para generar un numero aleatorio
2) Crear una funcion que se encargue de manejar nuestros intentos
3) Usar variables globales y locales (escope o alcance de variables)
4) Dar un mensaje al usuario para que sepa si adivino o no 
*/

//Variable global, se utiliza en cualquier parte del codigo  y se inicializa con "let"
let bienvenida = "BIENVENIDOS AL JUEGO DE ADIVINAR EL NUMERO DE LA MUERTEEEE!"

// Funcion que genera un numero aleatorio entre el 1 y 600
function generarNumeroAleatorio() {
    /* Variable local, se solo en el bloque de codigo (funcion) si se manda a llamar o se intenta usar fuera de
    la function, me dara error por que solo existira dentro de la funcion  y se inicializa con "var" 
    */
    var numeroAleatorio = Math.floor(Math.random() * 3) + 1

    return numeroAleatorio
}

// funcion para jugar
function juego() {
    console.log(bienvenida)

    let intentos = 0
    let adivinado = false

    // se usa const por que es una variable que no deve de cambiar por lo tanto es una constante
    const numeroSecreto = generarNumeroAleatorio()

    while (!adivinado) {
        let intento = parseInt(prompt("Adivina el numero que estoy pensando entre el 1 y el 3"))

        intentos++

        if (intento === numeroSecreto) {
            console.log(`¡Felicidades! Adivinaste el número ${numeroSecreto} en ${intentos} intentos.`)
            adivinado = true
        } else if (intento < numeroSecreto){
            console.log("El numero es mayor, intenta otra vez")
        }else if (intento > numeroSecreto){
            console.log("El numero es menor, intenta otra vez")
        }else{
            console.log("Por favor, ingresa un numero valido")
        }
    }
}

juego();


