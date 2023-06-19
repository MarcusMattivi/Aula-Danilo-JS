// Questão 8
function calcularSoma(array) {
    let soma = 0
  
    for (let i = 0; i < array.length; i++) {
      soma += array[i]
    }
  
    return soma
  }
const numeros = [1, 2, 2, 3, 4, 5]
const resultado = calcularSoma(numeros)

console.log(resultado)