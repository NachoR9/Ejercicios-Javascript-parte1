//Escribir un programa que escriba en pantalla los divisores de un número dado
 
//Definimos un array para los divisores e iteramos desde el número 1 hasta el valor que le llega al programa.
// Si el valor es divisible por el número correspondiente lo añadimos al array y se pinta.

const number = document.getElementById("number");
const button = document.getElementById("btn")
const response = document.getElementById("p-id");

button.addEventListener("click", (e) => {
  const value = parseInt(number.value);
  const dividers = []
 
  for (let i = 1; i <= value; i++) {
    if (value % i === 0) {
        dividers.push(i)
    }
  }

response.textContent = `El número es divisible por ${dividers.join(", ")} `;
});