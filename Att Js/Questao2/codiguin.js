//2
function calculoDias(idade) {
    if(idade < 0){
return "A idade nao pode ser negativa!"
}
var resultadoCalc = idade * 365;
return resultadoCalc
}
var idade = 17
var resultadoCalc = calculoDias(idade)

console.log(idade + " anos em dias resultam em: "+resultadoCalc)