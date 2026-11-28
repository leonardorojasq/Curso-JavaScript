//  Ejerciciios

// 1. Usa desestructuración para extraer los dos primeros elementos de un array
let array = [65,87,35]
let [ numero1,numero2 ] = array
console.log(numero1, numero2)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let array2 = [65,87,35]
let [ numero3,numero4,numero5,numero6=44] = array2
console.log(numero6)

// 3. Usa desestructuración en un objeto para extraer dos propiedades de un objeto
let carro = {
    marca:"Reamult",
    serie:"Twingo",
    modelos:2026,


    accesorios :
    {
    vidrios:"Electricos",
    aire:"Acondicionado"
    }
}

let { marca,serie } = carro
console.log(marca)
console.log(serie)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
let { marca2="Nissan",serie2="Versa" } = carro
console.log(marca2)
console.log(serie2)

//    a nuevas variables con nombres diferentes
let { marcaComprar="Toyota",serieCompara="Prado" } = carro
console.log(marcaComprar)
console.log(serieCompara)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
console.log("Usa desestructuración para extraer dos propiedades de un objeto anidado")

let { accesorios:{vidrios:vidrios}} = carro
console.log(carro)

// 6. Usa propagación para combinar dos arrays en uno nuevo
let array3 = [1,2,3,4]
let array4 = [5,6,7,8]

let array5 = [...array3, ...array4]
console.log(array5)

// 7. Usa propagación para crear una copia de un array
let array6 = [...array5]
console.log(array6)

// 8. Usa propagación para combinar dos objetos en uno nuevo
let array7 = [...array6,9,10]
console.log(array7)

// 9. Usa propagación para crear una copia de un objeto
let camionetea = { ...carro, tarccion:"4X4"}
console.log(camionetea )
// 10. Combina desestructuración y propagación
let frutas = ["Manzana", "Pera", "Uva", "Mango"]

// Desestructuración: extraemos los dos primeros elementos
let [fruta1, fruta2, ...restoFrutas] = frutas

console.log(fruta1)
console.log(fruta2)
console.log(restoFrutas)



let carro2 = {
    marc: "Renault",
    serie: "Twingo",
    modelo: 2026,
    color: "Rojo"
}

let { marc, ...otrosDatos } = carro2

console.log(marca)
console.log(otrosDatos)



// Ejercicios de practia /////////////////////////////////////////

console.log("Ejercicios")
let { marca:fabricante } = carro
console.log(fabricante)


let { 
    accesorios: { 
        aire: climatizacion 
    } 
}= carro
console.log(climatizacion)

let usuario = {
    nombre:"Leonardo"
}
let cuenta = {
    sueldo:500
}

let nomina = { ...usuario,...cuenta}
console.log(nomina)