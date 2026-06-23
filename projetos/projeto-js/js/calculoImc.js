const paciente = document.querySelectorAll(".info-nome");
const peso = document.querySelectorAll(".info-peso");
const altura = document.querySelectorAll(".info-altura");
const imc = document.querySelectorAll(".info-imc");
calculoImc = function(peso, altura){return peso/Math.pow(altura,2)};

if(peso <= 0 || peso > 635){
    console.log("Peso Ínvalido");
}
else if(altura < 0.57 || altura > 2.72){
    console.log("Altura Ínvalido");
}
else{
    imc.forEach((element,i) => {
        element[i] = calculoImc(peso[i].textContent, altura[i].textContent).toFixed(2);;
        imc[i].textContent = element[i];
    });
}

