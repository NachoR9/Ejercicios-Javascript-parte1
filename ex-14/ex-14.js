// Escribir un programa que escriba en pantalla los divisores comunes de dos números dados
 
// Definimos un array para los divisores e iteramos desde el número 1 hasta el menor de los valores que le llegan al programa.
// Si ambos valores son divisibles por el número correspondiente lo añadimos al array y se pinta.

const number = document.getElementById("number");
const number2 = document.getElementById("number-2");
const button = document.getElementById("btn")
const response = document.getElementById("p-id");

button.addEventListener("click", (e) => {
  const value = parseInt(number.value);
  const value2 = parseInt(number2.value);
  const dividers = []
 
  for (let i = 1; i <= Math.min(value, value2); i++) {
    if ((value % i === 0) && (value2 % i === 0)) {
        dividers.push(i)
    }
  }

response.textContent = `Ambos números son divisibles por ${dividers.join(", ")} `;
});