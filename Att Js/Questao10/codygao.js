// Questão 10
function melhoresAlunos(estudantes) {
    let melhorMedia = -Infinity
    let alunoDestaque = ""
  
    for (let aluno in estudantes) {
      const notas = estudantes[aluno]
      const media = calcularMedia(notas)
  
      if (media > melhorMedia) {
        melhorMedia = media
        alunoDestaque = aluno
      }
    }
  
    return {
      nome: alunoDestaque,
      media: melhorMedia,
    };
  }
  
  function calcularMedia(notas) {
    const soma = notas.reduce((total, nota) => total + nota, 0)
    return soma / notas.length;
  }
const estudantes = {
    Duda: [8, 8, 9, 10],
    Marcus: [9, 2, 9, 0],
    Pedro: [7, 6, 5, 4],
  }
const resultado = melhoresAlunos(estudantes)

console.log(resultado)