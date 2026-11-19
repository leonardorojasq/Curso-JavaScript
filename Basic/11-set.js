// Set
`Características:
- No permite valores duplicados.
- Mantiene el orden de inserción al iterar.
- No utiliza índices para acceder a sus elementos.
- Permite agregar y eliminar elementos.
- Tiene búsqueda eficiente mediante has().
- Permite iterar sobre sus elementos.

Característica	Array	Set
Orden de inserción	Sí	Sí
Duplicados	Sí	No
Acceso por índice	Sí	No
Tamaño	length	size
Agregar	push()	add()
Eliminar	splice()	delete()
Buscar	includes()	has()
Recorrer	map(), filter()	forEach()
`

let mySet = new Set();
console.log(mySet)

mySet = new Set(["Leor","rojasr","Leoq","Leo","rojas2","rojas"])
console.log(mySet)

// Métodos Comunes


// add y delete
mySet.add("desoft")
console.log(mySet)

mySet.delete("rojas") ? console.log("Elemento elinado") : console.log("No se encontro elemento")


// has
console.log(mySet.has("Leor"))

// size
console.log(mySet.size)

// convertir Set a Array
let myArray33 = Array.from(mySet)
console.log(myArray33)



// convertir Array a set
mySet = new Set(mySet)
console.log(mySet)



mySet.add()