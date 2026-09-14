export interface CoreSolution {
  title: string;
  description: string;
  items: string[];
}

export const coreSolutions: CoreSolution[] = [
  {
    title: "ERPs & Backoffices",
    description:
      "Sistemas de gestão sob medida para operações que não cabem em planilhas nem em ERPs genéricos.",
    items: ["Estoque e financeiro", "Ordens de serviço", "Relatórios operacionais", "Controle de acesso"],
  },
  {
    title: "SaaS Multi-Tenant",
    description:
      "Produtos próprios desenhados desde a base para atender múltiplos clientes com isolamento de dados real.",
    items: ["Arquitetura multi-tenant", "Billing e planos", "Onboarding de contas", "Painel administrativo"],
  },
  {
    title: "APIs & Integrations",
    description:
      "Integração entre sistemas internos, parceiros e serviços externos sem acoplamento frágil.",
    items: ["APIs REST documentadas", "Webhooks", "Integração com terceiros", "Versionamento de contratos"],
  },
  {
    title: "Queues & Automation",
    description:
      "Processamento assíncrono para operações que não podem travar a experiência do usuário.",
    items: ["Filas de mensagens", "Jobs agendados", "Automação de processos", "Reprocessamento e retries"],
  },
];

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  { number: "01", title: "Entendimento & Requisitos", description: "Mapeamos o processo real da operação antes de propor qualquer solução técnica." },
  { number: "02", title: "Modelagem & Protótipo", description: "Estruturamos dados, regras de negócio e fluxos antes de escrever código de produção." },
  { number: "03", title: "Desenvolvimento Incremental", description: "Entregas contínuas e testáveis, com visibilidade do progresso a cada etapa." },
  { number: "04", title: "Homologação & Testes", description: "Validação com a operação real antes de qualquer coisa ir para produção." },
  { number: "05", title: "Deploy em Produção", description: "Publicação controlada, com monitoramento desde o primeiro minuto." },
  { number: "06", title: "Suporte & Evolução", description: "O sistema continua evoluindo junto com a operação, não termina no deploy." },
];
