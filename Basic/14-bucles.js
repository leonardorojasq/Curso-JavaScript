// Loops o Bucles

// 1. for
let saludo ="Hola"


for (let i = 1;i <= 5;i++) {
    console.log(`${saludo}`)

}

const listado = [14,24,34,44,55,60,70]

for (let i = 0;i < listado.length;i++) {
    console.log("Impimiendo",i ," = ", listado[i])
}

// while

let i = 0;

while (i < 10) {
    console.log(`Numero ${i}`);
    i++;
}

// do while

let j = 0;
do {
    console.log(`Bucle while ${j}`);
    j++
} while(j < 5)


    // for of

let array = [1,2,3,4,5,6,8]
let myset = new Set(["leo","Rojas",54, true])
let map = new Map([
    ["name","Leo"]
])
let myString = "Hola Leonardo"

for (let i of array) {
    console.log(i)
    
}
for (let i of myset) {
    console.log(i)
    
}
for (let i of map) {
    console.log(i)
    
}
for (let i of myString) {
    console.log(i)
    
}

// buenas practicas

for (let i = 30;i < 40;i++) {
    if(i == 35){
        continue
    }
    console.log(`Continue ${i}`)

}

for (let i = 30;i < 40;i++) {
    if(i == 35){
        continue
    }else if(i == 38){
        break
    }
    console.log(`Continue y break ${i}`)

}