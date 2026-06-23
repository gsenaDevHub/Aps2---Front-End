const tbody = document.querySelector("#tabela-pacientes");
const form = document.querySelector("#form-adiciona");
const templateTr = document.querySelector(".paciente");
const erros = document.querySelector("#erro-msg");

function exibirErros(mensagens) {
    erros.innerHTML = "";
    mensagens.forEach((mensagem) => {
        const li = document.createElement("li");
        li.innerHTML = mensagem;
        erros.appendChild(li);
    });
}

function criarPaciente(paciente) {
    const aux = templateTr.cloneNode(true);
    aux.style.display = "";
    aux.querySelector(".info-nome").textContent = paciente.nome;
    aux.querySelector(".info-peso").textContent = paciente.peso;
    aux.querySelector(".info-altura").textContent = paciente.altura;
    aux.querySelector(".info-gordura").textContent = paciente.gordura;
    aux.querySelector(".info-imc").textContent = paciente.imc;
    return aux;
};

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.querySelector(".nome").value.trim();
    const peso = Number(document.querySelector(".peso").value);
    const altura = Number(document.querySelector(".altura").value);
    const gordura = Number(document.querySelector(".gordura").value.trim());
    const imc = (peso / Math.pow(altura, 2)).toFixed(2);

    const paciente = {
        nome,
        peso,
        altura,
        gordura,
        imc
    };

    const mensagensErro = [];

    if (validarNome(nome)) {
        mensagensErro.push("Nome inválido!");
    }
    if (!validarPeso(peso)) {
        mensagensErro.push("Peso inválido!");
    }
    if (!validarAltura(altura)) {
        mensagensErro.push("Altura inválida!");
    }
    if (!validarGordura(gordura)) {
        mensagensErro.push("Gordura inválida!");
    }

    if (mensagensErro.length > 0) {
        exibirErros(mensagensErro);
        return;
    }
    
    erros.innerHTML = "";
    const li = document.createElement("li");
    li.innerHTML = "Paciente adicionado com sucesso!";
    li.style.color = "green";
    erros.appendChild(li);
    
    tbody.appendChild(criarPaciente(paciente));

    const dados = localStorage.getItem("dados");

    const usuarios = dados ? JSON.parse(dados) : [];

    usuarios.push(paciente);

    console.log(usuarios);

    localStorage.setItem("dados", JSON.stringify(usuarios));    

    form.reset();

});

const dados = localStorage.getItem("dados");
if (dados) {
    const pacientes = JSON.parse(dados);
    pacientes.forEach((element) => {
        const tr = criarPaciente(element);
        tbody.appendChild(tr);
    });
}