//Escribe un programa que pida una frase y escriba las vocales que aparecen

// Añadir un event listener de forma que cada vez que escribamos un caracter
// el programa recorre todo el texto del input y comprueba que esté en el listado de
// vocales y lo guarda en un array que finalmente lo pinta en el navegador

const phrase = document.getElementById("phrase");
const input = document.getElementById("input");

input.addEventListener("input", (e) => {
    let keep = []
    const inputValue = e.target.value.toLowerCase()
    for (let i = 0; i < inputValue.length; i++) {
      let character = inputValue[i];
      if (["a","e","i","o","u"].includes(character)) {
        keep.push(character)
      }
    }

     phrase.textContent = `Las vocales que tiene son ${keep}`

    });