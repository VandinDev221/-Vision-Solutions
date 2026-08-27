export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  segment: string;
  avatar: string;
  rating: number;
  quote: string;
  metricHighlight: string;
  saasId: string;
  saasName: string;
  verified: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    author: "Dra. Camila Vasconcelos",
    role: "Cirurgiã-Dentista & Proprietária",
    company: "Clínica OdontoPrime",
    segment: "Odontologia",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    quote: "O SynDent mudou completamente a dinâmica da nossa clínica. A confirmação de consulta por WhatsApp zerou nosso índice de faltas e o odontograma digital é o mais prático que já usei na vida.",
    metricHighlight: "-45% em faltas no primeiro mês",
    saasId: "syndent",
    saasName: "SynDent",
    verified: true
  },
  {
    id: "2",
    author: "Rafael 'Barber' Silva",
    role: "Fundador & Master Barber",
    company: "Barbearia Corte & Navalha",
    segment: "Barbearia",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    quote: "Eu passava o dia inteiro respondendo WhatsApp para agendar horários. Hoje envio o link do BarberCRM na bio do Instagram e a minha agenda se preenche sozinha. O sistema se paga dez vezes por mês!",
    metricHighlight: "+180 horários agendados/mês no piloto",
    saasId: "barbercrm",
    saasName: "BarberCRM",
    verified: true
  },
  {
    id: "3",
    author: "Eng. Marcelo Alcantara",
    role: "Gerente Geral de Operações",
    company: "AutoCenter Torque Performance",
    segment: "Automotivo",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    quote: "Usamos o TorqueOS nos computadores de balcão via aplicativo desktop. A velocidade para dar entrada no veículo, fazer o orçamento das peças e aprovar pelo WhatsApp do cliente é incomparável.",
    metricHighlight: "Orçamentos aprovados 4x mais rápido",
    saasId: "torqueos",
    saasName: "TorqueOS",
    verified: true
  },
  {
    id: "4",
    author: "Gabriel Mendonça",
    role: "Head de Growth & Aquisição",
    company: "ScaleGrowth Media",
    segment: "Marketing",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    quote: "O DisparoFlow com o módulo de aquecimento de chips por IA nos permitiu rodar operações de mais de 50 mil disparos por dia com total segurança e zero banimento de chips. É o motor definitivo de outbound.",
    metricHighlight: "Mais de 500k mensagens/mês com 98% de retenção",
    saasId: "disparoflow",
    saasName: "DisparoFlow",
    verified: true
  },
  {
    id: "5",
    author: "Dr. Henrique Siqueira",
    role: "Advogado Sócio-Fundador",
    company: "Siqueira & Associados Advocacia",
    segment: "Jurídico",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    quote: "No Direito, perder um prazo é fatal. O AdvCargo nos dá a tranquilidade absoluta de que cada prazo, audiência e honorário contratual está rastreado e notificado no celular de toda a equipe.",
    metricHighlight: "100% dos prazos cumpridos rigorosamente",
    saasId: "advcargo",
    saasName: "AdvCargo",
    verified: true
  },
  {
    id: "6",
    author: "Juliana Paes",
    role: "Cliente e Usuária Premium",
    company: "Compradora Frequente",
    segment: "Consumidor",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    quote: "Economizei R$ 750 no meu novo smartphone graças ao alerta do EsperaAí! O gráfico mostrou que o valor ia cair na quinta-feira e deu exatamente certo.",
    metricHighlight: "Economia imediata de R$ 750",
    saasId: "esperaai",
    saasName: "EsperaAí",
    verified: true
  }
];
