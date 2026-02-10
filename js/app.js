// LISTA DE AMIGOS
let amigos = [];


// FUNÇÃO: ADICIONAR AMIGO
function adicionar() {
    // Captura o input e o valor digitado
    const input = document.getElementById("nome-amigo");
    const nome = input.value.trim();

    // ❌ Impede nome vazio
    if (nome === "") {
        alert("Digite um nome válido.");
        return;
    }

    // ❌ Impede nomes repetidos (ignora maiúsculas/minúsculas)
    const nomeRepetido = amigos.some(
        amigo => amigo.toLowerCase() === nome.toLowerCase()
    );

    if (nomeRepetido) {
        alert("Esse nome já foi adicionado.");
        input.value = "";
        return;
    }

    // ✅ Adiciona nome ao array
    amigos.push(nome);

    // Limpa o campo de texto
    input.value = "";

    // Atualiza a lista na tela
    atualizarListaAmigos();
}


// FUNÇÃO: ATUALIZAR LISTA DE AMIGOS
function atualizarListaAmigos() {
    const lista = document.getElementById("lista-amigos");

    // Mostra os nomes um abaixo do outro
    lista.innerHTML = amigos.join("<br>");
}


// FUNÇÃO: SORTEAR
function sortear() {

    // ❌ Exige no mínimo 4 participantes
    if (amigos.length < 4) {
        alert("Adicione pelo menos 4 amigos para realizar o sorteio.");
        return;
    }

    // Cria uma cópia do array original
    let sorteados = [...amigos];

    // Embaralha até que o sorteio seja válido
    do {
        sorteados.sort(() => Math.random() - 0.5);
    } while (!sorteioValido(amigos, sorteados));

    // Mostra o resultado final
    mostrarResultado(sorteados);
}



// FUNÇÃO: VALIDAR SORTEI
// (ninguém pode tirar a si mesmo)
function sorteioValido(originais, sorteados) {
    for (let i = 0; i < originais.length; i++) {
        if (originais[i] === sorteados[i]) {
            return false;
        }
    }
    return true;
}


// FUNÇÃO: MOSTRAR RESULTADO
function mostrarResultado(sorteados) {
    const resultado = document.getElementById("lista-sorteio");
    resultado.innerHTML = "";

    // Mostra quem tirou quem
    for (let i = 0; i < amigos.length; i++) {
        resultado.innerHTML += `${amigos[i]} → ${sorteados[i]}<br>`;
    }
}


// FUNÇÃO: REINICIAR
function reiniciar() {
    // Limpa o array
    amigos = [];

    // Limpa as listas da tela
    document.getElementById("lista-amigos").innerHTML = "";
    document.getElementById("lista-sorteio").innerHTML = "";

    // Limpa o input
    document.getElementById("nome-amigo").value = "";
}
