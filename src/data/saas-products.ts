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
    tagline: "ERP para oficinas automotivas e centros automotivos",
    category: "automotivo",
    categoryLabel: "Setor Automotivo",
    status: "Produção",
    badge: "Web & Desktop",
    description: "Gestão completa de ordens de serviço, peças, orçamentos e operação do balcão da oficina em uma única plataforma integrada.",
    problemSolved: "Centraliza o atendimento do balcão ao pátio, eliminando papel e reduzindo o tempo de aprovação de orçamentos.",
    features: [
      "Emissão rápida de Ordens de Serviço e orçamentos detalhados",
      "Aplicativo desktop nativo para computadores de balcão",
      "Controle de estoque de peças por código e aplicação veicular",
      "Checklist digital de entrada de veículos com fotos e avarias"
    ],
    techStack: ["Next.js", "NestJS", "Electron", "PostgreSQL", "Prisma"],
    iconName: "Wrench"
  },
  {
    id: "syndent",
    name: "SynDent",
    tagline: "Sistema de gestão para clínicas e consultórios odontológicos",
    category: "saude",
    categoryLabel: "Saúde & Odontologia",
    status: "Piloto",
    badge: "Multi-Tenant",
    description: "Prontuário eletrônico odontológico, odontograma interativo 2D/3D, agenda inteligente e gestão financeira integrada.",
    problemSolved: "Organiza o histórico clínico do paciente e otimiza a rotina com odontogramas intuitivos e confirmação de consultas.",
    features: [
      "Prontuário eletrônico com histórico clínico e anamnese",
      "Odontograma gráfico 2D/3D interativo por dente e face",
      "Agenda de atendimentos com lembretes automáticos",
      "Gestão de faturamento por procedimentos e dentistas"
    ],
    techStack: ["Next.js", "Fastify", "Prisma", "PostgreSQL"],
    iconName: "Stethoscope"
  },
  {
    id: "barbercrm",
    name: "BarberCRM",
    tagline: "CRM e agendamento online para barbearias e salões",
    category: "servicos",
    categoryLabel: "Beleza & Serviços",
    status: "Produção",
    badge: "SaaS & Licenciamento",
    description: "Plataforma de agendamento 24/7 via link público, confirmação por WhatsApp, programa de fidelidade e financeiro.",
    problemSolved: "Elimina a necessidade de responder mensagens manualmente para agendar horários, preenchendo a agenda de forma automática.",
    features: [
      "Link público exclusivo para agendamento direto pelo cliente",
      "Notificação e confirmação automática via WhatsApp",
      "Programa de pontos e fidelização de clientes recorrentes",
      "Controle de comissões por profissional e faturamento diário"
    ],
    techStack: ["Next.js", "NestJS", "Prisma", "PostgreSQL"],
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
    problemSolved: "Permite a comunicação direta com listas de clientes de forma organizada, monitorando entregas e respostas em tempo real.",
    features: [
      "Gerenciamento de campanhas e templates de mensagem",
      "Módulo de aquecimento gradual para estabilidade de chips",
      "Links rastreáveis com métricas de entrega e conversão",
      "Processamento assíncrono para envios de alto volume"
    ],
    techStack: ["NestJS", "Next.js", "Redis", "BullMQ", "NATS"],
    iconName: "Bot"
  },
  {
    id: "advcargo",
    name: "AdvCargo",
    tagline: "Sistema de gestão jurídica para escritórios de advocacia",
    category: "juridico",
    categoryLabel: "Setor Jurídico",
    status: "Produção",
    badge: "Web & PWA",
    description: "Acompanhamento de processos judiciais, controle de prazos fatais, agenda de audiências e gestão de honorários.",
    problemSolved: "Evita a perda de prazos processuais e centraliza todas as pastas de clientes em um ambiente digital seguro.",
    features: [
      "Alerta e controle rigoroso de prazos processuais",
      "Organização de processos por cliente e pasta jurídica",
      "Agenda de audiências e compromissos com a equipe",
      "Módulo de honorários contratuais e sucumbenciais"
    ],
    techStack: ["React", "Node.js", "Express", "Prisma", "PostgreSQL"],
    iconName: "Scale"
  },
  {
    id: "esperaai",
    name: "EsperaAí",
    tagline: "Histórico de preços e recomendação inteligente de compra",
    category: "consumidor",
    categoryLabel: "E-Commerce & Preços",
    status: "Disponível",
    badge: "Inteligência de Mercado",
    description: "Plataforma de acompanhamento da variação de preço de produtos com alertas de desconto e gráfico histórico de valores.",
    problemSolved: "Ajuda o consumidor a identificar o momento exato de comprar um produto analisando a tendência histórica do valor.",
    features: [
      "Gráfico de oscilação de preço de 30 a 365 dias",
      "Recomendação de compra (Compre Agora vs. Espere)",
      "Alertas automáticos quando o preço atinge a meta estipulada",
      "Monitoramento contínuo em plano de fundo"
    ],
    techStack: ["Next.js", "Fastify", "BullMQ", "Redis", "PostgreSQL"],
    iconName: "TrendingDown"
  },
  {
    id: "habithub",
    name: "HabitHub",
    tagline: "Analytics comportamental e acompanhamento de rotinas",
    category: "produtividade",
    categoryLabel: "Analytics & Produtividade",
    status: "Produção",
    badge: "Web & Mobile",
    description: "Rastreamento de rotinas diárias, metas operacionais e visualização de dados de consistência com gráficos de progresso.",
    problemSolved: "Transforma metas em acompanhamento diário mensurável para profissionais e gestores exigentes.",
    features: [
      "Heatmap visual de frequência e consistência operacional",
      "Metas quantitativas e diários de evolução",
      "Métricas de retenção e sequências de dias cumpridos"
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
    description: "Automação de cobranças por Pix, boleto bancário e cartão de crédito com réguas inteligentes de notificação.",
    problemSolved: "Automatiza a emissão de cobranças de assinaturas e reduz a inadimplência com lembretes programados.",
    features: [
      "Geração automática de Pix Copia e Cola / QR Code dinâmico",
      "Cobrança recorrente em cartão de crédito e boleto",
      "Notificações automáticas de vencimento pré e pós",
      "Liquidação em tempo real via Webhooks assinados"
    ],
    techStack: ["Node.js", "TypeScript", "Asaas API", "Prisma"],
    iconName: "CreditCard"
  }
];
