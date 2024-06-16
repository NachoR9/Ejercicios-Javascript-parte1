/*Escribe un programa que escriba en la pantalla “La suma de 3 + 5 es <resultado>”.*/


 function sum(numb1,numb2) {
    return numb1 + numb2
}

const main = document.getElementById("mainid")

const text = document.createTextNode("Suma de 3 + 5 =" + sum(3,5));

main.appendChild(text)
