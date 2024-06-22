//Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a

//Añadir un event listener de forma que cada vez que escribamos una letra el programa recorre todo el
//texto del input y le suma 1 al contador si el caracter es una "a/A"

const phrase = document.getElementById("phrase");
const input = document.getElementById("input");

input.addEventListener("input", (e) => {
  let counter = 0;
  const inputValue = e.target.value.toLowerCase()
  for (let i = 0; i < inputValue.length; i++) {
    let character = inputValue[i];
    if ((character === "a")) {
      counter++;
    }
  }
  phrase.textContent = `El número de Aes es ${counter}`

});

