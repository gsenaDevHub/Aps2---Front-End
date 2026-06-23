function validarNome(text){
    return !text ? true : false;
}
function validarAltura(valor){
    return valor > 0 && valor <= 2.72 && !valor.isNaN? true : false;
}
function validarPeso(valor){
    return valor < 645 && valor > 0 && !valor.isNaN? true : false;
}
function validarGordura(valor){
    return valor > 0 && valor <= 80 && !valor.isNaN? true : false;
}
