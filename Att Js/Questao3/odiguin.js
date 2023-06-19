//3
function MesesAno(numero){
    const meses = [
        "janeiro",
        "fevereiro",
        "março",
        "abril",
        "maio",
        "junho",
        "julho",
        "agosto",
        "setembro",
        "outubro",
        "novembro",
        "dezembro",
    ];
    if (numero >= 1 && numero <= 12) {
    return meses[numero]
}
}
console.log(MesesAno(4))
console.log(MesesAno(8))