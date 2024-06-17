/*Escribe un programa que pida el nombre del usuario con un input y escriba un texto que diga 
“Hola <nombre-de-usuario>” */

/*Coger el id del input donde el usuario escribe el nombre.
Coger el id del elemento paragraph donde aparecerá el nombre.
Escuchar los eventos tipo change del input y actualizar el cajetín de texto con el nombre proporcionado.
*/

const input = document.getElementById("inputid");

const userName = document.getElementById("p-id");

input.addEventListener("change", function (e) {
  userName.textContent = "Hola " + e.target.value;
});
