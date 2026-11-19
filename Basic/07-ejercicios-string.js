// 1. Concatena dos cadenas de texto
let profesion = "Ingeniero"
let saludo = "Hola"
console.log(saludo, profesion)

// 2. Muestra la longitud de una cadena de texto
console.log(saludo.length)

// 3. Muestra el primer y último carácter de un string
console.log(saludo[0]);
console.log(saludo.slice(-1));

console.log("PRIMER CARACTER:", saludo[0]);
console.log("ULTIMO CON SLICE:", saludo.slice(-1));
console.log("ULTIMO CON LENGTH:", saludo[saludo.length - 1]);
console.log("FIN DEL EJERCICIO");


// 4. Convierte a mayúsculas y minúsculas un string
console.log(saludo.toLowerCase())
console.log(saludo.toUpperCase())

// 5. Crea una cadena de texto en varias líneas
console.log(`Hola 
    esto es una
    cadena de texto
    envarias
    lineas`)

// 6. Interpola el valor de una variable en un string
console.log(`${saludo} amigo ${profesion}, como estas!`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
let palabra = " Esto es un ejemplo de espacios en blanco"
let remplaza = palabra.replaceAll(" ","-")
console.log(remplaza)

// 8. Comprueba si una cadena de texto contiene una palabra concreta
palabra.includes("ejemplo") ? console.log("Existe") : console.log("No Existe")

// 9. Comprueba si dos strings son iguales
let numero = "unos"
let numero2 = "uno"
console.log(numero===numero2)

// 10. Comprueba si dos strings tienen la misma longitud
numero.length === numero2.length ? console.log("Tienen la misma longitud") : console.log("No Tienen la misma longitud")
