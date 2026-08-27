export interface VerifiableFact {
  label: string;
  value: string;
  description: string;
  iconName: string;
}

export const companyFacts: VerifiableFact[] = [
  {
    label: "Produtos Desenvolvidos",
    value: "8+",
    description: "Plataformas SaaS e sistemas em operação para diferentes nichos",
    iconName: "Layers"
  },
  {
    label: "Plataformas Suportadas",
    value: "Web & Desktop",
    description: "Sistemas em nuvem acessíveis no navegador e aplicativos nativos de balcão",
    iconName: "Monitor"
  },
  {
    label: "Arquitetura",
    value: "Multi-Tenant & APIs",
    description: "Estrutura modular com isolamento de dados e facilidade de integração",
    iconName: "ShieldCheck"
  },
  {
    label: "Propriedade de Código",
    value: "100% Próprio",
    description: "Desenvolvimento autoral sem dependência de templates pré-prontos",
    iconName: "Code2"
  }
];

export const processSteps = [
  {
    number: "01",
    title: "Descoberta",
    description: "Entendimento aprofundado do seu negócio, mapeamento dos gargalos operacionais e definição clara dos objetivos do software."
  },
  {
    number: "02",
    title: "Arquitetura",
    description: "Planejamento da estrutura técnica, modelo de dados, telas principais e fluxos de trabalho antes de escrever o código."
  },
  {
    number: "03",
    title: "Desenvolvimento",
    description: "Construção incremental do software com entregas frequentes para validação contínua e ajustes em tempo real."
  },
  {
    number: "04",
    title: "Deploy",
    description: "Publicação segura em ambiente de produção, testes de carga, configuração de domínio e preparação da equipe para operação."
  },
  {
    number: "05",
    title: "Evolução",
    description: "Acompanhamento pós-lançamento, suporte técnico contínuo, melhorias graduais e implementação de novas funcionalidades."
  }
];
