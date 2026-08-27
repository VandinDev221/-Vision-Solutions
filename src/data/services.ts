export interface CustomService {
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  iconName: string;
  badge: string;
}

export const customServices: CustomService[] = [
  {
    title: "Criação de Novos SaaS Multi-Tenant",
    subtitle: "Do conceito à produção em tempo recorde",
    description: "Transformamos a sua ideia de negócio em uma plataforma SaaS escalável, completa com painel administrativo, gestão de planos/assinaturas, banco multi-tenant e design de alta conversão.",
    deliverables: [
      "Arquitetura escalável com Next.js 15 & NestJS/Fastify",
      "Integração com Stripe / Asaas para cobrança recorrente",
      "Painel administrativo e métricas de MRR/ARR",
      "Setup de CI/CD automatizado em nuvem (Vercel, Render, AWS)"
    ],
    iconName: "Rocket",
    badge: "SaaS Studio"
  },
  {
    title: "Desenvolvimento de Software Enterprise Sob Medida",
    subtitle: "Sistemas complexos para grandes operações",
    description: "Criamos ERPs, CRMs customizados e plataformas corporativas sob medida para automatizar os gargalos operacionais da sua empresa com máxima segurança.",
    deliverables: [
      "Mapeamento de processos e engenharia de software",
      "Apps Desktop (Electron) e Web de alta velocidade",
      "Integração com legados e APIs de terceiros",
      "Garantia de Uptime e suporte dedicado"
    ],
    iconName: "Building2",
    badge: "Enterprise"
  },
  {
    title: "APIs de Alta Vazão & Microsserviços",
    subtitle: "Performance sem limites para milhões de requisições",
    description: "Engenharia de backend especializada em microsserviços, mensageria distribuída e filas assíncronas para aguentar picos de uso sem lentidão.",
    deliverables: [
      "Arquitetura NATS JetStream, Redis e BullMQ",
      "Documentação completa de API OpenAPI/Swagger",
      "Telemetria, logs centralizados e monitoramento 24/7",
      "Containerização com Docker e Kubernetes"
    ],
    iconName: "Server",
    badge: "Backend Engineering"
  }
];
