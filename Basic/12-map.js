// Map Diccionario colección de elementos
// cada elemento esta formado por clave valor

// Deckarate

let myMap = new Map()
console.log(myMap)


myMap = new Map([
    ["name","Leo"],
    ["email","Leonardo.rojas@edu.com"],
    ["edad","Leo"],
])

console.log(myMap)


// Métodos y propiedades

// SET  agrega o actualiza los valores
console.log("#################### set ##########################")
myMap.set("alias","Leonardo")
myMap.set("name","Teddy")
console.log(myMap)

// GET  ontiene el valor de la clave
console.log("#################### get ##########################")
console.log(myMap.get("name"))
console.log(myMap.get("uname"))

// HAS busca si existe una clave
console.log("#################### has ##########################")
console.log(myMap.has("name"))
console.log(myMap.get("uname"))




// delete
console.log("#################### delete ##########################")
myMap.delete("name")
console.log(myMap)

// delete
console.log("#################### clear ##########################")
myMap.clear()
console.log("Mapa borrado")
console.log(myMap)




// propiedades
let myMap1 = new Map([
    ["name","Leo"],
    ["email","Leonardo.rojas@edu.com"],
    ["edad","Leo"],
])
console.log("#################### propiedades ##########################")
console.log("este es el keys: ",myMap1.keys())
console.log("este es el values: ",myMap1.values())
console.log("este es el entries: ",myMap1.entries())
