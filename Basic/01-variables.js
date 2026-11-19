// var
var helloWord = "Hola JavaSctip!"
console.log(helloWord)
helloWord = "Hola Mundo!"
console.log(helloWord)


// let
let helloWord2 = "Hola JavaSctip!"
console.log(helloWord2)


// const 
const helloWord3 = "Hola JavaSctip!"
console.log(helloWord3)

helloWord3 = "Hola Mundo!" // Esto causará un error porque las variables const no pueden ser reasignadas
console.log(helloWord3) // helloWord3 = "Hola Mundo!" // Esto causará un error porque las variables const no pueden ser reasignadas

/*
El hoisting (elevación) en JavaScript es un comportamiento del intérprete que mueve virtualmente las declaraciones al 
principio de su contexto (ya sea el ámbito global o una función) antes de ejecutar el código.
Cuando declaras una variable con var, ocurre un problema principal: su declaración se eleva, pero su inicialización no. 
Esto significa que la variable pasa a existir inmediatamente con el valor undefined, lo que suele provocar errores lógicos silenciosos.
*/