//Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

// Determinamos si el resto de dividir el valor por 2,3,5 o 7 es 0
// En caso de serlo pintamos un texto y si no otro

const number = document.getElementById("number");
const button = document.getElementById("btn")
const response = document.getElementById("p-id");

button.addEventListener("click", (e) => {
  const value = parseInt(number.value);
  if (
    value % 2 === 0 ||
    value % 3 === 0 ||
    value % 5 === 0 ||
    value % 7 === 0
  ) {
    response.textContent = `El número es divisible por 2 3 5 o 7`;
  } else {
    response.textContent = `El número no es divisible por 2 ni 3 ni 5 ni 7`;
  }
});
