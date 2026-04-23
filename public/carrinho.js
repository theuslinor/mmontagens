const CHAVE_CARRINHO = "mm_montagens_carrinho";

function getCarrinho() {
    return JSON.parse(localStorage.getItem(CHAVE_CARRINHO)) || [];
}

function salvarCarrinho(itens) {
    localStorage.setItem(CHAVE_CARRINHO, JSON.stringify(itens));
    if (typeof atualizarIcones === 'function') atualizarIcones();
}

window.adicionarComVariacaoInterna = function(slug, nome, codigo, img, qty, variacao, preco) {
    let carrinho = getCarrinho();
    const index = carrinho.findIndex(item => item.codigo === codigo && item.variacao === variacao);
    
    if (index > -1) {
        carrinho[index].qty += qty;
        carrinho[index].preco = preco; 
    } else {
        carrinho.push({ slug, nome, codigo, img, qty, variacao, preco });
    }
    salvarCarrinho(carrinho);
};

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

window.renderizarCarrinhoCompleto = function() {
    const itens = getCarrinho();
    const container = document.getElementById('lista-carrinho');
    const totalGeralElement = document.getElementById('total-geral-carrinho');
    const resumoProdutos = document.getElementById('resumo-total-produtos');
    const resumoPecas = document.getElementById('resumo-total-pecas');
    
    if (!container) return;

    let somaTotalCompra = 0;
    let totalPecas = 0;
    let temItensOrcamento = false;
    container.innerHTML = "";

    if (itens.length === 0) {
        document.getElementById('carrinho-conteudo')?.classList.add('hidden');
        document.getElementById('carrinho-vazio')?.classList.remove('hidden');
        return;
    }

    itens.forEach((item, index) => {
        const pNum = parseFloat(item.preco) || 0;
        const subtotal = pNum * item.qty;
        totalPecas += item.qty;

        let uTxt, sTxt, corClasse;

        if (pNum <= 0) {
            uTxt = "Sob Consulta";
            sTxt = "A Combinar";
            corClasse = "text-orange-500";
            temItensOrcamento = true;
        } else {
            uTxt = "R$ " + pNum.toFixed(2).replace('.', ',');
            sTxt = "R$ " + subtotal.toFixed(2).replace('.', ',');
            corClasse = "text-mm-blue";
            somaTotalCompra += subtotal;
        }

        container.innerHTML += `
            <div class="flex flex-col md:grid md:grid-cols-[1fr_120px_120px_60px] gap-4 p-4 md:p-6 border-b border-gray-100 items-center hover:bg-gray-50 transition">
                <div class="flex items-center gap-4 w-full">
                    <img src="${item.img}" class="w-16 h-16 object-contain bg-white border border-gray-100 rounded-lg p-2" />
                    <div>
                        <h4 class="font-black text-gray-900 leading-tight text-sm">${item.nome}</h4>
                        <p class="text-[10px] font-black text-gray-400 uppercase">${item.variacao}</p>
                        <p class="text-xs ${corClasse} font-black mt-1">Un: ${uTxt}</p>
                    </div>
                </div>
                <div class="flex items-center justify-center font-bold text-gray-600">x ${item.qty}</div>
                <div class="text-right font-black ${pNum <= 0 ? 'text-orange-500' : 'text-gray-900'} text-sm">${sTxt}</div>
                <div class="flex justify-center">
                    <button onclick="removerItem(${index})" class="text-gray-300 hover:text-red-500 transition-colors p-2">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            </div>`;
    });

    if (resumoProdutos) resumoProdutos.innerText = itens.length;
    if (resumoPecas) resumoPecas.innerText = totalPecas;
    
    if (totalGeralElement) {
        const totalFormatado = somaTotalCompra.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
        totalGeralElement.innerHTML = `R$ ${totalFormatado}${temItensOrcamento ? ' <span class="text-xs text-orange-500 block font-normal">+ itens a combinar</span>' : ''}`;
    }
};

window.removerItem = function(index) {
    let carrinho = getCarrinho();
    carrinho.splice(index, 1);
    salvarCarrinho(carrinho);
    renderizarCarrinhoCompleto();
};

window.enviarParaWhatsApp = function() {
    const btn = document.querySelector('button[onclick="enviarParaWhatsApp()"]');
    const itens = getCarrinho();
    if (itens.length === 0) return;

    const originalContent = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = `<i class="fas fa-spinner fa-spin text-2xl"></i> Processando...`;

    setTimeout(() => {
        let texto = "Olá, MM Montagens! Gostaria de solicitar um orçamento:%0A%0A";
        let somaFinal = 0;
        let possuiACombinar = false;

        itens.forEach(i => {
            const p = parseFloat(i.preco) || 0;
            const sub = p * i.qty;
            let uStr, sStr;

            if (p <= 0) {
                uStr = "A COMBINAR";
                sStr = "A COMBINAR";
                possuiACombinar = true;
            } else {
                uStr = "R$ " + p.toFixed(2).replace('.', ',');
                sStr = "R$ " + sub.toFixed(2).replace('.', ',');
                somaFinal += sub;
            }

            texto += `*${i.qty}x ${i.nome}*%0A`;
            texto += `Opção: ${i.variacao}%0A`;
            texto += `UN: ${uStr} | *SUBTOTAL: ${sStr}*%0A%0A`;
        });

        texto += "---------------------------------%0A";
        
        let valorTotalMsg = somaFinal > 0 ? "R$ " + somaFinal.toFixed(2).replace('.', ',') : "A COMBINAR";
        if (somaFinal > 0 && possuiACombinar) valorTotalMsg += " (Mais itens a combinar)";

        texto += `*VALOR TOTAL ESTIMADO: ${valorTotalMsg}*%0A%0A`;
        texto += "Aguardamos o retorno com as condições de frete e faturamento.";

        window.open(`https://wa.me/5511915287830?text=${texto}`, "_blank");

        btn.disabled = false;
        btn.innerHTML = originalContent;
    }, 500);
};

window.addEventListener('DOMContentLoaded', () => {
    atualizarIcones();
    renderizarCarrinhoCompleto();
});