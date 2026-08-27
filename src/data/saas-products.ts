export interface SaaSProduct {
  id: string;
  name: string;
  tagline: string;
  category: string;
  categoryLabel: string;
  status: "Produção" | "Piloto" | "Disponível";
  description: string;
  problemSolved: string;
  features: string[];
  techStack: string[];
  iconName: string;
  badge: string;
}

export const saasProducts: SaaSProduct[] = [
  {
    id: "torqueos",
    name: "TorqueOS",
    tagline: "ERP para oficinas automotivas e autocenters",
    category: "automotivo",
    categoryLabel: "Setor Automotivo",
    status: "Produção",
    badge: "Web & Desktop",
    description: "Gestão completa de ordens de serviço, peças, orçamento e operação do balcão da oficina em uma única plataforma.",
    problemSolved: "Centraliza o atendimento do balcão ao pátio, eliminando papéis e reduzindo o tempo de aprovação de orçamentos.",
    features: [
      "Emissão rápida de Ordens de Serviço e orçamentos",
      "Aplicativo desktop nativo para computadores de balcão",
      "Controle de estoque de peças por código e aplicação",
      "Checklist de entrada de veículos com fotos"
    ],
    techStack: ["Next.js", "NestJS", "Electron", "PostgreSQL", "Prisma"],
    iconName: "Wrench"
  },
  {
    id: "syndent",
    name: "SynDent",
    tagline: "Sistema de gestão para clínicas odontológicas",
    category: "saude",
    categoryLabel: "Saúde & Odontologia",
    status: "Piloto",
    badge: "Multi-Tenant",
    description: "Prontuário eletrônico odontológico, odontograma interativo, agenda e gestão financeira integrada para consultórios.",
    problemSolved: "Organiza o histórico do paciente e otimiza a rotina clínica com odontogramas intuitivos e confirmação de consultas.",
    features: [
      "Prontuário digital e histórico de anamnese",
      "Odontograma gráfico 2D/3D interativo",
      "Agenda de atendimentos com lembretes automáticos",
      "Gestão de faturamento por procedimentos"
    ],
    techStack: ["Next.js", "Fastify", "Prisma", "PostgreSQL"],
    iconName: "Stethoscope"
  },
  {
    id: "barbercrm",
    name: "BarberCRM",
    tagline: "CRM e agendamento online para barbearias",
    category: "servicos",
    categoryLabel: "Beleza & Serviços",
    status: "Produção",
    badge: "SaaS & Licenciamento",
    description: "Plataforma de agendamento 24/7 via link público, confirmação por WhatsApp, programa de fidelidade e financeiro.",
    problemSolved: "Elimina a necessidade de responder mensagens manualmente para agendar horários, preenchendo a agenda de forma automática.",
    features: [
      "Link público exclusivo para agendamento do cliente",
      "Notificação e confirmação via WhatsApp",
      "Programa de pontos e fidelização de clientes VIP",
      "Controle de comissões e faturamento diário"
    ],
    techStack: ["Next.js", "NestJS", "Prisma", "PostgreSQL", "Stripe"],
    iconName: "Scissors"
  },
  {
    id: "disparoflow",
    name: "DisparoFlow",
    tagline: "Plataforma de mensageria e automação no WhatsApp",
    category: "marketing",
    categoryLabel: "Marketing & Automação",
    status: "Produção",
    badge: "Mensageria",
    description: "Envio de campanhas, automação de mensagens, aquecimento inteligente de números e acompanhamento de entregas.",
    problemSolved: "Permite a comunicação direta com listas de clientes de forma organizada, monitorando cliques e respostas em tempo real.",
    features: [
      "Gerenciamento de campanhas e templates de mensagem",
      "Módulo de aquecimento gradual para estabilidade de chips",
      "Links rastreáveis com métricas de conversão",
      "Processamento assíncrono para envios consistentes"
    ],
    techStack: ["NestJS", "Next.js", "Redis", "BullMQ", "NATS"],
    iconName: "Send"
  },
  {
    id: "advcargo",
    name: "AdvCargo",
    tagline: "Sistema de gestão jurídica para escritórios de advocacia",
    category: "juridico",
    categoryLabel: "Setor Jurídico",
    status: "Produção",
    badge: "Web & PWA",
    description: "Acompanhamento de processos judiciais, controle de prazos, agenda de audiências e gestão financeira de honorários.",
    problemSolved: "Evita a perda de prazos processuais e centraliza todas as pastas de clientes em um ambiente seguro.",
    features: [
      "Alerta e controle rigoroso de prazos processuais",
      "Organização de processos por cliente e pasta",
      "Agenda de audiências e compromissos jurídicos",
      "Módulo de honorários contratuais e sucumbenciais"
    ],
    techStack: ["React", "Node.js", "Express", "Prisma", "PostgreSQL"],
    iconName: "Scale"
  },
  {
    id: "esperaai",
    name: "EsperaAí",
    tagline: "Histórico de preços e recomendação de compra",
    category: "consumidor",
    categoryLabel: "E-Commerce & Preços",
    status: "Disponível",
    badge: "Inteligência de Mercado",
    description: "Plataforma de acompanhamento da variação de preço de produtos com alertas de desconto e gráfico histórico.",
    problemSolved: "Ajuda o consumidor a identificar o momento exato de comprar um produto analisando a tendência histórica do valor.",
    features: [
      "Gráfico de oscilação de preço de 30 a 365 dias",
      "Recomendação de compra (Compre Agora vs. Espere)",
      "Alertas automáticos quando o preço atinge a meta",
      "Monitoramento contínuo em plano de fundo"
    ],
    techStack: ["Next.js", "Fastify", "BullMQ", "Redis", "PostgreSQL"],
    iconName: "TrendingDown"
  },
  {
    id: "habithub",
    name: "HabitHub",
    tagline: "Analytics comportamental e acompanhamento de hábitos",
    category: "produtividade",
    categoryLabel: "Analytics & Produtividade",
    status: "Produção",
    badge: "Web & Mobile",
    description: "Rastreamento de rotinas diárias, metas pessoais e visualização de dados de consistência com gráficos de progresso.",
    problemSolved: "Transforma metas abstratas em acompanhamento diário mensurável para indivíduos e profissionais exigentes.",
    features: [
      "Heatmap visual de frequência e consistência",
      "Metas quantitativas e diários de evolução",
      "Métricas de retenção e sequências de dias atingidos"
    ],
    techStack: ["Next.js", "React Native", "Node.js", "PostgreSQL"],
    iconName: "BarChart3"
  },
  {
    id: "asaasbilling",
    name: "Asaas Billing Engine",
    tagline: "Gestão financeira e cobranças recorrentes via Asaas",
    category: "financas",
    categoryLabel: "Finanças & Pagamentos",
    status: "Produção",
    badge: "Módulo Financeiro",
    description: "Automação de cobranças por Pix, boleto bancário e cartão de crédito com réguas de notificação.",
    problemSolved: "Automatiza a emissão de cobranças de assinaturas e reduz a inadimplência com lembretes programados.",
    features: [
      "Geração automática de Pix Copia e Cola / QR Code",
      "Cobrança recorrente em cartão e boleto",
      "Notificações automáticas de vencimento",
      "Liquidação em tempo real via Webhooks"
    ],
    techStack: ["Node.js", "TypeScript", "Asaas API", "Prisma"],
    iconName: "CreditCard"
  }
];
