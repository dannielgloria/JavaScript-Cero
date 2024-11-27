
let perro = "Tito"
//console.log(`${perro } esta chiquito y panzon`)

function saludar(nombre) {
   console.log("Hola, " + nombre + "!")
}

//saludar("Daniel")


function suma(a,b){
    let resultado = a + b
    return resultado
}

function resta(a,b){
    let resultado = a - b
    return resultado
}

function division(a,b){
    if (b !== 0) {
        let division = a / b;
        console.log(`El resultado de la división es: ${division}`);
    }else {
        console.log("No se puede dividir entre cero.");
    }
    let resultado = a / b
    return resultado
}

function multiplicacion(a,b){
    let resultado = a * b
    return resultado
}

function modulo(a,b){
    let resultado = a % b
    return resultado
}

let operador = prompt("¿Qué operación quieres realizar? Ingresa '+', '-', '*', '/', '%'");

let num1 = parseFloat(prompt("Ingresa el primer número"));
let num2 = parseFloat(prompt("Ingresa el segundo número"));

if (isNaN(num1) || isNaN(num2)) {
    console.log("Por favor ingresa números válidos.");
} else {

    if (operador == '+') {
        let resultado = suma(num1,num2)
        console.log(`El resultado de la suma es: ${resultado}`);
    }else if (operador == '-') {
        let resultado = resta(num1,num2)
        console.log(`El resultado de la resta es: ${resultado}`);
    }else if (operador == '*') {
        let resultado = multiplicacion(num1,num2)
        console.log(`El resultado de la multiplicacion es: ${resultado}`);
    }else if (operador == '/') {
        let resultado = division(num1,num2)
        console.log(`El resultado de la division es: ${resultado}`);   
    }else if (operador == '%') {
        let resultado = modulo(num1,num2)
        console.log(`El resultado de la modulo es: ${resultado}`);
        
    }else {
        console.log("No has ingresado una operación válida.");
    }
}