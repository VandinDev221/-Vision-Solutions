export type ProductStatus = "Em Produção" | "Em Desenvolvimento";

export interface SaasProduct {
  slug: string;
  name: string;
  category: string;
  status: ProductStatus;
  /** Módulos reais do sistema, usados para reorganizar o Vision System 3D
   *  quando este produto é selecionado no showcase. */
  modules: string[];
}

export const saasProducts: SaasProduct[] = [
  {
    slug: "torqueos",
    name: "TorqueOS",
    category: "ERP Automotivo",
    status: "Em Produção",
    modules: ["Ordens de Serviço", "Estoque", "Financeiro", "Agenda"],
  },
  {
    slug: "syndent",
    name: "SynDent",
    category: "SaaS Odontológico",
    status: "Em Produção",
    modules: ["Pacientes", "Agenda", "Procedimentos", "Financeiro"],
  },
  {
    slug: "barbercrm",
    name: "BarberCRM",
    category: "CRM para Barbearias",
    status: "Em Desenvolvimento",
    modules: ["Clientes", "Agenda", "Serviços", "Profissionais"],
  },
  {
    slug: "disparoflow",
    name: "DisparoFlow",
    category: "Automação de Mensagens",
    status: "Em Desenvolvimento",
    modules: ["Contatos", "Fluxos", "Filas", "Relatórios"],
  },
  {
    slug: "advcargo",
    name: "AdvCargo",
    category: "Gestão de Transportadoras",
    status: "Em Desenvolvimento",
    modules: ["Cargas", "Frota", "Rotas", "Financeiro"],
  },
];
