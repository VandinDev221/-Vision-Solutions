export const SITE_CONTACT = {
  // E-mail real que recebe as mensagens
  realEmail: "lindosovanderson@gmail.com",

  // E-mail visual exibido na interface como identidade da marca
  displayEmail: "contato@visionsolutions.dev.br",

  // WhatsApp real do proprietário (DDD 98 - São Luís, MA)
  whatsappNumber: "5598985894988",
  displayWhatsapp: "+55 (98) 98589-4988",

  // Localização real
  location: "São Luís, MA — Brasil",

  // URL para abrir a tela de composição do Gmail em nova aba
  getGmailComposeUrl: (subject = "Solicitação de Orçamento — Vision Solutions", body = "") => {
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    return `https://mail.google.com/mail/?view=cm&fs=1&to=lindosovanderson@gmail.com&su=${encodedSubject}&body=${encodedBody}`;
  },

  // URL para abrir o WhatsApp comercial em nova aba
  getWhatsappUrl: (message = "Olá! Gostaria de solicitar um orçamento para a Vision Solutions.") => {
    const encodedMsg = encodeURIComponent(message);
    return `https://wa.me/5598985894988?text=${encodedMsg}`;
  }
};
