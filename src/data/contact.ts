export const SITE_CONTACT = {
  // E-mail real que recebe as mensagens
  realEmail: "vandersonandrade_dev@outlook.com",

  // E-mail visual exibido na interface
  displayEmail: "vandersonandrade_dev@outlook.com",

  // WhatsApp oficial da Vision Solutions (DDD 98 - São Luís, MA)
  whatsappNumber: "5598989198146",
  displayWhatsapp: "+55 (98) 98919-8146",

  // Instagram oficial da Vision Solutions
  instagramUrl: "https://www.instagram.com/vision_solutionbr/",
  displayInstagram: "@vision_solutionbr",

  // Localização
  location: "São Luís, MA — Brasil",

  // URL universal para envio de e-mail (mailto)
  getEmailComposeUrl: (subject = "Solicitação de Orçamento — Vision Solutions", body = "") => {
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    return `mailto:vandersonandrade_dev@outlook.com?subject=${encodedSubject}&body=${encodedBody}`;
  },

  // URL para abrir tela web do Gmail apontando para o destinatário Outlook
  getGmailComposeUrl: (subject = "Solicitação de Orçamento — Vision Solutions", body = "") => {
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    return `https://mail.google.com/mail/?view=cm&fs=1&to=vandersonandrade_dev@outlook.com&su=${encodedSubject}&body=${encodedBody}`;
  },

  // URL para abrir o WhatsApp comercial em nova aba
  getWhatsappUrl: (message = "Olá! Gostaria de solicitar um orçamento para a Vision Solutions.") => {
    const encodedMsg = encodeURIComponent(message);
    return `https://wa.me/5598989198146?text=${encodedMsg}`;
  }
};
