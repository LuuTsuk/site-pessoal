// Procura na página o elemento que tem id="botao-destaques"
const botaoDestaques = document.querySelector("#botao-destaques");

// Procura na página o elemento que tem id="secao-destaques"
const secaoDestaques = document.querySelector("#secao-destaques");

// Diz ao botão: "fique esperando um clique, e quando acontecer, rode esta função"
botaoDestaques.addEventListener("click", function () {

    // Liga ou desliga a classe "escondido" na seção (se não tem, adiciona; se tem, remove)
    secaoDestaques.classList.toggle("escondido");

    // Verifica se a seção ficou com a classe "escondido" depois do toggle
    if (secaoDestaques.classList.contains("escondido")) {

        // Se ficou escondida, o texto do botão avisa que ele mostra de novo
        botaoDestaques.textContent = "Mostrar cartões";

    } else {

        // Se ficou visível, o texto do botão avisa que ele esconde de novo
        botaoDestaques.textContent = "Esconder cartões";

    }

});