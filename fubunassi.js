let a = 0;
let b = 1;
let siguiente = 0;
let resultado = "";

for (let i = 0; i < 10; i++) {
    resultado += a + " ";
    siguiente = a + b;
    a = b;
    b = siguiente;
}

console.log(resultado);