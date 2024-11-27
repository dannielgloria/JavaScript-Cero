/*
Crea un algoritmo que cuente del 1 al 80 y que indique si el numero es par o impar

Requisitos:
1) Usar un ciclo FOR para recorrer del 1 al 80.
2) utiliza una condicional para verificar si es par o inpar
3) imprimir el numero con el mensaje imdicado si es par o impar
4) al finalizar debe de imprimir "YA ACABE SENSEI CHULO PRECIOSO GUAPETON COLOR CAFE COMO LA CAGUAMA BEBIDA DE LOS DIOSESES O EL CARTON MOJADO"

Salida esperada
1 es impar
2 es par
3 es impar
4 es par
...
YA ACABE SENSEI CHULO PRECIOSO GUAPETON COLOR CAFE COMO LA CAGUAMA BEBIDA DE LOS DIOSESES O EL CARTON MOJADO
*/

for (let inicio = 1; inicio <= 80; inicio ++) {
    if (inicio % 2 == 0) {
        console.log(`${inicio } es par`)
    }
    else {
        console.log(`${inicio } es impar`)
    }
}
console.log('YA ACABE SENSEI CHULO PRECIOSO GUAPETON COLOR CAFE COMO LA CAGUAMA BEBIDA DE LOS DIOSESES O EL CARTON MOJADO')

for(let contador = 0; contador<=80; contador++){
    if(contador%2==0){
        console.log(contador+" Es par");
    }else{
        console.log(contador+" Es impar");
    }
}
console.log('YA ACABE SENSEI CHULO PRECIOSO GUAPETON COLOR CAFE COMO LA CAGUAMA BEBIDA DE LOS DIOSESES O EL CARTON MOJADO') 

for(let counter = 1;counter <= 80;counter++){
    if(counter % 2 == 0){
        console.log(counter + " es par");
    }else{
        console.log(counter + " es impar");
    }
}
console.log('YA ACABE SENSEI CHULO PRECIOSO GUAPETON COLOR CAFE COMO LA CAGUAMA BEBIDA DE LOS DIOSESES O EL CARTON MOJADO')

for (let i = 1; i <= 80; i++) {
    if (i % 2 === 0) {
      console.log(`${i} es par`);
    } else {
      console.log(`${i} es impar`);
    }
  }
  console.log(
    "ya acabe sensei chulo precioso color cafe como la caguama bebida de los dioses"
  );