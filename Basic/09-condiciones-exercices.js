// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor.
let name = "Leonardo"

if(name === "Leonardo"){
    console.log(name)
}

// 2. Imprime por consola un mensaje si el usuario y contraseña coincide con unos establecidos
let user = "lrojasq"
let pass = "123456"

if(user === "lrojasq" && pass === "123456"){
    console.log("Bienvenido Leonardo")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let number = 0

if(number >= 1){
    console.log("Numero positivo")
}else if(number <= 0){
    console.log("Numero negativo o cero 0")
}else {
    console.log("Debes ingresar solo numeros")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan.
let edad = 16

if(edad >= 18){
    console.log("Puedes votar")
}else {
    r = 18 - edad
    console.log(`No puedes votar, te falta ${r} años`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
// dependiendo de la edad
let edadAdulto = 12

edadAdulto > 18 ? console.log("Adulto"):console.log("Menor")

// 6. Muestra en qué estación del año nos encontramos dependiendo del valor de una variable "mes"
let mesActual = "diciembre"


if(mesActual === "marzo" || mesActual === "abril" || mesActual === "mayo"){
    console.log("Primavera")

}else if(mesActual === "junio" || mesActual === "julio" || mesActual === "agosto"){
    console.log("Verano")

}else if(mesActual === "septiembre" || mesActual === "octubre" || mesActual === "noviembre"){
    console.log("Otoño")

}else if(mesActual === "diciembre" || mesActual === "enero" || mesActual === "febrero"){
    console.log("Invierno")
}


// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
let p = 28
let m = 30
let l = 31
if (mesActual === "febrero"){
    console.log(`${mesActual} tiene ${p} días`)
}else if (mesActual === "abril" || mesActual === "junio" || mesActual === "septiembre" || mesActual === "noviembre"   ){
    console.log(`${mesActual} tiene ${m} días`)
}else if (mesActual === "enero" || mesActual === "marzo" || mesActual === "mayo" || mesActual === "julio"  || mesActual === "agosto"  || mesActual === "octubre" || mesActual === "diciembre"  ){
    console.log(`${mesActual.toLocaleUpperCase()} tiene ${l} días`)
}else{
    console.log("La información ingresada no es valida!.")
}
// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = "aleman"

switch (idioma){
    case "español":
        console.log("Bienvenido")
        break
    case "ingles":
        console.log("Welcome")
        break
    case "francés":
        console.log("Bienvenue")
        break
    case "aleman":
        console.log("Willkommen")
        break
    case "italiano":
        console.log("Benvenuto")
        break
    case "portugués":
        console.log("Bem-vindo")
        break
    
    default:
        console.log("Lo lamento ese idioma no esta cargado!.")

}

// 9. Usa un switch para hacer de nuevo el ejercicio 6

if(mesActual === "marzo" || mesActual === "abril" || mesActual === "mayo"){
    console.log("Primavera")

}else if(mesActual === "junio" || mesActual === "julio" || mesActual === "agosto"){
    console.log("Verano")

}else if(mesActual === "septiembre" || mesActual === "octubre" || mesActual === "noviembre"){
    console.log("Otoño")

}else if(mesActual === "diciembre" || mesActual === "enero" || mesActual === "febrero"){
    console.log("Invierno")
}

switch (mesActual){
    case "marzo" :
    console.log("Primavera")
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7