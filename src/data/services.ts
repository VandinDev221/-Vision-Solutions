export interface CoreSolution {
  title: string;
  description: string;
  iconName: string;
}

export const coreSolutions: CoreSolution[] = [
  {
    title: "Produtos SaaS",
    description: "Criamos plataformas digitais recorrentes e sistemas multi-tenant focados em estabilidade e usabilidade.",
    iconName: "Rocket"
  },
  {
    title: "Sistemas Empresariais & ERP",
    description: "Sistemas desenhados para organizar processos internos, estoques, orçamentos e fluxo operacional.",
    iconName: "Building2"
  },
  {
    title: "Desenvolvimento Sob Medida",
    description: "Software desenvolvido exatamente de acordo com as regras, fluxos e necessidades da sua empresa.",
    iconName: "Code2"
  },
  {
    title: "Integrações e Automação",
    description: "APIs, automações, webhooks e integração contínua entre ferramentas e bancos de dados.",
    iconName: "Workflow"
  }
];

export const customSoftwareTypes = [
  { title: "ERP & Gestão Operacional", desc: "Sistemas para controle de estoque, ordens de serviço e finanças." },
  { title: "CRM & Atendimento", desc: "Plataformas para gestão de clientes, funil de vendas e histórico." },
  { title: "Sistemas Internos & Balcão", desc: "Ferramentas operacionais web e desktop para equipes de atendimento." },
  { title: "Dashboards & Relatórios", desc: "Painéis de indicadores em tempo real para tomada de decisão." },
  { title: "Plataformas Web & SaaS", desc: "Portais de autoatendimento, marketplaces e soluções recorrentes." },
  { title: "APIs & Integrações", desc: "Conexão entre softwares legados, meios de pagamento e serviços terceiros." }
];
