const CHAVE_CARRINHO = "mm_montagens_carrinho";

// Função para pegar os itens do LocalStorage
function getCarrinho() {
    return JSON.parse(localStorage.getItem(CHAVE_CARRINHO)) || [];
}

// Função para salvar os itens
function salvarCarrinho(itens) {
    localStorage.setItem(CHAVE_CARRINHO, JSON.stringify(itens));
    atualizarIcones();
}

// Função para adicionar um produto
function adicionarAoCarrinho(id, nome, codigo, imgId, inputQtdId) {
    const inputQtd = document.getElementById(inputQtdId);
    const qtd = parseInt(inputQtd.value);

    if (!qtd || qtd <= 0) {
        alert("Por favor, informe uma quantidade válida.");
        return;
    }

    const imgPath = document.getElementById(imgId).src;
    const carrinho = getCarrinho();
    
    // Verifica se o produto já está no carrinho
    const produtoExistente = carrinho.find(item => item.id === id);

    if (produtoExistente) {
        produtoExistente.qtd += qtd; // Soma a quantidade
    } else {
        carrinho.push({ id, nome, codigo, qtd, img: imgPath }); // Adiciona novo
    }

    salvarCarrinho(carrinho);
    inputQtd.value = ""; // Limpa o campo após adicionar
    
    alert("Produto adicionado ao carrinho!");
}

// Atualiza a bolinha do menu e mostra/esconde o botão flutuante
function atualizarIcones() {
    const carrinho = getCarrinho();
    const totalProdutosDiferentes = carrinho.length; // Conta quantos produtos únicos existem

    // 1. Atualiza a bolinha do Header
    const bolinhasHeader = document.querySelectorAll('.badge-carrinho');
    bolinhasHeader.forEach(bolinha => {
        if (totalProdutosDiferentes > 0) {
            bolinha.classList.remove('hidden');
            bolinha.innerText = totalProdutosDiferentes > 9 ? "9+" : totalProdutosDiferentes;
        } else {
            bolinha.classList.add('hidden');
        }
    });

    // 2. Mostra/Esconde o botão flutuante inferior
    const botaoFlutuante = document.getElementById('btn-carrinho-flutuante');
    if (botaoFlutuante) {
        if (totalProdutosDiferentes > 0) {
            botaoFlutuante.classList.remove('hidden');
            botaoFlutuante.classList.add('flex');
        } else {
            botaoFlutuante.classList.add('hidden');
            botaoFlutuante.classList.remove('flex');
        }
    }
}

// Executa a atualização visual assim que a página carrega
window.addEventListener('DOMContentLoaded', atualizarIcones);