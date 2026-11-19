// Cadenas de texto avanzadas

let myName = "Leonardo"
let greet = "Hello " + myName + "!"

console.log(greet)
console.log(typeof(greet))

// longitud
console.log(greet.length)

// aceso caracteres
console.log(greet[1])


// Metodos
console.log(greet.toLowerCase())
console.log(greet.toUpperCase())

console.log(greet.indexOf("lo")) // encuentra coincidencia
console.log(greet.includes("Hola")) //* no encuentra cpoincidencia

console.log(greet.slice(0,10)) // retona un rango de caracteres Hello Leon

console.log(greet.replace("Hello", "Leonardo Bienvenido")) // encuentra una coincidencia y la  remplaza


// Template literals (Plantillas literales)
let message = `Hola, est es mi
curso de javascript ${greet} , ${myName} ` //interpolacion del dollar
console.log(message)



