# Vision Solutions — Software House & SaaS Studio

Site institucional e plataforma interativa da **Vision Solutions**, especializada no desenvolvimento de ecossistemas SaaS verticais e engenharia de software sob medida para empresas.

**Live Demo:** [visionsolutionsbr.vercel.app](https://visionsolutionsbr.vercel.app)  
**Licença:** [MIT License](LICENSE)

---

## 🛠️ Stack Tecnológica

| Camada | Tecnologia | Descrição |
|---|---|---|
| **Framework** | Next.js 15 (App Router) | React Server Components, SSR e otimização de assets |
| **UI Runtime** | React 19 | Interface declarativa e reativa de altíssimo desempenho |
| **Linguagem** | TypeScript 5.7 (Strict Mode) | Tipagem estrita de ponta a ponta sem `any` implícito |
| **Estilos** | Tailwind CSS 3.4 & PostCSS | Tokens institucionais e utilitários otimizados |
| **3D / WebGL Engine** | Three.js | Motor 3D autoral orientada a objetos (sem dependência de R3F) |
| **Acessibilidade** | `use-reduced-motion` | Suporte a preferências do sistema para mobilidade reduzida |
| **Ícones** | Lucide React | Biblioteca de ícones vetoriais modernos |

---

## 📁 Estrutura de Diretórios da Nova Arquitetura

```text
empresa.site/
├── LICENSE                         # Licença MIT Open Source
├── README.md                       # Documentação técnica do projeto
├── next.config.ts                  # Configurações do Next.js 15
├── package.json                    # Scripts e dependências
├── postcss.config.js               # Pipeline PostCSS
├── tailwind.config.ts              # Tokens de cor e tipografia Tailwind
├── tsconfig.json                   # Configuração estrita do TypeScript
│
├── public/                         # Assets estáticos públicos (logos, ícones)
│
└── src/
    ├── app/                        # Next.js App Router
    │   ├── globals.css             # Variáveis CSS institucionais e resets
    │   ├── layout.tsx              # Root Layout, metadados e SEO
    │   ├── page.tsx                # Página principal (Home)
    │   ├── robots.ts               # Configuração estática do robots.txt
    │   └── sitemap.ts              # Geração dinâmica do sitemap.xml
    │
    ├── components/                 # Componentes da interface
    │   ├── 3d/                     # Motor WebGL 3D Orientado a Objetos (Three.js)
    │   │   ├── ConnectionLine.ts   # Conexões ópticas e linhas spline de energia
    │   │   ├── GlobalScene.tsx     # Mount do Canvas WebGL interativo
    │   │   ├── SystemModule.ts     # Módulos geométricos 3D e rotações
    │   │   └── VisionSystem.ts     # Orquestrador da cena, câmera e iluminação 3D
    │   │
    │   ├── layout/                 # Estruturas globais de layout
    │   │   ├── footer.tsx          # Rodapé institucional 4 colunas
    │   │   └── navbar.tsx          # Cabeçalho e navegação principal
    │   │
    │   └── sections/               # Seções da experiência do usuário
    │       └── hero-section.tsx    # Seção principal Hero com integração 3D
    │
    ├── data/                       # Dados institucionais estáticos tipados
    │   ├── contact.ts              # Canais de atendimento e localização
    │   └── saas-products.ts        # Catálogo de produtos (TorqueOS, SynDent, etc.)
    │
    └── lib/                        # Utilitários e hooks customizados
        └── use-reduced-motion.ts   # Hook para detecção de preferência de animação
```

---

## 🚀 Engenharia & Destaques da Arquitetura 3D

- **Motor 3D Modular Orientado a Objetos (`VisionSystem.ts`)**: O motor Three.js é encapsulado em classes bem definidas (`SystemModule`, `ConnectionLine`) para controle total de alocação de memória, ciclo de renderização e descarte de geometrias (*garbage collection*).
- **Desempenho 60 FPS & SSR-Safe**: Carregamento dinâmico sem erros de *hydration*, mantendo a aplicação leve com resposta fluida em múltiplos dispositivos.
- **Ecossistema Multi-SaaS**: Apresentação dos produtos proprietários:
  - **TorqueOS** — ERP Automotivo e Gestão de Oficinas
  - **SynDent** — Prontuário Clínico Odontológico
  - **BarberCRM** — Gestão e Agendamento para Barbearias
  - **DisparoFlow** — Automação de Comunicação
  - **AdvCargo** — Logística e Transportes

---

## 💻 Como Rodar o Projeto

```bash
# 1. Clonar o repositório
git clone https://github.com/VandinDev221/-Vision-Solutions.git

# 2. Entrar na pasta do projeto
cd empresa.site

# 3. Instalar as dependências
npm install

# 4. Executar em ambiente de desenvolvimento (Turbopack)
npm run dev

# 5. Gerar build de produção
npm run build

# 6. Iniciar servidor local de produção
npm start
```

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

© 2026 **Vision Solutions** — Software House & SaaS Studio.
