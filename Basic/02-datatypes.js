// tipos de dtos primitivos

//String cadena d etexto
let nombre = "Juan";

let alias = 'Juanito';
let email = `leo@out.com`;


// Números
let edad = 30; // entero
let peso = 75.5; // decimal
let altura = 1.75; // decimal

// Booleanos(boolean) verdadero o falso
let esEstudiante = true;
let tieneTrabajo = false;


// Undefined
let direccion;
console.log(direccion); // undefined


// Null
let telefono = null;
console.log(telefono); // null


// Symbol
let id = Symbol("id");
console.log(typeof id); // symbol

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2); // ❌ false (Son totalmente diferentes por dentro)
// Objeto que viene de una API externa

let usuario = {
  nombre: "Carlos",
  edad: 28
};

// Quieres añadirle tu propio identificador interno sin arriesgarte
// a romper o sobreescribir una propiedad "id" que la API pueda traer en el futuro.
let idInterno = Symbol("id");
usuario[idInterno] = "APP-99827";

// El objeto ahora convive con ambas cosas de forma segura
console.log(usuario.nombre);     // "Carlos"
console.log(usuario.edad);       // 28
console.log(usuario[idInterno]); // "APP-99827"
console.log(Object.keys(usuario));     // ["nombre", "edad"]

// BigInt Enteros muy grandes
let bigInt1 = BigInt(1234567890123456789012345678901234567890);
let bigInt2 = 1234567890123456789012345678901234567890n;
console.log(bigInt1);
console.log(bigInt2);

// mostramos los  tipos de datos
console.log(typeof nombre); // string
console.log(typeof edad);   // number
console.log(typeof esEstudiante); // boolean
console.log(typeof direccion); // undefined
console.log(typeof telefono); // object
console.log(typeof id); // symbol
console.log(typeof bigInt1); // bigint
console.log(typeof bigInt2); // bigint