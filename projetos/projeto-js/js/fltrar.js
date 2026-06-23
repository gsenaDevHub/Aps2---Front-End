var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function () {
    var pacientes = document.querySelectorAll(".paciente");
    for (let i = 0; i < pacientes.length; i++) {
        const paciente = pacientes[i];
        var tdNome = paciente.querySelector(".info-nome");
        var nome = tdNome.textContent;
        // Regex
        var expressao = new RegExp(this.value, "i");
        if (!expressao.test(nome)) {
            paciente.classList.add("invisivel")
        }
        else {
            paciente.classList.remove("invisivel")
        }
    }
})