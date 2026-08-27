export interface SaaSProduct {
  id: string;
  name: string;
  tagline: string;
  category: "odontologia" | "barbearia" | "automotivo" | "marketing" | "juridico" | "financas" | "consumidor" | "analytics";
  categoryLabel: string;
  status: "Produção Active" | "Piloto Fechado" | "Enterprise SaaS" | "Lançamento";
  statusColor: string;
  description: string;
  longDescription: string;
  metrics: { label: string; value: string }[];
  features: string[];
  techStack: string[];
  targetAudience: string;
  badge: string;
  demoUrl?: string;
  gradient: string;
  iconName: string;
}

export const saasProducts: SaaSProduct[] = [
  {
    id: "syndent",
    name: "SynDent",
    tagline: "SaaS Profissional de Gestão & Prontuário Odontológico Clean Architecture",
    category: "odontologia",
    categoryLabel: "Saúde & Odontologia",
    status: "Piloto Fechado",
    statusColor: "emerald",
    badge: "Multi-Tenant Enterprise",
    description: "Plataforma completa para clínicas odontológicas com odontogramas interativos, agendamento inteligente, prontuário digital e faturamento automático.",
    longDescription: "O SynDent foi construído para transformar a gestão de clínicas e consultórios dentários. Com arquitetura multi-tenant isolada e resiliente, conta com prontuário eletrônico complacente com normas de saúde, odontograma gráfico 2D/3D, controle financeiro de procedimentos, integração com envio de confirmações e gestão de convênios.",
    metrics: [
      { label: "Redução de Faltas", value: "-45%" },
      { label: "Eficiência de Agenda", value: "+3.5x" },
      { label: "Clínicas no Piloto", value: "5 Clínicas" }
    ],
    features: [
      "Prontuário Odontológico Digital e Histórico de Anamnese",
      "Odontograma Gráfico com Status de Procedimentos em Tempo Real",
      "Agenda Inteligente com Lembretes via WhatsApp",
      "Faturamento por Procedimento e Gestão de Dentistas parceiros",
      "Arquitetura Clean Architecture isolada com Fastify & Next.js 15",
      "Storage de exames radiográficos e fotos via MinIO/S3"
    ],
    techStack: ["Next.js 15", "React 19", "Fastify", "Prisma", "PostgreSQL", "BullMQ", "MinIO"],
    targetAudience: "Clínicas odontológicas, consultórios particulares e redes de franquia odontológica.",
    gradient: "from-cyan-500/20 via-blue-500/10 to-indigo-500/20",
    iconName: "Stethoscope"
  },
  {
    id: "barbercrm",
    name: "BarberCRM",
    tagline: "CRM & Sistema de Agendamento Online para Barbeiros e Salões",
    category: "barbearia",
    categoryLabel: "Beleza & Serviços",
    status: "Produção Active",
    statusColor: "indigo",
    badge: "Pronto para Aluguel & SaaS",
    description: "Sistema web com link público de agendamento, confirmação automática via WhatsApp, clube de fidelidade e financeiro integrado.",
    longDescription: "Solução pensada para o dia a dia de barbeiros autônomos e barbearias multi-cadeiras. Permite agendamentos 24/7 sem intervenção humana, envio automatizado de parabéns e lembretes de retorno, controle de estoque de produtos, painel VIP de clientes e integração de pagamentos recorrentes com Stripe.",
    metrics: [
      { label: "Agendamentos Automáticos", value: "85%" },
      { label: "Clientes Fidelizados", value: "+2.4k" },
      { label: "Uptime da Plataforma", value: "99.9%" }
    ],
    features: [
      "Link público exclusivo de agendamento (/agendar) personalizável",
      "Notificação automática via WhatsApp na confirmação do agendamento",
      "Mensagens automáticas de Aniversário e Reengajamento (30 dias inativo)",
      "Sistema de Pontos e Fidelização de Clientes VIP",
      "Gestão de Estoque com alertas de produto mínimo",
      "Assinaturas e Pagamento online integrados via Stripe Checkout"
    ],
    techStack: ["Next.js 14/15", "NestJS", "PostgreSQL", "Prisma", "Stripe API", "Evolution API"],
    targetAudience: "Barbeiros autônomos, barbearias premium, salões de beleza e estúdios de estética.",
    gradient: "from-amber-500/20 via-orange-500/10 to-red-500/20",
    iconName: "Scissors"
  },
  {
    id: "torqueos",
    name: "TorqueOS",
    tagline: "ERP SaaS & Desktop Multi-empresa para Oficinas Automotivas e Autocenters",
    category: "automotivo",
    categoryLabel: "Setor Automotivo",
    status: "Enterprise SaaS",
    statusColor: "cyan",
    badge: "Web & Desktop Electron",
    description: "Gestão completa de Ordens de Serviço, estoque de peças automotivas, controle de pátio e app instalado nos computadores de balcão.",
    longDescription: "TorqueOS é o sistema operacional definitivo para autocenters e mecânicas modernas. Combina uma plataforma web em nuvem com um aplicativo desktop nativo de altíssimo desempenho (Electron) para operação offline/local no balcão da oficina, com emissão rápida de OS, checklist com fotos do veículo e orçamentos em tempo real.",
    metrics: [
      { label: "Agilidade no Balcão", value: "4x mais rápido" },
      { label: "Peças Catalogadas", value: "+50.000" },
      { label: "Disponibilidade", value: "Web & Offline Desktop" }
    ],
    features: [
      "Emissão e acompanhamento de Ordens de Serviço em tempo real",
      "App Desktop Nativo (TorqueOS-Setup.exe) para computadores de balcão",
      "Gestão de Estoque de peças com busca rápida por código/aplicação",
      "Checklist de entrada de veículo com upload de fotos e estado",
      "Gestão de pátio, mecânicos e comissões por serviço executado",
      "Monorepo de alta escala (pnpm + Turborepo + NestJS + Redis)"
    ],
    techStack: ["Next.js 15", "NestJS", "Electron", "Prisma", "Redis", "BullMQ", "PostgreSQL"],
    targetAudience: "Oficinas mecânicas, centros automotivos, lojas de auto peças e funilarias.",
    gradient: "from-blue-600/20 via-cyan-500/10 to-teal-500/20",
    iconName: "Wrench"
  },
  {
    id: "disparoflow",
    name: "DisparoFlow",
    tagline: "Plataforma Enterprise de Mensageria, Aquecimento de Chips por IA & Tracking",
    category: "marketing",
    categoryLabel: "Marketing & WhatsApp",
    status: "Enterprise SaaS",
    statusColor: "emerald",
    badge: "Escala Massiva (NATS & BullMQ)",
    description: "Motor distribuído para disparos em massa no WhatsApp com aquecimento inteligente de números, rastreamento de links e análise de conversão.",
    longDescription: "Plataforma de alta volumetria projetada para empresas que dependem de prospecção e engajamento via WhatsApp. Inclui microsserviços dedicados para aquecimento automatizado de chips de telefonia por IA (simulação de comportamento humano e conversa realista), tracking de conversão de links e balanceamento de carga entre múltiplos chips.",
    metrics: [
      { label: "Disparos/Dia", value: "+500.000" },
      { label: "Taxa de Retenção de Chips", value: "98.2%" },
      { label: "Microsserviços Activos", value: "10 Services" }
    ],
    features: [
      "Aquecimento de Chips WhatsApp alimentado por Engine de IA Comportamental",
      "Filas de Mensageria de Alta Disponibilidade (NATS JetStream + BullMQ)",
      "Tracking de Cliques e Links Rastreáveis com atribuição de conversão",
      "Segmentação avançada de listas e criação de templates dinâmicos",
      "Dashboard em tempo real com métricas de entrega, leitura e resposta",
      "Arquitetura de microsserviços escalável em Kubernetes/Docker"
    ],
    techStack: ["NestJS", "Next.js 15", "NATS JetStream", "BullMQ", "Redis", "Evolution API", "PostgreSQL"],
    targetAudience: "Agências de marketing, equipes de vendas B2B, e-commerces e operações de disparo em massa.",
    gradient: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
    iconName: "Send"
  },
  {
    id: "advcargo",
    name: "AdvCargo",
    tagline: "Sistema de Gestão Jurídica para Advogados e Escritórios de Advocacia",
    category: "juridico",
    categoryLabel: "Setor Jurídico",
    status: "Produção Active",
    statusColor: "violet",
    badge: "Segurança HTTPS Rigorosa",
    description: "Gestão inteligente de processos judiciais, prazos processuais, agenda de audiências, cadastro de clientes e finanças de honorários.",
    longDescription: "Criado especificamente para advogados autônomos e bancas de advocacia. O AdvCargo simplifica a rotina jurídica automatizando o controle de prazos fatais, organização de pastas de processos por cliente, lançamento de honorários contratuais e sucumbenciais e geração de relatórios gerenciais com segurança bancária.",
    metrics: [
      { label: "Zero Prazos Perdidos", value: "100% Notificado" },
      { label: "Economia de Tempo", value: "12h/semana" },
      { label: "Criptografia & HTTPS", value: "HSTS Ativo" }
    ],
    features: [
      "Controle e alerta de prazos processuais com cálculo automático",
      "Gestão de Processos Judiciais e Pastas Digitais de Clientes",
      "Agenda de Audiências e Reuniões sincronizada",
      "Módulo Financeiro para Honorários, Custas e Sucumbência",
      "Aplicativo PWA para acesso rápido pelo celular do advogado",
      "Segurança avançada com HTTPS obrigatório e HSTS"
    ],
    techStack: ["React 18", "Node.js", "Express", "Prisma", "PostgreSQL", "Tailwind CSS", "PWA"],
    targetAudience: "Advogados autônomos, escritórios de advocacia e departamentos jurídicos corporativos.",
    gradient: "from-violet-500/20 via-purple-500/10 to-indigo-500/20",
    iconName: "Scale"
  },
  {
    id: "esperaai",
    name: "EsperaAí",
    tagline: "Plataforma Inteligente de Histórico de Preços e Recomendação de Compra",
    category: "consumidor",
    categoryLabel: "Consumidor & E-commerce",
    status: "Lançamento",
    statusColor: "cyan",
    badge: "Smart Buy Engine",
    description: "Monitore a variação de preço de eletrônicos e produtos desejados com alertas inteligentes para nunca pagar mais caro.",
    longDescription: "Com a filosofia 'Nunca descubra depois que ficou mais barato', o EsperaAí analisa continuamente gráficos históricos de preços de grandes e-commerces. Através de algoritmos estatísticos, indica o momento exato de comprar um produto ou se vale a pena esperar por uma queda iminente.",
    metrics: [
      { label: "Economia Média", value: "22%" },
      { label: "Produtos Monitorados", value: "+100.000" },
      { label: "Alertas Disparados", value: "Instantâneo" }
    ],
    features: [
      "Algoritmo de recomendação de compra (Compre Agora vs. Espere)",
      "Gráficos interativos de histórico de preços de 30 a 365 dias",
      "Scraper de alta frequência em background gerenciado por BullMQ & Redis",
      "Alertas personalizados via WhatsApp e Email quando atinge o preço alvo",
      "Interface ultra-rápida construída em Next.js e Fastify"
    ],
    techStack: ["Next.js", "Fastify", "BullMQ", "Redis", "Prisma", "PostgreSQL"],
    targetAudience: "Consumidores inteligentes, entusiastas de tecnologia e compradores frequentes online.",
    gradient: "from-sky-500/20 via-blue-500/10 to-indigo-500/20",
    iconName: "TrendingDown"
  },
  {
    id: "habithub",
    name: "HabitHub Analytics",
    tagline: "App de Monitoramento de Hábitos & Performance Pessoal com Analytics",
    category: "analytics",
    categoryLabel: "Analytics & Produtividade",
    status: "Produção Active",
    statusColor: "violet",
    badge: "Cross-Platform (Web & Mobile)",
    description: "Acompanhe rotinas, metas, hábitos diários e visualize dados detalhados da sua evolução com gráficos de consistência.",
    longDescription: "HabitHub une a ciência da formação de hábitos a uma suíte poderosa de analytics comportamental. Permite a criadores de conteúdo, atletas e profissionais de alta performance medir o seu progresso diário, calcular taxas de consistência por semana/mês e receber insights preditivos.",
    metrics: [
      { label: "Aumento de Consistência", value: "+68%" },
      { label: "Hábitos Rastreados", value: "+500.000" },
      { label: "Avaliação da App", value: "4.9 ★" }
    ],
    features: [
      "Dashboard de Métricas Comportamentais e Heatmap de Hábitos estilo GitHub",
      "Aplicativo Mobile nativo e Web App sincronizados em tempo real",
      "Metas quantitativas (ex: 3L de água, 45min leitura) e qualitativas",
      "Gráficos avançados de retenção de hábito e streaks de consistência",
      "Notificações inteligentes baseadas na rotina do usuário"
    ],
    techStack: ["Next.js", "React Native / Mobile", "Node.js", "PostgreSQL", "Recharts"],
    targetAudience: "Pessoas que buscam alta produtividade, atletas, estudantes e profissionais exigentes.",
    gradient: "from-fuchsia-500/20 via-purple-500/10 to-pink-500/20",
    iconName: "BarChart3"
  },
  {
    id: "asaasbilling",
    name: "Asaas Billing Engine",
    tagline: "Motor Integrado de Gestão Financeira e Cobranças Recorrentes via Asaas",
    category: "financas",
    categoryLabel: "Finanças & Payments",
    status: "Enterprise SaaS",
    statusColor: "emerald",
    badge: "Módulo Micro-SaaS Financial",
    description: "Automatize cobranças via Pix com QrCode dinâmico, boletos bancários e cartão de crédito com régua de cobrança por WhatsApp.",
    longDescription: "Módulo desacoplado de cobrança e faturamento recorrente pré-integrado com a API do Asaas. Permite que qualquer um dos nossos SaaS processe assinaturas mensais, emita notas fiscais automáticas e envie réguas de cobrança automatizadas para clientes inadimplentes.",
    metrics: [
      { label: "Inadimplência", value: "-60%" },
      { label: "Recebimento via Pix", value: "< 5 segundos" },
      { label: "Automação", value: "100% Hands-free" }
    ],
    features: [
      "Geração de Pix Copia e Cola / QR Code Dinâmico com webhook instantâneo",
      "Cobrança recorrente de assinaturas em cartão de crédito e boleto",
      "Régua de cobrança automática por WhatsApp antes e depois do vencimento",
      "Conciliação bancária automatizada e emissão de relatórios de receita (MRR/ARR)",
      "Webhooks seguros com assinatura HMAC para liquidação automática de pedidos"
    ],
    techStack: ["Node.js", "TypeScript", "Asaas API", "Prisma", "PostgreSQL", "Webhooks"],
    targetAudience: "Empresas SaaS, prestadores de serviços, clubes de assinatura e escolas.",
    gradient: "from-emerald-600/20 via-teal-600/10 to-green-500/20",
    iconName: "CreditCard"
  }
];
