function inverso(parametro) {
    return typeof parametro === 'boolean'
      ? !parametro
      : typeof parametro === 'number'
      ? -parametro
      : `Booleano ou Número esperados, mas o parâmetro é do tipo ${typeof parametro}.`;
  }
  console.log(inverso(false)); 
console.log(inverso(20)); 
console.log(inverso(-50));
console.log(inverso("texto")); 