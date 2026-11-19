// Operadores operators
// Operadores operators

// Artimeticos
a = 15
b = 8
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
console.log(a**b)

a++
console.log(a)

b--
console.log(b)

// Asignación
console.log("###############################")
let numero = 2
console.log(numero)
numero +=2
console.log(numero)
numero -=2
console.log(numero)
numero *=2
console.log(numero)
numero /=2
console.log(numero)
numero %=2
console.log(numero)
numero **=2
console.log(numero)

// VComparación
console.log(a<b)
console.log(a>b)
console.log(a===b)
console.log(a!=b)
console.log(a<=b)
console.log(a>=b)
console.log("###############################")
console.log("Igualdad de valor")
console.log(a==a)
console.log(a=="6")
a=6
console.log("Igualdad de identidad por valor")
console.log(a===a)
console.log(a===6)
console.log(a==="6")


console.log(a!= 6)
console.log(a !== "6")
console.log(0 == false)
console.log(1 == false)
console.log(2 == false)

console.log("###############################")
console.log(0 == "")
console.log(0 == " ")
console.log(0 == '')
console.log(0 == "Hola")
console.log("############   Identidad   ################")
console.log(0 === "") //Identidadd
console.log(undefined == null) 
console.log(undefined === null) //Identidadd

// Truthy todos los numeeros positivos negativos menos el cero
// todas la scadenas detexto menos las vacias
// true

// Valores falsos
/*
0
0n    bigInt
null
undefined
NaN
false
" "
*/


// Logicos
//  and && una flsa todas falsa

console.log("############  logicos  ################")
console.log(5 < 10 && 15 < 20)
console.log(5 > 10 && 15 < 20)

console.log(5 > 10 && 15 > 20)

 // or cualquiera que seaverdadera true
console.log(5 < 10 || 15 > 20)
console.log(5 > 10 && 15 > 20 || 15 < 20)

// not
console.log("############  Not ################")
console.log(!true)
console.log(!false)
console.log(!(5 < 10 || 15 > 20))

console.log("############  Ternario ################")

const estalloviendo = true
estalloviendo ? console.log("Esta lloviendo") : console.log("No esta lloviendo")
