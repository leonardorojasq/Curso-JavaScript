// 1. Crea un array que almacene cinco animales.
let animales = new Array()
animales.push("Caballo","Perro")
animales.push("Leon","Jirafa","Oso")
console.log(animales)

// 2. Añade dos más. Uno al principio y otro al final.
animales.unshift("Gato")
animales.push("Raton")
console.log(animales)

// 3. Elimina el que se encuentra en tercera posición.
animales.splice(2,1)
console.log(animales)

// 4. Crea un Set que almacene cinco libros.
let books = new Set(["vivir para siempre","la biblia",,"Apocalipsis","semaos valientes","mi libro de historias","la biblia"])
console.log(books)

// 5. Añade dos más. Uno de ellos repetido.
books.add("El hombre mas grande")
books.add("la biblia")
console.log(books)

// 6. Elimina uno concreto a tu elección.
let buscar = books.has("vivir para siempre")
buscar ? books.delete("vivir para siempre") : console.log("No existe ese libro")

console.log(books)

// 7. Crea un Map que asocie el número del mes a su nombre.
let mes = new Map()
mes.set(1,"Enero")
mes.set(2,"Febrero")
mes.set(3,"Marzo")
mes.set(4,"Abril")
mes.set(5,"Mayo")
console.log(mes.get(5))

// 8. Comprueba si el mes número 5 existe en el Map e imprime su valor.
console.log("8. Comprueba si el mes número 5 existe en el Map e imprime su valor.")
mes.get(5) ? console.log(`Si existe el mes es: ${mes.get(5)}`) : console.log("No existe")

// 9. Añade al Map una clave con un array que almacene los meses de verano.
console.log("9. Añade al Map una clave con un array que almacene los meses de verano.")
let mesesVerano = new Array()
mesesVerano = ["Diciembre","Enero","Febrero","Marzo"]

let mapMeses = new Map()

mapMeses.set("verano",mesesVerano)

console.log(mapMeses)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map.
let myArray =  new Array()
myArray = ["Jirafa","Perro","Gato","Tortuga"]

let mySett = new Set(myArray)
console.log(typeof(mySett))

let misMap = new Map()
console.log(misMap.set("Set",mySett))