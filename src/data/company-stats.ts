export interface VerifiableFact {
  label: string;
  value: string;
  description: string;
  iconName: string;
}

export const companyFacts: VerifiableFact[] = [
  {
    label: "Produtos em Desenvolvimento",
    value: "Multi-SaaS",
    description: "Plataformas SaaS e sistemas para nichos específicos de negócio",
    iconName: "Layers"
  },
  {
    label: "Plataformas Atendidas",
    value: "Web & Desktop",
    description: "Sistemas em nuvem modernos e aplicações nativas para balcão",
    iconName: "Monitor"
  },
  {
    label: "Arquitetura",
    value: "Multi-Tenant & APIs",
    description: "Estrutura modular com isolamento rigoroso de dados e segurança",
    iconName: "ShieldCheck"
  },
  {
    label: "Propriedade Intelectual",
    value: "100% Autoral",
    description: "Engenharia de software própria adaptada à necessidade de cada cliente",
    iconName: "Code2"
  }
];

export const processSteps = [
  {
    number: "01",
    title: "Entendimento",
    description: "Mapeamento aprofundado dos gargalos da operação e definição clara dos requisitos essenciais."
  },
  {
    number: "02",
    title: "Arquitetura",
    description: "Planejamento da estrutura técnica, modelo de banco de dados, fluxos de tela e segurança antes do código."
  },
  {
    number: "03",
    title: "Desenvolvimento",
    description: "Construção incremental com código limpo, testes automatizados e entregas frequentes para validação."
  },
  {
    number: "04",
    title: "Validação",
    description: "Testes de carga, validação de regras de negócio com usuários reais e refinamento de interface."
  },
  {
    number: "05",
    title: "Produção",
    description: "Deploy seguro em infraestrutura em nuvem, migração de dados e acompanhamento assistido no lançamento."
  },
  {
    number: "06",
    title: "Evolução",
    description: "Monitoramento contínuo, suporte técnico direto e desenvolvimento de melhorias operacionais."
  }
];
