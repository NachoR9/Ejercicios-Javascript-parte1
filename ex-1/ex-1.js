/* 
Escribe un programa que escriba en la pantalla un texto de tipo <h1> que diga “Hello Javascript”.
*/

const newh1 = document.createElement("h1");
const text = document.createTextNode("Hello Javascript");

newh1.appendChild(text)

const main = document.getElementById("mainid")
document.body.insertBefore(newh1, main)