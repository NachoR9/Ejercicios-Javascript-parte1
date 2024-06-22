//Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

// Añadir un event listener de forma que cada vez que el botón se pulse coja el valor 
// los valores de los inputs los convierte en números y diga cual es el mayor.

const number1 = document.getElementById("number1")
const number2 = document.getElementById("number2")
const button = document.getElementById("btn")
const response = document.getElementById("p-id")


button.addEventListener("click",(e) => {
    const value1 = parseFloat(number1.value)
    const value2 = parseFloat(number2.value)
    const maxValue = Math.max(value1, value2)
    response.textContent = `El número mayor es ${maxValue}`
})