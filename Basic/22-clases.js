// Clases o Plantillas

class Person {
    constructor(name, age,alias){
        this.name = name
        this.age = age
        this.alias = alias
    }
}

// Sintaxis e instanciar Object

let persona = new Person("Leonardo",24,"Leito")
console.log(persona.name, persona.age,persona.alias)


let persona2 = new Person("Andrea",34,"Andreita")
console.log(persona2.name, persona2.age,persona2.alias)

// Valores por defecto

class DefaultPerson {
    constructor(name="Teddy", age=2.5,alias="Gordito"){
        this.name = name
        this.age = age
        this.alias = alias
    }
}

let mascota = new DefaultPerson("Gordito")
console.log(mascota,mascota,mascota)

// Acceso a propiedades
let mascota2 = new DefaultPerson("Gordito")
console.log(mascota.name,mascota.age,mascota.alias)
console.log(alias="ShitZut")

mascota2.age = 4
console.log(mascota2.age)


//
class Person2 {
    constructor(name, age,alias){
        this.name = name
        this.age = age
        this.alias = alias
    }
    
    saludar(name) {
        console.log(`Hola ${this.name}`)
        
    }
}

let persona3= new Person2("Leonardo",54,"Leito")

persona3.saludar("Leonardo")


// propiedades privadas
class Person3 {
    #bank

    constructor(name, age,alias, bank){
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank
    }
    pay(){
        this.#bank
    }
    

}


let persona4= new Person3("Leonardo",54,"Leito",45082300)
console.log(persona4)
console.log(persona4.bank) // nO se puede acceder
persona4.bank = "ISB3456980781235"
console.log(persona4.bank)


// Getrs y Seter
console.log("Getrs y Seter")
class Person4 {
    #name
    #age
    #alias
    #bank

    constructor(name, age,alias, bank){
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }
    get name(){ // Con get puedo acceder al nombre
        return this.#name
    }
    set bank(newBakn){
        this.#bank = newBakn
    }
    

}

person6 = new Person4("Mauri",34,"Mauro","ISB4560985")
console.log(person6)

console.log(person6.name) // Imprime el nombre
console.log(person6.bank = "450800263144")



// Herencia

class Animal {

    constructor(name){
        this.name = name
    }

    sound(){
        console.log("Emite un sonido de animal.")
    }
}

class Dog extends Animal{

    run(){
        console.log("El pero corre.")
    }

    sound(){
        console.log("Wuaw")
    }
}

let myDog = new Dog("Teddy")
myDog.run()
myDog.sound()


class Fish extends Animal{

    constructor(name, size){
        super(name)
        this.size = size
    }

    swing(){
        console.log("El pez nada.")
    }
}

let myFish = new Fish("Nemo", "7cms")
console.log(myFish.name,myFish.size)
myFish.swing()
myFish.sound()


// Metodos estáticos

class MathOperations {

    static suma(a,b) {
        return a+b
    }
}

console.log(MathOperations.suma(5,7))