// Ejercicios de clases

// 1. Crea una clase que reciba dos propiedades
class Auto {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

let auto = new Auto("Renault", "45.000.000");
console.log(auto);

// 2. Añade un método a la clase que utilice las propiedades
class Auto1 {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }

    honk() {
        console.log(`El ${this.name} está pitando y cuesta ${this.cost}`);
    }
}

let auto1 = new Auto1("Renault", "45.000.000");
auto1.honk();

// 3. Muestra los valores de las propiedades e invoca a la función
class Auto2 {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }

    honk() {
        console.log(`El ${this.name} está pitando`);
    }
}

let auto2 = new Auto2("Renault", "45.000.000");
console.log(auto2.name);
console.log(auto2.cost);
auto2.honk();

// 4. Añade un método estático a la primera clase (evolución en Auto3)
class Auto3 {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }

    honk() {
        console.log(`El ${this.name} está pitando`);
    }

    static papeles() {
        return "Papeles al día, con el traspaso firmado";
    }
}

// 5. Haz uso del método estático
console.log(Auto3.papeles());

// 6. Crea una clase que haga uso de herencia
class Renault extends Auto3 {
    puertas() {
        console.log("Tiene 4 puertas");
    }
}

let renault = new Renault("Renault Logan", "40.000.000");
renault.puertas();
renault.honk(); // Heredado de Auto3

// 7. Crea una clase que haga uso de getters y setters
// 8. Modifica la clase con getters y setters para que use propiedades privadas
class Renault2 extends Auto3 {
    #color; // Propiedad privada

    constructor(name, cost, color) {
        super(name, cost); // Llama al constructor de Auto3
        this.#color = color;
    }

    puertas() {
        console.log("Tiene 4 puertas");
    }

    get color() {
        return this.#color;
    }

    set color(nuevoColor) {
        this.#color = nuevoColor;
    }
}

// 9. Utiliza los get y set y muestra sus valores
let carro = new Renault2("Renault Duster", "65.000.000", "Rojo");
console.log(carro.color); // Usa el get -> Muestra: "Rojo"

carro.color = "Azul";     // Usa el set -> Modifica el color
console.log(carro.color); // Usa el get -> Muestra: "Azul"

// 10. Sobrescribe un método de una clase que utilice herencia
class RenaultDeportivo extends Auto3 {
    honk() {
        console.log(`El ${this.name} deportivo pita muy fuerte: ¡BEEP BEEP!`);
    }
}

let deportivo = new RenaultDeportivo("Renault Sandero RS", "75.000.000");
deportivo.honk(); // Ejecuta el método sobrescrito
