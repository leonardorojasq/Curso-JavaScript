
`Características:
- Mantiene el orden de inserción.
- Permite elementos duplicados.
- Acceso mediante índices.
- Permite modificar elementos.
- Tiene métodos como map(), filter(), reduce(), find() y forEach().
Característica	    Array	Set
Orden de inserción	Sí	    Sí
Duplicados	        Sí   	No
Acceso por índice	Sí	    No
Tamaño	          length	size
Agregar	          push()	add()
Eliminar	      splice()	delete()
Buscar	         includes()	has()
Recorrer	     map(), filter()	forEach()
`


let myArray = []  // Objecto
let myArray2 = new Array(3)
console.log(myArray)
console.log(myArray2)

myArray = [1,2,3,4,]
myArray2 = [9,5,8,]
console.log(myArray)
console.log(myArray2)

myArray = ["leo","rojas"]
myArray2 = [9,5,8,"leo","rojas"]
console.log(myArray)
console.log(myArray2)
myArray2.push("Quevedo")
console.log(myArray2)
myArray2 = new Array(3)

myArray2[0] = "antena" 
myArray2[1] = "caja" 
myArray2[2] = "perro" 
myArray2[4] = "perro" 

console.log(myArray2)

// Metodos
let myArray3 = []

myArray3.push("Perro") // Agrega
console.log(myArray3)

myArray3.pop() // Quita

console.log(myArray3)

// shift Elimina el primer elemento   y  unshift agregar varios elemnetos al inicio
myArray3.push("rana")
myArray3.push("Perro")

console.log(myArray3.shift()) // Quita el primer ELEMNETO

myArray3.push("rana")
console.log(myArray3)

myArray3.unshift(["Algo","Todo"]) // GREGA AL PRINCIPIO  EJ: [ 'Algo', 'Todo' ], 'Perro', 'rana' ]
console.log(myArray3)
myArray3.unshift("Gato")

myArray3.length
console.log(myArray3)



// clear
// myArray3 = []
// console.log(myArray3.clear())

// console.log(myArray3)


// // slice
console.log("###########################")

let myArray4 = [9,1,3,6,3,8]
let sub = myArray4.slice(1, 4)
console.log(sub)