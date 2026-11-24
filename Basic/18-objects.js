// Objetos

const objeto = 
    {
        Nombre:"Leonardo",
        Año:54,
        Ciudad:"Bogotá",
        Alias:"Leito"
    }


console.log(objeto)

// Acceso  a propiedades

console.log(objeto.Año)

//CORCHETES
console.log(typeof(objeto["Año"]))
objeto.Año = "Gordo"
console.log(typeof(objeto["Año"]))
console.log(objeto["Año"])


console.log(objeto.Nombre)
// mODIFICACION
objeto.Nombre = "Teddy"
console.log(objeto.Nombre)

// eliminar propiedades

delete objeto.Año
console.log(objeto)

// añadir propiedad

objeto.email = "Leonardorojasq@outlook.com"
console.log(objeto)


// Metodos en las funciones


//adicion de objetos
let person = {
    name:"Teddy",
    edad:2.5,
    caminar: function(){
        console.log(`${person.name} Camina`)
    },
    objeto :
    {
        Nombre:"juanis",
        Ano:54,
        Ciudad:"Bogotá",
        Alias:"Leito",
        trabaja: function(){
                        console.log(`${person.name} trabaja`)
                },
    }
}
console.log("Person4")
let person4 = {
    name:"Teddy",
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
person.objeto.email = "leonardo rojasq@outlook.com"
console.log(person.objeto.email)
person.objeto.trabaja()
console.log(person4)

console.log(person == person4)
console.log(person.name === person4.name)



for (let key in person4){
    console.log(key + ": " + person4[key] )
}