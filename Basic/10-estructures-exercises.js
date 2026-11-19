// exercises

// 1. Crea un array que almacene cinco animales
console.log("1.")
let myArray = new Array()
myArray = ["Perro","Gato","Pajaro","Jirafa","Leon"]
console.log(myArray)
console.log(typeof(myArray))
console.log(Array.isArray(myArray)) // imprimir si es array

// 2. Añade dos más. Uno al principio y otro al final
console.log("2.")
myArray.push("Lagarto") // agrego al final
console.log(myArray)

myArray.unshift("Tortuga") // agrego al inicio con unshift
console.log(myArray)

// 3. Elimina el que se encuentra en tercera posición array.splice(indice, cantidad);
myArray.splice(2,1)
console.log(myArray)

// 4. Crea un set que almacene cinco libros
let myBook = new Set(["La odisea","Homero","La biblia","Vivir para siempre","Hacer dicipulos"])
console.log(myBook)
// 5. Añade dos más. Uno de ellos repetido
myBook.add("El maestro") 
myBook.add("Seamos valientes") 
console.log(myBook)

// 6. Elimina uno concreto a tu elección

// 7. Crea un mapa que asocie el número del mes a su nombre

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

// 9. Añade al mapa una clave con un array como que almacene los meses de verano

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map