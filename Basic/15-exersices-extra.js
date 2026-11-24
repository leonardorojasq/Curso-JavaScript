// // ##############################################   Ejercicios extra ##########################################

// // 1. Secuencia de números pares
// // Fácil
// // Genera los primeros 10 números pares utilizando while.
// // Resultado esperado:
// // 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
let numeros = 1

while(numeros < 21){
    if (numeros %2 == 0){
        console.log(numeros)

    }
    numeros++
    
}


// // 2. Secuencia de cuadrados
// // Fácil

// // Genera los cuadrados de los números del 1 al 10.

// // Resultado esperado:
// // 1, 4, 9, 16, 25, 36, 49...
// console.log("############## 2. Genera los cuadrados de los números del 1 al 10. ###################")
let n = 1

while(n < 11){
    let r = n * n
    console.log(r)
    
    n++
    
}


// // 3. Secuencia de potencias de 2
// // Intermedio

// // Comienza en 1 y multiplica por 2 en cada iteración. Detente cuando el resultado supere 1000.

// // Resultado esperado:
// // 1, 2, 4, 8, 16, 32, 64...
// console.log("############## 3. Comienza en 1 y multiplica por 2 en cada iteración. Detente cuando el resultado supere 1000. ###################")

let l = 1

while(l <= 1000){
    l = l * 2
    console.log(l)
}



console.log("############## 4. Secuencia de números triangulares ###################")
// 4. Secuencia de números triangulares
// Intermedio
// Cada número se obtiene sumando el siguiente entero al resultado anterior.
// Resultado esperado:
// 1, 3, 6, 10, 15, 21, 28


let numero = 1
let suma = 0


while(numero <= 10){
    suma+=numero
    console.log(suma)
    numero++    
}




// 5. Secuencia de Fibonacci inversa
// Avanzado
// Genera una secuencia de Fibonacci y luego intenta mostrarla en orden inverso.
// Resultado esperado:
// 55, 34, 21, 13, 8, 5, 3, 2, 1, 1
let avanzar = 0
let a = 0
let b = 1
let myArray2 = []

while (avanzar < 10) {
    let siguiente = a + b
    myArray2.push(siguiente)
    a = b
    b = siguiente
    avanzar++
}

for(let i = myArray2.length -1;i >= 0;i--){
    console.log(myArray2[i])
}