//if ,else if, else

    // if = si

let age = 28

// Opcion 1
if(age === 37) {
    console.log("La edad es 37")
}

// else (si no)
if(age != 37) {
    console.log(`La edad no es igual, la edad es ${age}`)
}



// opcion 2
if(age === 37) {
    console.log("La edad es 37")
}else if(age<18){
    console.log("Es menor")
}else{
    console.log(`La edad no es igual, la edad es ${age}`)
}

// Operar ternario

const message = age >= 18 ? "Es mayor de edad" : "No Es mayor de edad"
console.log(message)


// Switch

let day = 9
let dayName 

switch (day){
    case 0:
        dayName = "Lunes"
        break
    case 1:
        dayName = "Martes"
        break
    case 2:
        dayName = "Miercoles"
        break
    case 3:
        dayName = "Jueves"
        break
    case 4:
        dayName = "Viernes"
        break
    case 6:
        dayName = "Sabado"
        break
    case 7:
        dayName = "Domingo"
        break
    default:
        dayName= "Número de día incorrecto"
}

console.log(dayName)
