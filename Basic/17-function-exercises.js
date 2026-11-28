// // Ejercicios
// // NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios.

// // 1. Crea una función que reciba dos números y devuelva su suma.
// function suma(a, b){
//     let r = a + b
//     return r
// }

// console.log(suma(6,9)) 

// // 2. Crea una función que reciba un array de números y devuelva el mayor de ellos.
// myArray = [11,92,34,4,65,87,7,8,97,10]
// let mayor = myArray[0]

// function numeroMayor(){
    
//     for(let i=1;i < myArray.length; i++){
//         if (myArray[i] > mayor){
//             mayor = myArray[i] 
            
//         }
//     }
//     return mayor

// }
// console.log(numeroMayor())

// let array = [11, 92, 34, 4, 65, 87, 7, 8, 97, 10]

// for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length - 1; j++) {
//         if (array[j] < array[j + 1]) {
//             let temporal = array[j]
//             array[j] = array[j + 1]
//             array[j + 1] = temporal
//         }
//     }
// }

// console.log(array)

// let contenidoArray = [11, 92, 34, 4, 65, 87, 7, 8, 97, 1]

// for (let i = 0; i < contenidoArray.length; i++) {
//     for (let j = 0; j < contenidoArray.length - 1; j++) {
//         if (contenidoArray[j] > contenidoArray[j + 1]) {
//             let temporal = contenidoArray[j]
//             contenidoArray[j] = contenidoArray[j + 1]
//             contenidoArray[j + 1] = temporal
//         }
//     }
// }

// console.log(contenidoArray)

// // 3. Crea una función que reciba un string y devuelva el número de vocales que contiene.
// let frase = "Hola leo"
// contador = 0
// function strin(frase){
//     for(let indice of frase){
//         contador++
//     }
//     return contador

// }

// // 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas.
// let arrayString = ["Nombre","Apellidos","Direccion","Telefono"]
// let nuevoArray = []

// function pasarMayuscula(array){
//     for(let i=0;i<array.length;i++){
//         nuevoArray.push(array[i].toUpperCase())

//     }
//     console.log(nuevoArray)
// }
// pasarMayuscula(arrayString)

// // 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario.
// function validarNumero(numero){
//     if(numero %2 == 1){
//         return true
//     }else{
//         return false
//     }

// }
// console.log(validarNumero(4))
// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos.
let array1 = ["saco","oso","luz","neblina","montaña"]
let array2 = ["perro","cama","saco","montaña","luz"]

function validarIguales(a, b){
    let comunes = []

    for (let i of a){
        for(let j of b){
            if(i === j && !comunes.includes(i)){
                comunes.push(i)

            }
        }
    }
    return comunes
}
console.log(validarIguales(array1, array2))


//oo 

function validarIgualdad(a, b) {
  return a.filter(elemento => b.includes(elemento));
}
console.log(validarIgualdad(array1, array2))

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares.
let nume = [4,6,9,23,54]

function numerosPares(num){
    let suma = 0
    for (let indice of num){
        if(indice %2 === 0){
            suma+=indice
        }
    }
    return suma
}
console.log(numerosPares(nume))




// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado.
let numerosR = [4,6,9,5,2]

function numerosReales(arrayNumeros){
    let nuevoArray = []
    let elevado = 0

    for (let i of arrayNumeros){
        elevado = i * i
        nuevoArray.push(elevado)
        
    }
    return nuevoArray
}

console.log(numerosReales(numerosR))
9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso.
let frase = "Hola Leonardo";

function reverso(a) {
  let palabras = a.split(""); // Convierte "Hola Leonardo" en [console.log(reverso(frase)); // "Leonardo Hola"]
  let resultado = [];

  for (let i = palabras.length - 1; i >= 0; i--) {
    resultado.push(palabras[i]);
  }

  return resultado.join(" "); // Une el array de nuevo con espacios: "Leonardo Hola"
}

console.log(reverso(frase)); // "Leonardo Hola"


// 10. Crea una función que calcule el factorial de un número dado.

function factorial(n){
    let contador = 1

    for (let i = 1; i <= n;i++){
        contador *= i  
    }
    return contador

}

console.log(factorial(8))


// Escribe un programa que muestre los números del 1 al 100, pero:
// • Si el número es múltiplo de 3, muestra Fizz
// • Si es múltiplo de 5, muestra Buzz
// • Si es múltiplo de 3 y de 5, muestra FizzBuzz

for (let i=1;i<=100;i++){
    if ( i %3 === 0  && i %5 === 0 ){
        console.log("FizzBuzz")
    }else if( i %3 === 0 ){
        console.log("Fizz")
    }else if( i %5 === 0  ){
        console.log("Buzz")
    }else{
        console.log(i)
    }

}