//Escribe un programa que pida una frase y escriba cuantas vocales hay en la frase.

// Es una mezcla entre la lógica explicada en el ejercicio 7 y la lógica del ejercicio 8. 
// El programa recorre todo el texto del input y comprueba que el caracter sea vocal o no y
// si lo es suma uno al contador.

const phrase = document.getElementById("phrase");
const input = document.getElementById("input");

input.addEventListener("input", (e) => {
    let counter= 0
    const inputValue = e.target.value.toLowerCase()
    for (let i = 0; i < inputValue.length; i++) {
      let character = inputValue[i];
      if (["a","e","i","o","u"].includes(character)) {
        counter++
      }
    }

     phrase.textContent = `El número de vocales son ${counter}`

    });
