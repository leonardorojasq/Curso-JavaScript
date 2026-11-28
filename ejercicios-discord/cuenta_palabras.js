// Crea una función que cuente cuántas palabras hay en un texto.

function contarPalabras(frase) {
    let contador = 0;
    let espacioAnterior = false;


    if(frase === ""){
        console.log("No hay frase")
        return;
    }


    for (let indice of frase) {
        if (indice == " " && espacioAnterior == false) {
            contador++;
        }

        espacioAnterior = indice == " ";
        
    }

    console.log(contador);
}


 contarPalabras("Crea una función que cuente cuántas palabras hay en un texto.")