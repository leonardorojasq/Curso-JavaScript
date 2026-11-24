// Funciones

function myFunction(){
    console.log("Hola leo")
}

myFunction()



// funciones con parametros

function sumarNumeros(a,b){
    console.log(a+b)
}


sumarNumeros(4,7)


// funciones anonimas

const anonima = function(name){
    console.log(`Hola ${name}`)
}

anonima("Leo")


// funciones flecha arrow
const myFunction3 = (nme) => {
    console.log(`Hola ${nme}`)
}
myFunction3("Teddy")

const myFunction4 = (nme) => console.log(`Hola ${nme}`)
myFunction4("Andrea")

const suma = (a,b) => console.log(`La suma de ${a} + ${b} es = `,a + b)
suma(4,7)


// Parametros
function sum(a,b){
    console.log(a+b)
}
sum(5,9)
sum(5)
sum()


function defaultSum(a = 0,b = 0){
    console.log(a+b)
}
defaultSum()
defaultSum(6)

// valores por defecto
defaultSum(6,b=14)


// retorno de valores
function mul(a, b){
    return a * b
    
}
console.log(mul(4,15))


// funciones anidadas

function exter(){
    console.log("Funcion externa")

    function inter(){
        console.log("Funcion interna")
    }
    inter()
}

exter()
exter()



// Funciones de orden superior


function apply(func, param){
       func(param)
}
apply(myFunction4, "Funcion de orden superior")


// foreach  es una funcion  que nos sirve para ejecutar bucles asociados  aelementos iterables

myArray = [1,2,3,4,5,6,7,8,9,10]

myArray.forEach((value) => console.log(value))
myArray.forEach((leo) => console.log(leo))

myArray.forEach(function (value) {
    console.log(value)

})



mySet = new Set(["Leor","rojasr","Leoq","Leo","rojas2","rojas"])
mySet.forEach((value) => console.log(value))

myMap = new Map([
    ["name","Leo"],
    ["email","Leonardo.rojas@edu.com"],
    ["edad",54],
])
myMap.forEach((value) => console.log(value))