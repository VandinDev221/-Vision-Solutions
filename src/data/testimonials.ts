export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  quote: string;
  productTag: string;
}

// Arquivo mantido para integridade de tipagem. Depoimentos reais serão inseridos mediante autorização expressa dos clientes.
export const testimonials: Testimonial[] = [];
