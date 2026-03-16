const CHAVE_CARRINHO = "mm_montagens_carrinho";

// Função para pegar os itens do LocalStorage
function getCarrinho() {
    return JSON.parse(localStorage.getItem(CHAVE_CARRINHO)) || [];
}

// Função para salvar os itens e atualizar a tela
function salvarCarrinho(itens) {
    localStorage.setItem(CHAVE_CARRINHO, JSON.stringify(itens));
    atualizarIcones(); // Chama a função correta aqui
}

// Função para adicionar um produto
function adicionarAoCarrinho(id, nome, codigo, imgId, qtyId) {
    const qtyInput = document.getElementById(qtyId);
    const qty = parseInt(qtyInput.value) || 1;
    const imgElement = document.getElementById(imgId);
    const img = imgElement ? imgElement.src : "";

    let carrinho = getCarrinho(); // Usando a função que já criamos
    
    const index = carrinho.findIndex(item => item.codigo === codigo);
    if (index > -1) {
        carrinho[index].qty += qty;
    } else {
        carrinho.push({ id, nome, codigo, img, qty });
    }

    // Salva e já atualiza os ícones automaticamente
    salvarCarrinho(carrinho);
    
    // --- ANIMAÇÃO DO CARRINHO ---
    
    // Faz o ícone do carrinho pular (no Desktop e no Mobile)
    const iconesCarrinho = document.querySelectorAll('.fa-shopping-cart');
    iconesCarrinho.forEach(icone => {
        icone.classList.add('animate-bounce-cart', 'text-mm-yellow');
        
        setTimeout(() => {
            icone.classList.remove('animate-bounce-cart', 'text-mm-yellow');
        }, 400);
    });

    // Feedback visual no botão que foi clicado
    // Nota: o 'event' aqui funciona se o onclick estiver no HTML
    const botaoClicado = event.currentTarget;
    const textoOriginal = botaoClicado.innerHTML;
    botaoClicado.innerHTML = '<i class="fas fa-check"></i> Adicionado!';
    botaoClicado.classList.replace('bg-[#25D366]', 'bg-blue-600');
    
    setTimeout(() => {
        botaoClicado.innerHTML = textoOriginal;
        botaoClicado.classList.replace('bg-blue-600', 'bg-[#25D366]');
    }, 1500);
}

// Atualiza a bolinha do menu e mostra/esconde o botão flutuante
function atualizarIcones() {
    const carrinho = getCarrinho();
    const totalProdutosDiferentes = carrinho.length; 

    // 1. Atualiza a bolinha (badge) de todos os lugares
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

// Inicializa a bagaça
window.addEventListener('DOMContentLoaded', atualizarIcones);