function repetir(elemento, quantidade){
if(quantidade <= 0){
return  [];
}

const arrayRepetido = [];
for(let i = 0; i < quantidade; i++){
    arrayRepetido.push(elemento);
}

return arrayRepetido;
}
console.log(repetir("Oi",5))
console.log(repetir(10, 5))