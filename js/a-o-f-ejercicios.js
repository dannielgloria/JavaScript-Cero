// Reto 1: Manejo de arreglos
function imprimirFrutasEnMayusculas(){
    const frutas = ['fresa','maracuya','sandia']
    console.log("Frutas en mayusculas: ")
    for (let fruta of frutas) {
        console.log(fruta.toUpperCase())
    }
}


// Reto 2: Objeto dinamico
function manipularObjeto(){
    const libro = {
        titulo: 'El libro de los espiritus',
        autor: 'Allan Cardek',
        anio: 1943
    }
    
    // agregar nueva propiedad/atributo
    libro.genero = 'Mistico'
    // borrar propiedad/atributo
    delete libro.anio
    
    console.log("Objeto libro manipulado: ", libro)
}

// Reto 3: par por tipos de funciones

// funcion declarativa
function esParDeclarativa(numero) {
    return numero % 2 === 0;
}

// funcion flecha
const esParFlecha = (numero) => numero % 2 === 0;

// funcion expresion
const esParExpresion = function(numero){
    return numero % 2 === 0;
} 

//funcion anonima
/*(function(numero) {
    console.log("Función Anónima:", numero % 2 === 0);
})(615865);*/

function probarFuncionesPar(numero) {
    console.log(`Numero: ${numero} y dividido en dos es ${numero/2}`);
    console.log("Función Declarativa:", esParDeclarativa(numero));
    console.log("Función de Expresión:", esParExpresion(numero));
    console.log("Función de Flecha:", esParFlecha(numero));
}

// Mandar a llamar todas las funciones en una sola funcion

function init() {
    console.log("=== RETO 1 ===")
    imprimirFrutasEnMayusculas();

    console.log("=== RETO 2 ===")
    manipularObjeto();

    console.log("=== RETO 3 ===")
    const numero = 18

    console.log(`El numero ${numero} es par?`)
    probarFuncionesPar(numero)
}

init()

