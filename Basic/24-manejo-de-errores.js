// // Excepcion
// let letObject



// try{
//     console.log(letObject.email)
//     console.log("Finaliza la ejecucion sin errores")
// }
// catch{
//     // bloque error
//     console.log("Se ha producido un error")
// }

// // Captura del error
// try{
//     console.log(letObject.email)
//     console.log("Finaliza la ejecucion sin errores")
// }
// catch (error) {
//     // bloque error
//     console.log("Se ha producido un error", error.message)
// }


// // Finally
// try{
//     console.log(letObject)
//     console.log("Finaliza la ejecucion sin errores")
// }
// catch (error) {
//     // bloque error
//     console.log("Se ha producido un error", error.message)
// } finally{
//     console.log("Este codigo se ejecuta siempre")
// }

// Captura de errores

function sum(a,b) {
    if(typeof a=== "number")){
        return "No se puede sumar las propiedades"
    } else {
    return a+b
    }
}

console.log(sum("4","5"))

