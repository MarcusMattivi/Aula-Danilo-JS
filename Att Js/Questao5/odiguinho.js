function multiplicacaoSemMultiplicar(a, b) {
    if (a < 0 || b < 0) {
    }
  
    let resultado = 0;
  
    while (b > 0) {
      resultado += a;
      b--;
    }
  
    return resultado;
  }
  console.log(multiplicacaoSemMultiplicar(4, 5));
  console.log(multiplicacaoSemMultiplicar(0, 7)); 
  console.log(multiplicacaoSemMultiplicar(9, 0));
  console.log(multiplicacaoSemMultiplicar(3, 2)); 