// Ejercicios

// 1. Crea un objeto con 3 propiedades
const carro = {
    modelo: 2026,
    marca: "Renault",
    color: "Rojo"
}
const carro2 = {
    modelo: 2026,
    marca: "Renault",
    color: "Rojo"
}

// 2. Accede y muestra su valor
console.log("2. Accede y muestra su valor")
console.log(carro.marca,carro.modelo,  carro.color)
carro.andar = function(){
    console.log(`El ${this.marca} esta andando`)
}
console.log(carro.andar)
// 3. Agrega una nueva propiedad
carro.carroceria = "Cedan"
console.log(carro.carroceria)
console.log(carro.marca,carro.modelo,  carro.color, carro.carroceria)

// 4. Elimina una de las 3 primeras propiedades
delete carro.color
console.log(carro)

// 5. Agrega una función e invócala
carro.andar= function(){
    console.log(`El ${carro.marca} esta andando`)
}
carro.andar()
// 6. Itera las propiedades del objeto
for (let key in carro){
    console.log(key)
}

// 7. Crea un objeto anidado
console.log("7. Crea un objeto anidado")
carro.motor = {
    cilindrada: "1600",
    tipo: " Gasolina",
    cilindros: 4
}
console.log(carro)
// 8. Accede y muestra el valor de las propiedades anidadas
console.log(carro.motor)

// 9. Comprueba si los dos objetos creados son iguales
console.log(carro == carro2)
// 10. Comprueba si dos propiedades diferentes son iguales
console.log(carro.modelo == carro.motor.cilindrada)