const CHAVE_CARRINHO = "mm_montagens_carrinho";

// Pega os itens salvos
function getCarrinho() {
    return JSON.parse(localStorage.getItem(CHAVE_CARRINHO)) || [];
}

// Salva e atualiza a interface
function salvarCarrinho(itens) {
    localStorage.setItem(CHAVE_CARRINHO, JSON.stringify(itens));
    if (typeof atualizarIcones === 'function') atualizarIcones();
}

// Função que o botão verde da página de produto usa
window.adicionarComVariacaoInterna = function(slug, nome, codigo, img, qty, variacao, preco) {
    let carrinho = getCarrinho();
    
    // Identificador único: código + variação (tamanho/cor)
    const index = carrinho.findIndex(item => item.codigo === codigo && item.variacao === variacao);

    if (index > -1) {
        carrinho[index].qty += qty;
        carrinho[index].preco = preco; // Garante o preço atualizado
    } else {
        carrinho.push({ slug, nome, codigo, img, qty, variacao, preco });
    }

    salvarCarrinho(carrinho);
    alert("Produto adicionado ao orçamento!");
};

// Função para atualizar as bolinhas de contagem no site
function atualizarIcones() {
    const carrinho = getCarrinho();
    const totalItens = carrinho.length; 

    const bolinhas = document.querySelectorAll('.badge-carrinho');
    bolinhas.forEach(b => {
        if (totalItens > 0) {
            b.classList.remove('hidden');
            b.innerText = totalItens > 9 ? "9+" : totalItens;
        } else {
            b.classList.add('hidden');
        }
    });

    const btnFlutuante = document.getElementById('btn-carrinho-flutuante');
    if (btnFlutuante) {
        totalItens > 0 ? btnFlutuante.classList.replace('hidden', 'flex') : btnFlutuante.classList.replace('flex', 'hidden');
    }
}

// FUNÇÃO PARA RENDERIZAR A PÁGINA DO CARRINHO (Use isso no seu checkout.astro ou carrinho.astro)
window.renderizarCarrinhoCompleto = function() {
    const itens = getCarrinho();
    const container = document.getElementById('lista-carrinho');
    const totalGeralElement = document.getElementById('total-geral');
    
    if (!container) return; // Só executa se estiver na página do carrinho

    let somaTotalCompra = 0;
    container.innerHTML = "";

    if (itens.length === 0) {
        container.innerHTML = `
            <div class="text-center py-12">
                <p class="text-gray-500 font-bold">Seu orçamento está vazio.</p>
                <a href="/produtos" class="text-mm-blue underline mt-4 block">Voltar para a loja</a>
            </div>`;
        if (totalGeralElement) totalGeralElement.innerText = "0,00";
        return;
    }

    itens.forEach((item, index) => {
        const subtotalItem = item.preco * item.qty;
        somaTotalCompra += subtotalItem;

        container.innerHTML += `
            <div class="flex flex-col md:flex-row items-center justify-between border-b border-gray-100 py-6 gap-4">
                <div class="flex items-center gap-4 w-full md:w-auto">
                    <img src="${item.img}" class="w-20 h-20 object-contain bg-gray-50 rounded-lg p-2" />
                    <div>
                        <h4 class="font-black text-gray-900 leading-tight">${item.nome}</h4>
                        <p class="text-xs font-bold text-gray-400 uppercase">${item.variacao}</p>
                        <p class="text-sm text-mm-blue font-black mt-1">
                            R$ ${item.preco.toFixed(2).replace('.', ',')} <span class="text-gray-400 font-normal text-xs">x ${item.qty}</span>
                        </p>
                    </div>
                </div>
                
                <div class="flex items-center justify-between w-full md:w-auto md:gap-8">
                    <div class="text-left md:text-right">
                        <span class="block text-[10px] uppercase font-black text-gray-400">Total do Item</span>
                        <span class="font-black text-gray-900 text-lg">R$ ${subtotalItem.toFixed(2).replace('.', ',')}</span>
                    </div>
                    <button onclick="removerItem(${index})" class="text-red-500 hover:text-red-700 transition-colors p-2">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
    });

    if (totalGeralElement) {
        totalGeralElement.innerText = somaTotalCompra.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
};

// Função para remover item
window.removerItem = function(index) {
    let carrinho = getCarrinho();
    carrinho.splice(index, 1);
    salvarCarrinho(carrinho);
    renderizarCarrinhoCompleto();
};

window.addEventListener('DOMContentLoaded', () => {
    atualizarIcones();
    renderizarCarrinhoCompleto();
});