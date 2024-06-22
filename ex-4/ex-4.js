// Escribe un programa que pida dos números y escriba “La suma de <numero-uno> 
// con <numero-dos> es <resultado>”.

const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2")
const button = document.getElementById("btn")
const suma = document.getElementById("p-id")

button.addEventListener("click", (e) => {
    const value1 = parseFloat(number1.value)
    const value2 = parseFloat(number2.value)
    const result = value1 + value2
    suma.textContent= `La suma de ${value1} y ${value2} es ${result}`
})
