// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
// for(let i = 0;i < 11;i++){
//     console.log(i)
// }

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let suma = 0;

for (let i = 1; i <= 10; i++) {
    let resultado = i + suma;

    console.log(`La suma de ${i} + ${suma} = ${resultado}`);

    suma = resultado;
}

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for (let i=1;i<=50;i++){
    if(i %2 == 0){
        console.log(i)
    }

}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
const myArray = ["Leo","JUan"]
for(let i of myArray){
    console.log(i)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let texto = "Hola Leonardo ala oso"
let contador = 0
for(let index of texto){
    if(index == "a" || index == "e" || index == "i" || index == "o" || index == "u")
        contador++
}
console.log(`El tota de vocales es de  ${contador}`)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
console.log("########################################")
let numeros = [2,4,6,8,10]
let producto = 1

for(let i of numeros){
    producto =  producto * i
    console.log("va pasando:", producto)
}
console.log("El producto es:", producto)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
let r = 5
for(let i = 1;i < 11;i++){
    console.log("5 X", i, "=", i * r )
}

// 8. Usa un bucle para invertir una cadena de texto
let cadena = "Hola Leonardo"
let invertido = ""

for(let i = cadena.length - 1; i--;){
    invertido+= cadena[i]
}
console.log(invertido)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
// Sumar y desplazar
console.log("################# Scuencia de Fibonacci #######################")
let a = 0
let b = 1

for (let i = 0;i < 10;i++){
    // console.log(`esto es i ${i}`) 
    let siguiente = a + b 
    console.log(`${siguiente}`) // 0+1=2
    a = b // el anterior
    // console.log(`esto es a ${a}`) 
    b = siguiente // el siguiente
    // console.log(`esto es b ${b}`) 
    
}
let limite = 0
let c = 0
let d = 1

while (limite < 10){
    let siguiente = c + d
    console.log(siguiente)
    c = d
    d = siguiente
    limite++

}
// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
console.log("################# array que contenga solo los números mayores a 10 #######################")
let myarray = [4,23,29,8,65,94]
let nuevoArray = []

for (let indice of myarray){
    if (indice > 10){
        nuevoArray.push(indice)
    }
}
console.log(nuevoArray)




