/**
 * ARKENOR LABS — Centralized Configuration
 * All business contact points, social channels, and credentials are configured here.
 * Fields left empty ("") are automatically handled with graceful fallbacks
 * and will never display dummy/mock data to the public.
 */

const ARKENOR_CONFIG = {
  COMPANY_NAME: "ARKENOR LABS",
  DESCRIPTOR: "AUTOMATION · SOFTWARE · INTEGRATION",
  
  // Pending corporate settings (to be filled by the client):
  COMPANY_DOMAIN: "",     // e.g., "https://arkenorlabs.com"
  CONTACT_EMAIL: "",      // e.g., "contact@arkenorlabs.com"
  WHATSAPP_NUMBER: "",    // e.g., "573001234567" (without '+' or spaces, only digits)
  LINKEDIN_URL: "",       // e.g., "https://linkedin.com/company/arkenorlabs"
  INSTAGRAM_URL: "",      // e.g., "https://instagram.com/arkenorlabs"

  // Pre-configured official WhatsApp texts
  WHATSAPP_MESSAGES: {
    es: "Hola, estoy interesado en los servicios de ARKENOR LABS. Me gustaría conocer cómo pueden ayudarme con un proyecto de automatización, desarrollo de software o integración de sistemas.",
    en: "Hello, I'm interested in ARKENOR LABS services. I'd like to learn how you can help with an automation, software development or system integration project."
  },

  // Official Service Catalog
  SERVICES: [
    { id: "automation", es: "Automatización de Procesos", en: "Business Process Automation" },
    { id: "software", es: "Desarrollo de Software", en: "Custom Software Development" },
    { id: "integration", es: "Integración de Sistemas", en: "API & System Integration" },
    { id: "ai", es: "Inteligencia Artificial", en: "Artificial Intelligence" },
    { id: "data", es: "Data & BI", en: "Data Analytics & BI" },
    { id: "consulting", es: "Consultoría Tecnológica", en: "Technology Consulting" }
  ],

  // ── WEB3FORMS (formulario estático sin servidor) ──────────────────────────
  // Pasos para activar el envío de correos:
  //   1. Ve a https://web3forms.com
  //   2. Ingresa el email donde quieres recibir las cotizaciones
  //   3. Copia el Access Key y pégalo abajo
  WEB3FORMS_ACCESS_KEY: "YOUR_WEB3FORMS_ACCESS_KEY"
};

// Export for Node.js environments if required
if (typeof module !== "undefined" && module.exports) {
  module.exports = ARKENOR_CONFIG;
}

