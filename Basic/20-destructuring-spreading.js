// Destruccion y propagacion

let myArray =[1,2,3,4,5,6]


let person = {
    name:"Leonardo",
    age:54,
    alias:"Leito"
}

myArray.push(7)


let valor = myArray[0]
console.log(valor)

let myName = person.name
console.log(myName)

// Destruccion 
//Sitaxis array

let [myValue0, myValue1, myValue3,myValue4, myValue5, myValue6,myValue7] = myArray
console.log(myValue0)
console.log(myValue1)
console.log(myValue3)
console.log(myValue4)
console.log(myValue5)
console.log(myValue6)
console.log(myValue7)


// Sintaxis de Array
let [myValue=0, myValue9=0, myValue10=0,myValue11=0, myValue12=0,myValue13=0] = myArray
console.log(myValue0)
console.log(myValue1)
console.log(myValue3)
console.log(myValue4)
console.log(myValue5)
console.log(myValue6)
console.log(myValue7)

// Ignorar
console.log("Ignorar")
let [myValue14, , ,myValue15] = myArray
console.log(myValue14)
console.log(myValue15)


//Sintaxis objects
let { name,age,alias } = person
console.log(name)
console.log(alias)
console.log(age)


//Sintaxis con valores predeterminados
//

console.log(name)
console.log(age)
//console.log(email)

// Sintaxis objects ciib nombres de bariables
let { name:name3,age:age3,email="leonardorojasq@outlook.com" } = person

console.log(name)
console.log(age)
//console.log(email)



let person4 = {
    names:"Teddy",
    edad:2.5,
    caminar: function(){
        console.log(`${person.name} Camina`)
    },
    objeto :
    {
        Nombre:"juan",
        Ano:54,
        Ciudad:"Bogotá",
        Alias:"Leito",
        trabaja: function(){
                        console.log(`${person.name} trabaja`)
                },
    }
}

let { names:name4, edad } = person4
let { objeto: {Nombre:nombre } } = person4
console.log(name4)
console.log(edad)
console.log(nombre)



// Propagacion - Spreading (...)

let myArray2 = [...myArray]  // Copia
let myArray3 = [...myArray2,8,9,10]

console.log(myArray3)


// Combiacion de array

let myArray4 = [...myArray,...myArray2,...myArray3]
console.log(myArray4)


// Sintasis object
let person5 = {...person4,email:"leo@out.com"}
console.log(person5)