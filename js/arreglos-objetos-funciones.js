// Arreglos
// Los arreglos son listas ordenadas de datos que puedes recorrer, modificar y usar de mil maneras.

const arregloAlumnis = ['Benjamin', 'Berinice', 'Brian', 'Carlos', 'Jesús', 'Jona'] // tamaño 6

console.log(arregloAlumnis[3])

console.log('Arreglo inicial', arregloAlumnis)
arregloAlumnis.push('Jose') // funcion interna de js con arreglos .push (agrega un elemento a la lista)

console.log('Arreglo con push(jose) ', arregloAlumnis)

arregloAlumnis.pop() // funcion interna de js con arreglos .pop() (quita/elimina elemento a la lista)

console.log('Arreglo con .pop()', arregloAlumnis)

arregloAlumnis.forEach((alumni)=> {
    console.log("Mi alumni favorito es " + alumni);
})

// Matriz

const i = [1,0,0]
const j = [i , [2,3,0] , [0,0,1] ]

console.log(j)


// Objeto

let carro = {
    anio: 1995,
    matricula: '1234', //atributos, separados por comas 
    color: 'Negro',
    modelo: 'rapido',
    serie: 1835473
}

console.log(carro)
console.log(carro.color)
console.log(carro.anio)
console.log(carro.version)

// Modificar objeto existente
console.log('Objeto carro antes de ser modificada su matricula:',carro)
carro.matricula="19-23"
console.log('Objeto carro al ser modificada su matricula:',carro)

// Se agrega atributo nuevo al objeto
console.log('Objeto carro con sus atributos iniciales: ',carro)
carro.tipo="Estandar"
console.log('Objeto carro con nuevo atributo de tipo: ',carro)

// Se elimina atributo al objeto
console.log('Objeto carro con sus atributos  ',carro)
delete carro.anio
console.log('Objeto carro eliminando atributo año: ',carro)



// FUNCION

// normal o declarativa
function sumar(a,b) {
    return a + b;
  }
  console.log('Funcion normal o declarativa',sumar(1,2)); 

// funcion expresiva 
const sumaExpresiva = function sumar(a,b) {
    return a + b;
  }

console.log('Funcion expresiva',sumaExpresiva(1,2)); 

// funcion felecha 
const sumaFlecha = (a, b) => a + b;


console.log('Funcion flecha',sumaFlecha(1,2)); 

// Funcion anonima
(function(a,b) {
    console.log('Funcion anonima',a + b)
})(1,2)

