// Operadores ejercicio

console.log(a > b) // Mayor que
console.log(a < b) // Menor que
console.log(a >= b) // Mayor o igual que
console.log(a <= b) // Menor o igual que
console.log(a == b) // Igualdad por valor
console.log(a == 6)
console.log(a == "6")
console.log(a == a)
console.log(a === a) // Igualdad por identidad (por tipo y valor) o igualdad estricta
console.log(a === 6)
console.log(a === "6")
console.log(a != 6) // Desigualdad por valor
console.log(a !== "6") // Desigualdad por identidad (por tipo y valor) o desigualdad estricta
console.log(0 == false)
console.log(1 == false)
console.log(2 == false)
console.log(0 == "")
console.log(0 == " ")
console.log(0 == ' ')
console.log(0 == "Hola")
console.log(0 === "")
console.log(undefined == null)

// 1. Crea una variable para cada operación aritmética
a = 9
b = 3
let sumar = a+b
let resta = a-b
let multi = a-b
let divi = b-a
let mod = a%b


console.log(sumar)
console.log(sumar)
console.log(multi)
console.log(divi)
console.log(mod)


// 2. Crea una variable para cada tipo de operación de asignación, que haga uso


// de las variables utilizadas para las operaciones aritméticas


// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(5 != 10)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación


// 5. Utiliza el operador lógico and
console.log(5 <10 && 45>15)

// 6. Utiliza el operador lógico or
console.log(5 <10 || 5>15)

// 7. Combina ambos operadores lógicos
console.log(51 <10 && 45>15 || 2==2) 

// 8. Añade alguna negación
console.log(5 != 10)


// 9. Utiliza el operador ternario
dinero = true
edad = 18
dinero ? console.log("Verdadero") : console.log("Falso")
edad > 17 ?  console.log("Mayor") : console.log("Menor")


// 10. Combina operadores aritméticos, de comparación y lógicos
console.log("Esto es Falso")
console.log(!true)
console.log("Esto es Verdadero")
console.log(!false)

console.log("Esto es Falso")
console.log(!(5 < 10 || 15 > 20))


