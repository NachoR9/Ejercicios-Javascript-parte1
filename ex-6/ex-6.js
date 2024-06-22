// Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

// Añadir un event listener de forma que cada vez que el botón se pulse coja  
// los valores de los inputs los convierta en números y diga cual es el mayor.

const number1 = document.getElementById("number1")
const number2 = document.getElementById("number2")
const number3 = document.getElementById("number3")
const button = document.getElementById("btn")
const response = document.getElementById("p-id")


button.addEventListener("click",(e) => {
    const value1 = parseFloat(number1.value)
    const value2 = parseFloat(number2.value)
    const value3 = parseFloat(number3.value)
    const maxValue = Math.max(value1, value2, value3)
    response.textContent = `El número mayor es ${maxValue}`
})