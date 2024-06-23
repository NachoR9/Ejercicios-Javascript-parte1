//Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)

// Agrupamos en un array los posibles divisores del input que escribamos e indicamos que si la longitud de este array
// es mayor que 0, el programa pinta los divisores del input introducido.
 
const number = document.getElementById("number");
const button = document.getElementById("btn")
const response = document.getElementById("p-id");

button.addEventListener("click", (e) => {
  const value = parseInt(number.value);
  const divider = []
  if (value % 2 === 0) {
     divider.push(2)
  }
  if (value % 3 === 0) {
    divider.push(3)
  }
  if (value % 5 === 0) {
    divider.push(5)
  }
  if (value % 7 === 0) {
    divider.push(7)
  }

   if (divider.length > 0) {
    response.textContent = `El número es divisible por ${divider.join(" y por ")} `;
  } else {
    response.textContent = `El número no es divisible por 2 ni 3 ni 5 ni 7`;
  }
});