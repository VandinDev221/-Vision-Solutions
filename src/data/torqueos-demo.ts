export const torqueOsPanel = {
  appName: "TorqueOS AutoCenter",
  environment: "Ambiente de Produção",
  status: "Ativo",
  unit: "Oficina Principal",
  todayLabel: "18 O.S. no pátio hoje",
  tabs: ["Ordens de Serviço", "Peças", "Financeiro"] as const,
  orders: [
    {
      id: "#4892",
      vehicle: "Toyota Corolla",
      customer: "Carlos M.",
      service: "Revisão 60k + Freios",
      status: "Em Execução" as const,
      value: "R$ 1.840",
    },
    {
      id: "#4891",
      vehicle: "Honda Civic",
      customer: "Amanda R.",
      service: "Troca Amortecedores",
      status: "Aguardando Peça" as const,
      value: "R$ 2.450",
    },
    {
      id: "#4890",
      vehicle: "Jeep Compass",
      customer: "Eduardo S.",
      service: "Diagnóstico Injeção",
      status: "Finalizado" as const,
      value: "R$ 720",
    },
  ],
  stackBadges: ["Next.js 15", "Fastify", "PostgreSQL 16"],
  architectureNote: "Multi-Tenant com Schemas Isolados",
};

export type OrderStatus = (typeof torqueOsPanel.orders)[number]["status"];
