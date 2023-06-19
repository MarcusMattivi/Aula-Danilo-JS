// Questão 7
function filtro(array) {
    const numeros = array.filter(elemento => typeof elemento === 'number')
    return numeros
  }

console.log(filtro([2, "alguma", 4, 5, 7, "paçavra"]))
console.log(filtro(["é", "pra", "ver", "se", "vai"]))