// Questão 9
function encontrarSegundoMaior(array) {
    let maior = -Infinity
    let segundoMaior = -Infinity
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] > maior) {
        segundoMaior = maior
        maior = array[i];
      } else if (array[i] > segundoMaior && array[i] !== maior) {
        segundoMaior = array[i];
      }
    }
  
    return segundoMaior
  }
const numeros = [1, 2, 17, 21];
const segundoMaior = encontrarSegundoMaior(numeros);

console.log(segundoMaior);