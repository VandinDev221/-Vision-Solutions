export interface SaaSProduct {
  id: string;
  name: string;
  tagline: string;
  category: "gestao" | "saude" | "servicos" | "marketing" | "juridico" | "consumidor" | "produtividade" | "financas";
  categoryLabel: string;
  status: "Produção" | "Piloto" | "Disponível";
  badge: string;
  description: string;
  problemSolved: string;
  features: string[];
  techStack: string[];
  iconName: string;
  metrics?: { label: string; value: string }[];
}

export const saasProducts: SaaSProduct[] = [
  {
    id: "torqueos",
    name: "TorqueOS",
    tagline: "Sistema de gestão operacional para oficinas e autocenters",
    category: "gestao",
    categoryLabel: "Gestão Automotiva",
    status: "Produção",
    badge: "Multi-Tenant",
    description: "Plataforma completa para controle de ordens de serviço, catálogo de autopeças com busca rápida, fluxo de caixa e gestão de técnicos.",
    problemSolved: "Substitui ordens de serviço em papel e anotações manuais, reduzindo erros de estoque e acelerando a aprovação de orçamentos.",
    features: [
      "Emissão e acompanhamento de Ordens de Serviço (O.S.)",
      "Catálogo indexado com busca rápida por código de peça",
      "Controle de pátio e status de execução em tempo real",
      "Fluxo de caixa integrado com conciliação Pix"
    ],
    techStack: ["Next.js", "NestJS", "Electron", "PostgreSQL", "Prisma"],
    iconName: "Wrench",
    metrics: [
      { label: "Tempo de orçamento", value: "-60%" },
      { label: "Precisão de estoque", value: "99.4%" },
    ]
  },
  {
    id: "syndent",
    name: "SynDent",
    tagline: "Software de gestão clínica para consultórios odontológicos",
    category: "saude",
    categoryLabel: "Saúde & Odontologia",
    status: "Piloto",
    badge: "Multi-Tenant",
    description: "Prontuário eletrônico odontológico, odontograma interativo 2D/3D, agenda inteligente com confirmação e controle financeiro por procedimento.",
    problemSolved: "Centraliza o histórico clínico do paciente e reduz faltas com confirmações automatizadas de consultas.",
    features: [
      "Prontuário eletrônico com anamnese e histórico",
      "Odontograma gráfico 2D/3D interativo por elemento dentário",
      "Agenda clínica com lembretes automáticos",
      "Gestão de faturamento por procedimentos e repasses"
    ],
    techStack: ["Next.js", "Fastify", "Prisma", "PostgreSQL"],
    iconName: "Stethoscope",
    metrics: [
      { label: "Faltas em consultas", value: "-45%" },
      { label: "Acesso a prontuário", value: "< 2s" },
    ]
  },
  {
    id: "barbercrm",
    name: "BarberCRM",
    tagline: "Agendamento online e fidelização para barbearias e salões",
    category: "servicos",
    categoryLabel: "Serviços & Estética",
    status: "Produção",
    badge: "SaaS & Licenciamento",
    description: "Plataforma de agendamento 24/7 com link direto, confirmação por WhatsApp, cálculo de comissões e clube de assinaturas.",
    problemSolved: "Elimina a perda de agendamentos fora do horário comercial e o cálculo manual de comissões dos profissionais.",
    features: [
      "Link direto de agendamento 24/7 para o cliente final",
      "Notificação e confirmação automática por WhatsApp",
      "Clube de assinaturas e programa de fidelidade",
      "Divisão de comissões por profissional e fechamento diário"
    ],
    techStack: ["Next.js", "NestJS", "Prisma", "PostgreSQL"],
    iconName: "Scissors",
    metrics: [
      { label: "Agendamentos automáticos", value: "85%" },
      { label: "Tempo de fechamento de caixa", value: "5 min" },
    ]
  },
  {
    id: "disparoflow",
    name: "DisparoFlow",
    tagline: "Automação e mensageria WhatsApp com fila assíncrona",
    category: "marketing",
    categoryLabel: "Mensageria & Automação",
    status: "Produção",
    badge: "Mensageria",
    description: "Envio de notificações transacionais, régua de cobrança automática e integração de eventos via Webhook.",
    problemSolved: "Automatiza a comunicação com clientes em grande volume mantendo alta taxa de entrega e estabilidade.",
    features: [
      "Processamento assíncrono com filas BullMQ e Redis",
      "Disparos transacionais acionados por Webhooks",
      "Controle de taxa de envio para estabilidade da linha",
      "Relatórios de entrega e leitura em tempo real"
    ],
    techStack: ["NestJS", "Next.js", "Redis", "BullMQ", "NATS"],
    iconName: "Bot",
    metrics: [
      { label: "Entrega em fila", value: "99.8%" },
      { label: "Processamento", value: "10k/min" },
    ]
  },
  {
    id: "advcargo",
    name: "AdvCargo",
    tagline: "Gestão de prazos e processos para escritórios de advocacia",
    category: "juridico",
    categoryLabel: "Setor Jurídico",
    status: "Produção",
    badge: "Web & PWA",
    description: "Acompanhamento de processos judiciais, controle rigoroso de prazos fatais, pauta de audiências e gestão de honorários.",
    problemSolved: "Elimina o risco de perda de prazos judiciais e centraliza os documentos de cada processo em nuvem segura.",
    features: [
      "Alerta preventivo de prazos e intimações",
      "Organização de pastas judiciais por cliente",
      "Pauta de audiências sincronizada com a equipe",
      "Controle de honorários contratuais e sucumbenciais"
    ],
    techStack: ["React", "Node.js", "Express", "Prisma", "PostgreSQL"],
    iconName: "Scale"
  }
];
