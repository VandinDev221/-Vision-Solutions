# Vision Solutions — Site Institucional

Site institucional da **Vision Solutions**, Software House & SaaS Studio especializada em plataformas SaaS verticais e sistemas empresariais sob medida.

**Deploy:** [visionsolutionsbr.vercel.app](https://visionsolutionsbr.vercel.app)

---

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 15 (App Router) |
| UI Runtime | React 19 |
| Linguagem | TypeScript (strict) |
| Estilos | Tailwind CSS 3.4 |
| 3D / WebGL | Three.js (puro, sem R3F) |
| Animação | Framer Motion |
| Icons | Lucide React |
| Deploy | Vercel |

---

## Estrutura do Projeto

```
empresa.site/
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── layout.tsx              # Root layout + metadata + JSON-LD
│   │   ├── page.tsx                # Home (todas as seções)
│   │   ├── globals.css             # CSS variables + tokens de design
│   │   ├── contato/page.tsx        # Página de contato
│   │   ├── produtos/page.tsx       # Portfólio de produtos SaaS
│   │   ├── servicos/page.tsx       # Serviços de desenvolvimento
│   │   ├── sobre/page.tsx          # Sobre a empresa
│   │   ├── tecnologia/page.tsx     # Stack tecnológica
│   │   ├── privacidade/page.tsx    # Política de privacidade
│   │   ├── termos/page.tsx         # Termos de uso
│   │   ├── admin/                  # Área administrativa (protegida)
│   │   ├── robots.ts               # robots.txt
│   │   └── sitemap.ts              # sitemap.xml
│   │
│   ├── components/
│   │   ├── 3d/                     # Engines WebGL (Three.js)
│   │   │   ├── GlobalScene.tsx     # Canvas fixo de fundo (toda a home)
│   │   │   ├── Hero3DStage.tsx     # Canvas interativo do hero (pilares, conduits, cards)
│   │   │   ├── PageScene3D.tsx     # Canvas reutilizável para headers de páginas internas
│   │   │   └── SceneWrapper.tsx    # Dynamic import SSR-safe do GlobalScene
│   │   │
│   │   ├── layout/
│   │   │   ├── navbar.tsx          # Navegação principal
│   │   │   └── footer.tsx          # Rodapé 4 colunas
│   │   │
│   │   ├── sections/               # Seções da home
│   │   │   ├── hero-section.tsx                    # Hero assimétrico com canvas 3D
│   │   │   ├── saas-showcase.tsx                   # Product Shelf (TorqueOS, SynDent...)
│   │   │   ├── monolith-architecture-section.tsx   # Diagrama de ecossistema VS
│   │   │   ├── complexity-transformation-section.tsx
│   │   │   ├── core-solutions-section.tsx
│   │   │   ├── custom-software-section.tsx
│   │   │   ├── process-section.tsx
│   │   │   ├── tech-stack-section.tsx
│   │   │   ├── principles-section.tsx
│   │   │   ├── contact-section.tsx
│   │   │   └── saas-detail-modal.tsx               # Modal de ficha técnica de produto
│   │   │
│   │   └── ui/                     # Componentes base
│   │       ├── logo.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── badge.tsx
│   │       └── modal.tsx
│   │
│   ├── data/                       # Dados estáticos tipados
│   │   ├── saas-products.ts        # Produtos: TorqueOS, SynDent, BarberCRM, DisparoFlow, AdvCargo
│   │   ├── contact.ts              # SITE_CONTACT com canais de atendimento
│   │   ├── services.ts             # Serviços de desenvolvimento
│   │   ├── company-stats.ts        # Métricas da empresa
│   │   └── testimonials.ts         # Depoimentos
│   │
│   └── lib/
│       ├── utils.ts                # cn() — clsx + tailwind-merge
│       ├── motion-tokens.ts        # Variantes de animação Framer Motion
│       └── admin-store.ts          # Estado da área admin
│
├── public/                         # Assets estáticos
├── tailwind.config.ts              # Paleta, border-radius, tipografia
├── tsconfig.json                   # TypeScript strict
├── next.config.ts                  # Next.js config
└── package.json
```

---

## Design System

### Paleta de Cores

| Token | Hex | Uso |
|---|---|---|
| `bg-base` | `#0B0E14` | Fundo principal |
| `bg-surface` | `#111622` | Cards e painéis |
| `bg-elevated` | `#161D2B` | Hover state / selecionado |
| `accent-blue` | `#2563EB` | CTA primário |
| `accent-sky` | `#38BDF8` | Acento secundário / 3D glow |
| `accent-emerald` | `#10B981` | Status positivo |
| `accent-purple` | `#A855F7` | Destaque alternativo |

### Tipografia

- **Sistema:** `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto`
- **Mono:** `ui-monospace, SFMono-Regular, Menlo`
- **Border-radius:** `4px` (sm), `6px` (md), `8px` (lg), `12px` (xl)

---

## Componentes 3D

### `GlobalScene.tsx`
Canvas Three.js fixo (`position: fixed`) como camada de fundo da home. Renderiza módulos geométricos orbitais conectados por conduits CatmullRom com partículas viajando. Opacity 30% para ser sutil. Reage ao scroll e ao mouse (parallax).

### `Hero3DStage.tsx`
Canvas interativo no painel direito do hero. Contém:
- 3 pilares metálicos com LED bands (azul/ciano/emerald)
- Engrenagens 3D rotacionando em direções opostas
- 3 cards 3D flutuantes interativos (clicáveis via Raycaster)
- Fiber-optic conduits (TubeGeometry) conectando engine aos cards
- Sparks viajando pelos conduits em tempo real
- Parallax suave ao mouse

### `PageScene3D.tsx`
Canvas Three.js reutilizável para headers das páginas internas. Variantes por página com paletas de acento diferentes. Sem overlays de texto. Renderiza formas geométricas flutuantes (cubes, octahedra, tetrahedra) com conduits e partículas.

**Variantes:**
- `produtos` — azul cobalto + ciano
- `servicos` — sky + indigo + emerald
- `sobre` — blue + purple + cyan
- `tecnologia` — cyan + blue + emerald
- `contato` — blue + sky + purple

---

## Produtos SaaS (dados reais)

| Produto | Categoria | Status |
|---|---|---|
| **TorqueOS** | ERP Automotivo | Em Produção |
| **SynDent** | SaaS Odontológico | Em Produção |
| **BarberCRM** | CRM Barbearias | Em Desenvolvimento |
| **DisparoFlow** | Automação de Mensagens | Em Desenvolvimento |
| **AdvCargo** | Gestão de Transportadoras | Em Desenvolvimento |

---

## Rodando Localmente

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento (Turbopack)
npm run dev

# Build de produção
npm run build

# Iniciar produção local
npm start
```

Abrir [http://localhost:3000](http://localhost:3000)

---

## Deploy

O projeto faz deploy automático na **Vercel** a cada push na branch `main`.

```bash
git add .
git commit -m "feat: descrição da mudança"
git push origin main
```

---

## Decisões de Arquitetura

**Por que Three.js puro (sem React Three Fiber)?**
Controle total sobre o ciclo de vida do renderer WebGL, disposal de geometrias e integração com eventos DOM nativos. Mais previsível para múltiplos canvas coexistindo na mesma página.

**Por que `dynamic()` com `ssr: false` nos canvas 3D?**
Three.js acessa `window` e `document` durante a inicialização — incompatível com SSR do Next.js. O `dynamic()` garante que o componente só monta no client, evitando erros de hydration.

**Por que App Router e não Pages Router?**
Next.js 15 recomenda App Router para novos projetos. Permite Server Components, layouts aninhados e melhor performance de carregamento.

---

## Licença

Código proprietário — © Vision Solutions. Todos os direitos reservados.
