import fs from 'node:fs';
import path from 'node:path';

// --- LÓGICA DE RESOLUÇÃO AUTOMÁTICA DE EXTENSÃO ---
const resolveImg = (pathNoExt) => {
  if (!pathNoExt || pathNoExt.startsWith('http')) return pathNoExt;

  const extensions = ['.png', '.jpg', '.jpeg', '.webp', '.avif', '.PNG', '.JPG'];
  const absolutePath = path.join(process.cwd(), 'public', pathNoExt);

  for (const ext of extensions) {
    if (fs.existsSync(absolutePath + ext)) {
      return pathNoExt + ext;
    }
  }

  // Se não achar, mantém o original (fallback)
  return pathNoExt; 
};

// Função para processar os dados recursivamente
const processData = (data) => {
  return data.map(cat => ({
    ...cat,
    items: cat.items.map(item => ({
      ...item,
      img: resolveImg(item.img),
      images: item.images ? item.images.map(img => resolveImg(img)) : [],
      variants: item.variants ? item.variants.map(v => ({ ...v, img: resolveImg(v.img) })) : []
    }))
  }));
};

// --- DADOS BRUTOS (TODOS OS PRODUTOS PRESERVADOS) ---
const rawData = [
  {
    id: 'ganchos',
    nome: 'Ganchos',
    banner: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80',
    items: [
      {
        slug: 'gancho-canaletado',
        nome: 'Gancho para Painel Canaletado',
        codigo: 'GPC-V',
        img: '/midia/gancho/canaletado/gancho-canaletado-30cm-zincado',
        variants: [
          // ZINCADOS
          { cor: 'ZINCADO', tamanho: '05 CM', price: 1.34, img: '/midia/gancho/canaletado/gancho-canaletado-05cm-zincado' },
          { cor: 'ZINCADO', tamanho: '10 CM', price: 1.34, img: '/midia/gancho/canaletado/gancho-canaletado-10cm-zincado' },
          { cor: 'ZINCADO', tamanho: '15 CM', price: 1.34, img: '/midia/gancho/canaletado/gancho-canaletado-15cm-zincado' },
          { cor: 'ZINCADO', tamanho: '20 CM', price: 1.34, img: '/midia/gancho/canaletado/gancho-canaletado-15cm-zincado' },
          { cor: 'ZINCADO', tamanho: '25 CM', price: 1.34, img: '/midia/gancho/canaletado/gancho-canaletado-25cm-zincado' },
          { cor: 'ZINCADO', tamanho: '30 CM', price: 1.45, img: '/midia/gancho/canaletado/gancho-canaletado-30cm-zincado' },
          // BRANCOS
          { cor: 'BRANCO', tamanho: '05 CM', price: 1.50, img: '/midia/gancho/canaletado/gancho-canaletado-05cm-branco' },
          { cor: 'BRANCO', tamanho: '10 CM', price: 1.50, img: '/midia/gancho/canaletado/gancho-canaletado-10cm-branco' },
          { cor: 'BRANCO', tamanho: '15 CM', price: 1.50, img: '/midia/gancho/canaletado/gancho-canaletado-15cm-branco' },
          { cor: 'BRANCO', tamanho: '20 CM', price: 1.50, img: '/midia/gancho/canaletado/gancho-canaletado-15cm-branco' },
          { cor: 'BRANCO', tamanho: '25 CM', price: 1.50, img: '/midia/gancho/canaletado/gancho-canaletado-25cm-branco' },
          { cor: 'BRANCO', tamanho: '30 CM', price: 1.65, img: '/midia/gancho/canaletado/gancho-canaletado-25cm-branco' },
          // PRETOS
          { cor: 'PRETO', tamanho: '05 CM', price: 1.50, img: '/midia/gancho/canaletado/gancho-canaletado-05cm-preto' },
          { cor: 'PRETO', tamanho: '10 CM', price: 1.50, img: '/midia/gancho/canaletado/gancho-canaletado-10cm-preto' },
          { cor: 'PRETO', tamanho: '15 CM', price: 1.50, img: '/midia/gancho/canaletado/gancho-canaletado-15cm-preto' },
          { cor: 'PRETO', tamanho: '20 CM', price: 1.50, img: '/midia/gancho/canaletado/gancho-canaletado-15cm-preto' },
          { cor: 'PRETO', tamanho: '25 CM', price: 1.50, img: '/midia/gancho/canaletado/gancho-canaletado-25cm-preto' },
          { cor: 'PRETO', tamanho: '30 CM', price: 1.65, img: '/midia/gancho/canaletado/gancho-canaletado-30cm-preto' },
          // CROMADOS
          { cor: 'CROMADO', tamanho: '05 CM', price: 1.80, img: '/midia/gancho/canaletado/gancho-canaletado-05cm-zincado' },
          { cor: 'CROMADO', tamanho: '10 CM', price: 1.80, img: '/midia/gancho/canaletado/gancho-canaletado-30cm-zincado' },
          { cor: 'CROMADO', tamanho: '15 CM', price: 1.80, img: '/midia/gancho/canaletado/gancho-canaletado-05cm-zincado' },
          { cor: 'CROMADO', tamanho: '20 CM', price: 1.80, img: '/midia/gancho/canaletado/gancho-canaletado-30cm-zincado' },
          { cor: 'CROMADO', tamanho: '25 CM', price: 1.80, img: '/midia/gancho/canaletado/gancho-canaletado-05cm-zincado' },
          { cor: 'CROMADO', tamanho: '30 CM', price: 1.95, img: '/midia/gancho/canaletado/gancho-canaletado-30cm-zincado' },
        ]
      },
      {
        slug: 'gancho-barra-6mm',
        nome: 'Gancho para Barra de Gôndola 6mm',
        codigo: 'GPB-6MM',
        img: '/midia/gancho/gancho-gondola/gancho-6mm-40cm-preto',
        variants: [
          { cor: 'BRANCO', tamanho: '20 CM', price: 2.00, img: '/midia/gancho/gancho-gondola/gancho-6mm-20cm-branco' },
          { cor: 'PRETO', tamanho: '20 CM', price: 2.00, img: '/midia/gancho/gancho-gondola/gancho-6mm-20cm-preto' },
          { cor: 'BRANCO', tamanho: '25 CM', price: 2.45, img: '/midia/gancho/gancho-gondola/gancho-6mm-25cm-branco' },
          { cor: 'PRETO', tamanho: '25 CM', price: 2.45, img: '/midia/gancho/gancho-gondola/gancho-6mm-25cm-preto' },
          { cor: 'BRANCO', tamanho: '30 CM', price: 2.90, img: '/midia/gancho/gancho-gondola/gancho-6mm-30cm-branco' },
          { cor: 'PRETO', tamanho: '30 CM', price: 2.90, img: '/midia/gancho/gancho-gondola/gancho-6mm-30cm-preto' },
          { cor: 'BRANCO', tamanho: '35 CM', price: 4.60, img: '/midia/gancho/gancho-gondola/gancho-6mm-35cm-branco' },
          { cor: 'PRETO', tamanho: '35 CM', price: 4.60, img: '/midia/gancho/gancho-gondola/gancho-6mm-35cm-preto' },
          { cor: 'BRANCO', tamanho: '40 CM', price: 5.20, img: '/midia/gancho/gancho-gondola/gancho-6mm-40cm-branco' },
          { cor: 'PRETO', tamanho: '40 CM', price: 5.20, img: '/midia/gancho/gancho-gondola/gancho-6mm-40cm-preto' },
        ]
      },
      {
        slug: 'gancho-barra-4-40mm',
        nome: 'Gancho para Barra de Gôndola 4.40mm',
        codigo: 'GPB-440',
        img: '/midia/gancho/gancho-gondola/gancho-440mm-25cm-prateado',
        variants: [
          { cor: 'BRANCO', tamanho: '15 CM', price: 2.10, img: '/midia/gancho/gancho-gondola/gancho-canaletado-15cm-440mm-branco' },
          { cor: 'PRETO', tamanho: '15 CM', price: 2.10, img: '/midia/gancho/gancho-gondola/gancho-canaletado-15cm-440mm-preto' },
          { cor: 'BRANCO', tamanho: '20 CM', price: 2.50, img: '/midia/gancho/gancho-gondola/gancho-canaletado-20cm-440mm-branco' },
          { cor: 'PRETO', tamanho: '20 CM', price: 2.50, img: '/midia/gancho/gancho-gondola/gancho-canaletado-20cm-440mm-preto' },
          { cor: 'BRANCO', tamanho: '25 CM', price: 2.80, img: '/midia/gancho/gancho-gondola/gancho-440mm-25cm-prateado' },
          { cor: 'PRETO', tamanho: '25 CM', price: 2.80, img: '/midia/gancho/gancho-gondola/gancho-440mm-25cm-prateado' },
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
        img: '/midia/barra-expositora/barra-gondola-branca',
        variants: [
          { cor: 'BRANCO', tamanho: '100 CM', price: 35.00, img: '/midia/barra-expositora/barra-gondola-branca' },
          { cor: 'BRANCO', tamanho: '120 CM', price: 40.00, img: '/midia/barra-expositora/barra-gondola-branca' },
          { cor: 'BRANCO', tamanho: '150 CM', price: 45.00, img: '/midia/barra-expositora/barra-gondola-branca' },
          { cor: 'PRETO', tamanho: '100 CM', price: 35.00, img: '/midia/barra-expositora/barra-gondola-preta' },
          { cor: 'PRETO', tamanho: '120 CM', price: 40.00, img: '/midia/barra-expositora/barra-gondola-preta' },
          { cor: 'PRETO', tamanho: '150 CM', price: 45.00, img: '/midia/barra-expositora/barra-gondola-preta' },
        ]
      }
    ]
  },
  {
    id: 'suportes',
    nome: 'Suportes',
    banner: 'https://images.unsplash.com/photo-1581094794329-c8112a4e5190?auto=format&fit=crop&q=80',
    items: [
      {
        slug: 'suporte-expositor-facas', 
        nome: '[MOSTRUÁRIO] Suporte Expositor para Facas',
        codigo: 'SUP-001',
        img: '/midia/suportes/suporte-faca',
        variants: [
          { cor: 'PADRÃO', tamanho: 'MODELO', price: 15.00, img: '/midia/suportes/suporte-faca' }
        ]
      }
    ]
  },
  {
    id: 'gondolas',
    nome: 'Gôndolas',
    banner: 'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&q=80',
    items: [
      {
        slug: 'estantes-planejadas',
        nome: 'Estantes Planejadas',
        codigo: 'GON-EST',
        img: '/midia/gondolas/estantes-planejadas/estante-planejada-1',
        images: [
          '/midia/gondolas/estantes-planejadas/estante-industrial-planejada',
          '/midia/gondolas/estantes-planejadas/estante-industrial-planejada-1',
          '/midia/gondolas/estantes-planejadas/estante-parede',
          '/midia/gondolas/estantes-planejadas/estante-parede-2',
          '/midia/gondolas/estantes-planejadas/estante-parede-3',
          '/midia/gondolas/estantes-planejadas/estante-parede-4',
          '/midia/gondolas/estantes-planejadas/estante-planejada-1',
          '/midia/gondolas/estantes-planejadas/estante-suspensa',
          '/midia/gondolas/estantes-planejadas/estante-suspensa-1'
        ],
        variants: []
      },
      {
        slug: 'gondolas-planejadas',
        nome: 'Gôndolas Planejadas',
        codigo: 'GON-CEN',
        img: '/midia/gondolas/gondolas-planejadas/gondola-1',
        images: [
          '/midia/gondolas/gondolas-planejadas/gondola-1',
          '/midia/gondolas/gondolas-planejadas/gondola-2',
          '/midia/gondolas/gondolas-planejadas/gondola-expositora',
          '/midia/gondolas/gondolas-planejadas/gondola-expositora-1',
          '/midia/gondolas/gondolas-planejadas/gondola-expositora-2',
          '/midia/gondolas/gondolas-planejadas/gondola-expositora-3',
          '/midia/gondolas/gondolas-planejadas/gondolas'
        ],
        variants: []
      },
      {
        slug: 'mesas-planejadas',
        nome: 'Mesas Planejadas',
        codigo: 'GON-MIX',
        img: '/midia/gondolas/mesas-planejadas/mesa-planejada',
        images: [
          '/midia/gondolas/mesas-planejadas/mesa-planejada',
          '/midia/gondolas/mesas-planejadas/mesa-planejada-1',
          '/midia/gondolas/mesas-planejadas/mesa-planejada-2',
          '/midia/gondolas/mesas-planejadas/mesa-planejada-3',
        ],
        variants: []
      }
    ]
  },
  {
    id: 'balcoes',
    nome: 'Balcões de Vidro',
    banner: 'https://images.unsplash.com/photo-1604713503825-e64938d29738?auto=format&fit=crop&q=80',
    items: [
      {
        slug: 'balcao-modular-expositor-longo',
        nome: 'Balcão Modular de Vidro (Longo)',
        codigo: 'BAL-01',
        img: '/midia/balcoes-modulares-vidro/balcao-modular',
        images: ['/midia/balcoes-modulares-vidro/balcao-modular'],
        variants: [] 
      },
      {
        slug: 'balcao-vitrine-quadrado',
        nome: 'Balcão Vitrine Modular',
        codigo: 'BAL-02',
        img: '/midia/balcoes-modulares-vidro/balcao-modular-1',
        images: ['/midia/balcoes-modulares-vidro/balcao-modular-1'],
        variants: []
      },
      {
        slug: 'expositor-vidro-balcao-baixo',
        nome: 'Expositor de Vidro Baixo',
        codigo: 'BAL-03',
        img: '/midia/balcoes-modulares-vidro/balcao-modular-2',
        images: ['/midia/balcoes-modulares-vidro/balcao-modular-2'],
        variants: []
      }
    ]
  }
];

export const categorias = processData(rawData);