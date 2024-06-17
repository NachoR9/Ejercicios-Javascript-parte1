/*Escribe un programa que escriba en la pantalla “La suma de 3 + 5 es <resultado>”.*/
/*
Hacer una función suma de dos números devolviendo el valor de su suma
Crear el texto "Suma de 3 + 5" en el documento html
Buscar el elemento main en el documento
Añadir el texto dentro del main
*/

function sum(numb1, numb2) {
  return numb1 + numb2;
}

const text = document.createTextNode("Suma de 3 + 5 =" + sum(3, 5));

const main = document.getElementById("mainid");

main.appendChild(text);
