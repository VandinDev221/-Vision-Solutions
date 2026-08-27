export interface CompanyStat {
  label: string;
  value: string;
  description: string;
  iconName: string;
}

export const companyStats: CompanyStat[] = [
  {
    label: "SaaS em Produção",
    value: "8+",
    description: "Plataformas ativas atendendo múltiplos mercados e verticais",
    iconName: "Layers"
  },
  {
    label: "Requisições Processadas",
    value: "+1.5M/mês",
    description: "Infraestrutura de alta vazão com NATS, Redis e BullMQ",
    iconName: "Zap"
  },
  {
    label: "Uptime Global",
    value: "99.98%",
    description: "Arquitetura distribuída com isolamento multi-tenant",
    iconName: "ShieldCheck"
  },
  {
    label: "Usuários & Clientes Impactados",
    value: "+50.000",
    description: "De profissionais autônomos a redes corporativas",
    iconName: "Users"
  }
];

export const techPillars = [
  {
    title: "Clean Architecture & Modularitat",
    description: "Sistemas construídos com separação clara de responsabilidades, facilitando manutenção e escalabilidade sem débitos técnicos.",
    iconName: "Code2"
  },
  {
    title: "Multi-Tenant & Security First",
    description: "Bancos de dados com isolamento estrito por cliente, HTTPS obrigatório, criptografia JWT e políticas de privacidade alinhadas com LGPD.",
    iconName: "Lock"
  },
  {
    title: "High-Volume Async Queues",
    description: "Processamento distribuído em background com Redis, NATS JetStream e BullMQ para garantir execução ultra-rápida sem congelar a UI.",
    iconName: "Cpu"
  },
  {
    title: "Multi-Platform Experience",
    description: "Desenvolvimento híbrido com Web Next.js 15, Apps Nativos Mobile e Aplicativos Desktop Electron otimizados para PCs de balcão.",
    iconName: "MonitorAndMobile"
  }
];
