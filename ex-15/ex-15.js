//Escribir un programa que nos diga si un número dado es primo (no es divisible por ninguno otro número que no sea él mismo o la unidad)
 
//Definimos una variable que almacene si el número es primo y establecemos que por defecto sí.
// Recorremos todos los números menores que el valor dado y si encontramos uno por el que sea divisible, 
// asignamos la variable a false, paramos y pintamos el resultado de si es primo o no.

const number = document.getElementById("number");
const button = document.getElementById("btn")
const response = document.getElementById("p-id");

button.addEventListener("click", (e) => {
  const value = parseInt(number.value);
  let isPrime = true;
 
  for (let i = 2; i < value; i++) {
    if (value % i === 0) {
        isPrime = false;
        break
    }
  }

  if (isPrime) {
    response.textContent = `El número ${value} es primo`
  } else {
    response.textContent = `El número ${value} no es primo`
  }
});