// src/data/produtos.js
export const categorias = [
  {
    id: 'ganchos',
    nome: 'Ganchos',
    banner: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80',
    items: [
      {
        slug: 'gancho-canaletado',
        nome: 'Gancho para Painel Canaletado',
        codigo: 'GPC-V',
        img: '/midia/gancho/canaletado/gancho-canaletado-30cm-zincado.jpeg',
        variants: [
          // ZINCADOS
          { cor: 'ZINCADO', tamanho: '05 CM', price: 1.34, img: '/midia/gancho/canaletado/gancho-canaletado-05cm-zincado.jpeg' },
          { cor: 'ZINCADO', tamanho: '10 CM', price: 1.34, img: '/midia/gancho/canaletado/gancho-canaletado-10cm-zincado.png' },
          { cor: 'ZINCADO', tamanho: '15 CM', price: 1.34, img: '/midia/gancho/canaletado/gancho-canaletado-15cm-zincado.png' },
          { cor: 'ZINCADO', tamanho: '20 CM', price: 1.34, img: '/midia/gancho/canaletado/gancho-canaletado-15cm-zincado.png' },
          { cor: 'ZINCADO', tamanho: '25 CM', price: 1.34, img: '/midia/gancho/canaletado/gancho-canaletado-25cm-zincado.png' },
          { cor: 'ZINCADO', tamanho: '30 CM', price: 1.45, img: '/midia/gancho/canaletado/gancho-canaletado-30cm-zincado.png' },
          
          // BRANCOS
          { cor: 'BRANCO', tamanho: '05 CM', price: 1.50, img: '/midia/gancho/canaletado/gancho-canaletado-05cm-branco.png' },
          { cor: 'BRANCO', tamanho: '10 CM', price: 1.50, img: '/midia/gancho/canaletado/gancho-canaletado-10cm-branco.png' },
          { cor: 'BRANCO', tamanho: '15 CM', price: 1.50, img: '/midia/gancho/canaletado/gancho-canaletado-15cm-branco.png' },
          { cor: 'BRANCO', tamanho: '20 CM', price: 1.50, img: '/midia/gancho/canaletado/gancho-canaletado-15cm-branco.png' },
          { cor: 'BRANCO', tamanho: '25 CM', price: 1.50, img: '/midia/gancho/canaletado/gancho-canaletado-25cm-branco.png' },
          { cor: 'BRANCO', tamanho: '30 CM', price: 1.65, img: '/midia/gancho/canaletado/gancho-canaletado-25cm-branco.png' },

          // PRETOS
          { cor: 'PRETO', tamanho: '05 CM', price: 1.50, img: '/midia/gancho/canaletado/gancho-canaletado-05cm-preto.png' },
          { cor: 'PRETO', tamanho: '10 CM', price: 1.50, img: '/midia/gancho/canaletado/gancho-canaletado-10cm-preto.png' },
          { cor: 'PRETO', tamanho: '15 CM', price: 1.50, img: '/midia/gancho/canaletado/gancho-canaletado-15cm-preto.png' },
          { cor: 'PRETO', tamanho: '20 CM', price: 1.50, img: '/midia/gancho/canaletado/gancho-canaletado-15cm-preto.png' },
          { cor: 'PRETO', tamanho: '25 CM', price: 1.50, img: '/midia/gancho/canaletado/gancho-canaletado-25cm-preto.png' },
          { cor: 'PRETO', tamanho: '30 CM', price: 1.65, img: '/midia/gancho/canaletado/gancho-canaletado-30cm-preto.png' },

          // CROMADOS
          { cor: 'CROMADO', tamanho: '05 CM', price: 1.80, img: '/midia/gancho/canaletado/gancho-canaletado-05cm-zincado.png' },
          { cor: 'CROMADO', tamanho: '10 CM', price: 1.80, img: '/midia/gancho/canaletado/gancho-canaletado-30cm-zincado.png' },
          { cor: 'CROMADO', tamanho: '15 CM', price: 1.80, img: '/midia/gancho/canaletado/gancho-canaletado-05cm-zincado.png' },
          { cor: 'CROMADO', tamanho: '20 CM', price: 1.80, img: '/midia/gancho/canaletado/gancho-canaletado-30cm-zincado.png' },
          { cor: 'CROMADO', tamanho: '25 CM', price: 1.80, img: '/midia/gancho/canaletado/gancho-canaletado-05cm-zincado.png' },
          { cor: 'CROMADO', tamanho: '30 CM', price: 1.95, img: '/midia/gancho/canaletado/gancho-canaletado-30cm-zincado.png' },
        ]
      },
      {
        slug: 'gancho-barra-6mm',
        nome: 'Gancho para Barra de Gôndola 6mm',
        codigo: 'GPB-6MM',
        img: '/midia/gancho/gancho-gondola/gancho-barra-branco-fundo-branco.png',
        variants: [
          { cor: 'PINTADO 6mm', tamanho: '20 CM', price: 2.00, img: '/midia/gancho/gancho-gondola/gancho-barra-branco-fundo-branco.png' },
          { cor: 'PINTADO 6mm', tamanho: '25 CM', price: 2.45, img: '/midia/gancho/gancho-gondola/gancho-barra-branco-fundo-branco.png' },
          { cor: 'PINTADO 6mm', tamanho: '30 CM', price: 2.90, img: '/midia/gancho/gancho-gondola/gancho-barra-branco-fundo-branco.png' },
          { cor: 'PINTADO 6mm', tamanho: '35 CM', price: 4.60, img: '/midia/gancho/gancho-gondola/gancho-barra-branco-fundo-branco.png' },
          { cor: 'PINTADO 6mm', tamanho: '40 CM', price: 5.20, img: '/midia/gancho/gancho-gondola/gancho-barra-branco-fundo-branco.png' },
        ]
      },
      {
        slug: 'gancho-barra-4-40mm',
        nome: 'Gancho para Barra de Gôndola 4.40mm',
        codigo: 'GPB-440',
        img: '/midia/gancho/gancho-gondola/gancho-barra-preto-fundo-branco.png',
        variants: [
          { cor: 'PINTADO 4.40mm', tamanho: '15 CM', price: 2.10, img: '/midia/gancho/gancho-gondola/gancho-barra-preto-fundo-branco.png' },
          { cor: 'PINTADO 4.40mm', tamanho: '20 CM', price: 2.50, img: '/midia/gancho/gancho-gondola/gancho-barra-preto-fundo-branco.png' },
          { cor: 'PINTADO 4.40mm', tamanho: '25 CM', price: 2.80, img: '/midia/gancho/gancho-gondola/gancho-barra-preto-fundo-branco.png' },
        ]
      }
    ]
  },
  {
    id: 'barras',
    nome: 'Barras',
    banner: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80',
    items: [
      {
        slug: 'barra-expositora',
        nome: 'Barra Expositora',
        codigo: 'BAR-V',
        img: '/midia/barra-expositora/barra-gondola-branca.png',
        variants: [
          // BRANCAS
          { cor: 'BRANCO', tamanho: '100 CM', price: 35.00, img: '/midia/barra-expositora/barra-gondola-branca.png' },
          { cor: 'BRANCO', tamanho: '120 CM', price: 40.00, img: '/midia/barra-expositora/barra-gondola-branca.png' },
          { cor: 'BRANCO', tamanho: '150 CM', price: 45.00, img: '/midia/barra-expositora/barra-gondola-branca.png' },
          
          // PRETAS
          { cor: 'PRETO', tamanho: '100 CM', price: 35.00, img: '/midia/barra-expositora/barra-gondola-preta.png' },
          { cor: 'PRETO', tamanho: '120 CM', price: 40.00, img: '/midia/barra-expositora/barra-gondola-preta.png' },
          { cor: 'PRETO', tamanho: '150 CM', price: 45.00, img: '/midia/barra-expositora/barra-gondola-preta.png' },
        ]
      },
    ]
  },
  {
    id: 'suportes',
    nome: 'Suportes',
    banner: 'https://images.unsplash.com/photo-1581094794329-c8112a4e5190?auto=format&fit=crop&q=80',
    items: [
      {
        // ESSE CARA AQUI TEM QUE SER IGUAL AO QUE VOCÊ DIGITA NA URL
        slug: 'suporte-expositor-facas', 
        nome: 'Suporte Expositor para Facas',
        codigo: 'SUP-001',
        img: '/midia/suportes/suporte-faca.jpeg',
        variants: [
          { cor: 'PADRÃO', tamanho: 'MODELO', price: 15.00, img: '/midia/suportes/suporte-faca.jpeg' }
        ]
      }
    ]
  }
];