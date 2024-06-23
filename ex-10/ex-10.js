//Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales

// Establecer counter como objeto con 5 propiedades, una por cada vocal. 
// El programa recorre todo el texto del input y comprueba que el caracter sea vocal o no y
// si lo es suma uno al contador
// Convertir el contador de objeto a string con el método json.stringify

const phrase = document.getElementById("phrase");
const input = document.getElementById("input");

input.addEventListener("input", (e) => {
    let counter = {
        "a": 0,
        "e": 0,
        "i": 0,
        "o": 0,
        "u": 0
    }
    const inputValue = e.target.value.toLowerCase()
    for (let i = 0; i < inputValue.length; i++) {
      let character = inputValue[i];
      if (["a","e","i","o","u"].includes(character)) {
        counter[character]++
      }
    }

     phrase.textContent = `El número de vocales son ${JSON.stringify(counter)}`

    });