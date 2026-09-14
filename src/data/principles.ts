export interface Principle {
  title: string;
  description: string;
}

export const principles: Principle[] = [
  {
    title: "Simplicidade Operacional",
    description: "Software só é bom se reduzir a complexidade do dia a dia de quem usa, não aumentar.",
  },
  {
    title: "Rigor de Engenharia",
    description: "Arquitetura pensada antes de código. Decisões técnicas justificadas, não improvisadas.",
  },
  {
    title: "Foco no Negócio",
    description: "Cada sistema é modelado a partir das regras reais da operação, não de um template genérico.",
  },
  {
    title: "Evolução Contínua",
    description: "Um sistema em produção continua sendo desenvolvido — a operação muda, o software acompanha.",
  },
  {
    title: "Atendimento Direto",
    description: "Contato direto com quem constrói o sistema, sem camadas de atendimento entre o problema e a solução.",
  },
];
