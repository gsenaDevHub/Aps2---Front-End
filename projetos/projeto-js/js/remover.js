var pacientes = document.querySelectorAll(".paciente")

var tabela = document.querySelector("#tabela-pacientes")

tabela.addEventListener("click", function(event){    
    if (event.shiftKey) {
        event.target.parentNode.style.backgroundColor = "red";
        event.target.parentNode.style.color = "white";
        event.target.parentNode.classList.add("fadeOut");
        setTimeout(()=>{
            event.target.parentNode.remove();
        },500)
    }
})

let linhaSelecionada = null;

tabela.addEventListener("dblclick", function(event) {
    const linha = event.target.parentNode;

    if (linhaSelecionada) {
        linhaSelecionada.style.backgroundColor = "";
        linhaSelecionada.style.color = "";  
    }
    linha.style.color = "white";
    linha.style.backgroundColor = "blue";
    linhaSelecionada = linha;
});