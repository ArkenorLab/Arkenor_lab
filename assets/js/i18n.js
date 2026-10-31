/**
 * ARKENOR LABS — Internationalization (i18n) Engine
 * Rigorous bilingual dictionary (ES / EN) covering all copy, metadata,
 * forms, validations, and interactive components.
 */

const ARKENOR_TRANSLATIONS = {
  es: {
    meta: {
      title: "ARKENOR LABS | Automatización, Desarrollo de Software e Integración",
      description: "Ingeniería tecnológica para automatizar procesos, conectar sistemas y construir soluciones digitales inteligentes para empresas.",
      keywords: "automatización de procesos, desarrollo de software a medida, integración de sistemas, inteligencia artificial empresarial, business process automation, API integration"
    },
    nav: {
      home: "Inicio",
      services: "Servicios",
      solutions: "Soluciones",
      methodology: "Metodología",
      differentiators: "Nosotros",
      contact: "Contacto",
      cta: "Solicitar cotización"
    },
    hero: {
      badge: "ENGINEERING · AUTOMATION · SOFTWARE",
      title: "Convertimos procesos complejos en soluciones inteligentes.",
      description: "Diseñamos, desarrollamos e integramos tecnología para optimizar operaciones, automatizar procesos y conectar ecosistemas digitales.",
      ctaPrimary: "Solicitar cotización",
      ctaSecondary: "Explorar servicios",
      telemetry: {
        architecture: "Arquitectura: Escalable",
        pipeline: "Pipeline: Activo 99.98%",
        latency: "Latencia Ecosistema: < 14ms"
      }
    },
    valueProp: {
      tag: "PROPUESTA DE VALOR",
      title: "Más inteligencia. Menos fricción. Mejores resultados.",
      subtitle: "Ayudamos a las organizaciones a optimizar sus operaciones eliminando cuellos de botella manuales y unificando su infraestructura digital.",
      pillars: [
        {
          num: "01",
          title: "Intelligent Automation",
          desc: "Automatización de tareas críticas, flujos de trabajo transversales y procesamiento inteligente de información para elevar la productividad operativa.",
          metric: "Hasta -70% tiempo operativo"
        },
        {
          num: "02",
          title: "Custom Software",
          desc: "Desarrollo de aplicaciones y plataformas robustas diseñadas a la medida de la lógica y escala específica de tu negocio.",
          metric: "Arquitecturas escalables"
        },
        {
          num: "03",
          title: "System Integration",
          desc: "Conexión bidireccional y segura entre plataformas, APIs, ERPs, CRMs y bases de datos heterogéneas sin fricción.",
          metric: "Sincronización en tiempo real"
        }
      ]
    },
    services: {
      tag: "CAPACIDADES TÉCNICAS",
      title: "Servicios de Ingeniería Especializada",
      subtitle: "Soluciones tecnológicas diseñadas con rigor de ingeniería, código limpio y visión estratégica de negocio.",
      requestService: "Cotizar este servicio",
      items: [
        {
          id: "automation",
          title: "BUSINESS PROCESS AUTOMATION",
          desc: "Automatización de procesos empresariales, flujos de aprobación, procesamiento de documentos y tareas repetitivas de alta carga.",
          benefit: "Eliminación de errores manuales y aceleración de ciclos operativos.",
          tags: ["Workflows", "RPA", "OCR / Docs", "Approval Flows"]
        },
        {
          id: "software",
          title: "CUSTOM SOFTWARE DEVELOPMENT",
          desc: "Diseño y desarrollo de aplicaciones web de alto rendimiento, plataformas empresariales seguras y software personalizado a medida.",
          benefit: "Control total del código, sin dependencias de soluciones genéricas limitantes.",
          tags: ["Web Apps", "Enterprise Core", "Microservicios", "Cloud Native"]
        },
        {
          id: "integration",
          title: "API & SYSTEM INTEGRATION",
          desc: "Integración profunda de APIs, sistemas CRM, ERP, bases de datos y servicios externos para unificar ecosistemas fragmentados.",
          benefit: "Consistencia de datos en tiempo real entre todas las herramientas del negocio.",
          tags: ["REST / GraphQL", "Webhooks", "ERP / CRM Sync", "ETL Pipelines"]
        },
        {
          id: "ai",
          title: "ARTIFICIAL INTELLIGENCE",
          desc: "Implementación de agentes inteligentes, asistentes cognitivos y modelos de IA aplicados a la automatización de procesos clave.",
          benefit: "Toma de decisiones asistida y procesamiento de lenguaje e información no estructurada.",
          tags: ["Agentes Autónomos", "LLMs", "RAG Empresarial", "Predictive ML"]
        },
        {
          id: "data",
          title: "DATA ANALYTICS & BUSINESS INTELLIGENCE",
          desc: "Construcción de dashboards ejecutivos, visualización de indicadores en tiempo real y arquitecturas de datos para decisiones estratégicas.",
          benefit: "Visibilidad total del rendimiento de la empresa respaldada por datos fiables.",
          tags: ["Executive BI", "Data Warehousing", "KPI Tracking", "Real-Time Telemetry"]
        },
        {
          id: "consulting",
          title: "TECHNOLOGY CONSULTING",
          desc: "Consultoría estratégica, diagnóstico de infraestructura, diseño de arquitectura de software y optimización continua de procesos técnicos.",
          benefit: "Claridad técnica antes de invertir en desarrollos costosos y desalineados.",
          tags: ["Tech Architecture", "Audit & Security", "Cloud Strategy", "Process Re-engineering"]
        }
      ]
    },
    solutions: {
      tag: "APLICACIÓN EN LA INDUSTRIA",
      title: "Soluciones y Arquitecturas de Referencia",
      subtitle: "Modelos de implementación tecnológica orientados a desafíos reales de escala empresarial.",
      disclaimer: "Nota: Los casos corresponden a escenarios ilustrativos de arquitectura tecnológica para fines demostrativos.",
      tabs: [
        {
          id: "operations",
          name: "Automatización Operativa",
          title: "Orquestación Automatizada de Operaciones y Aprobaciones",
          summary: "Pipeline de automatización que centraliza peticiones, valida documentos con IA y ejecuta transacciones sin intervención manual.",
          specs: [
            { label: "Tiempo de Respuesta", val: "< 2 segundos" },
            { label: "Validación de Datos", val: "Multinivel asistida" },
            { label: "Auditoría", val: "Trazabilidad 100%" }
          ],
          diagramLabel: "Flujo de Orquestación"
        },
        {
          id: "ecosystem",
          name: "Integración de Ecosistemas",
          title: "Hub Unificado de Conexión ERP, CRM y Servicios en la Nube",
          summary: "Capa de middleware que intercomunica bases de datos legadas con plataformas SaaS modernas mediante eventos en tiempo real.",
          specs: [
            { label: "Conectores", val: "Bidi REST / gRPC" },
            { label: "Event Broker", val: "Message Queues" },
            { label: "Tolerancia a Fallos", val: "Circuit Breaker" }
          ],
          diagramLabel: "Topología de Integración"
        },
        {
          id: "ai-agents",
          name: "Inteligencia Artificial",
          title: "Agentes Cognitivos para Procesamiento de Casos Complejos",
          summary: "Red de agentes especializados que extraen datos de contratos, analizan riesgos y redactan respuestas contextualizadas.",
          specs: [
            { label: "Pipeline", val: "Retrieval-Augmented (RAG)" },
            { label: "Privacidad", val: "Zero-Data Retention" },
            { label: "Precisión", val: "Supervisión humana en bucle" }
          ],
          diagramLabel: "Matriz de Agentes"
        },
        {
          id: "platforms",
          name: "Plataformas Digitales",
          title: "Software Empresarial Multitenant de Alta Disponibilidad",
          summary: "Arquitectura modular en microservicios diseñada para soportar picos masivos de transacciones concurrentes con seguridad bancaria.",
          specs: [
            { label: "Disponibilidad", val: "99.99% SLA Target" },
            { label: "Seguridad", val: "RBAC + Encriptación AES-256" },
            { label: "Infraestructura", val: "Kubernetes / Serverless" }
          ],
          diagramLabel: "Arquitectura de Software"
        },
        {
          id: "analytics",
          name: "Gestión y Análisis de Datos",
          title: "Data Pipeline y Dashboard Ejecutivo en Tiempo Real",
          summary: "Ingesta continua de telemetría de negocio, normalización en data warehouse y presentación en paneles ejecutivos reactivos.",
          specs: [
            { label: "Frecuencia de Actualización", val: "Sub-segundo" },
            { label: "Métricas Monitoreadas", val: "+50 KPIs clave" },
            { label: "Alertamiento", val: "Detección de anomalías" }
          ],
          diagramLabel: "Telemetría de Datos"
        }
      ]
    },
    methodology: {
      tag: "PROCESO DE INGENIERÍA",
      title: "De la estrategia a la implementación.",
      subtitle: "Un enfoque estructurado que mitiga riesgos, garantiza rigor técnico y asegura un despliegue sin interrupciones.",
      steps: [
        {
          number: "01",
          title: "Discovery",
          desc: "Inmersión profunda en tus procesos actuales, sistemas existentes, requerimientos técnicos y objetivos cuantitativos del negocio.",
          deliverable: "Roadmap Técnico & Alcance de Arquitectura"
        },
        {
          number: "02",
          title: "Architecture",
          desc: "Diseño de la topología de software, definición de esquemas de datos, flujos de integración y protocolos de seguridad.",
          deliverable: "Especificación de Sistema & Prototipos"
        },
        {
          number: "03",
          title: "Development",
          desc: "Construcción modular bajo estándares de código limpio, integración continua (CI/CD) y validación automatizada en entornos de prueba.",
          deliverable: "Builds Funcionales & Testing Exhaustivo"
        },
        {
          number: "04",
          title: "Deployment & Evolution",
          desc: "Puesta en producción segura con monitoreo de rendimiento, documentación exhaustiva y soporte para evolución continua.",
          deliverable: "Despliegue Productivo & Telemetría Activa"
        }
      ]
    },
    differentiators: {
      tag: "POR QUÉ ARKENOR LABS",
      title: "Engineering technology that creates real business value.",
      subtitle: "Combinamos solidez técnica con agilidad de entrega para resolver problemas donde las soluciones genéricas se quedan cortas.",
      items: [
        {
          title: "Soluciones Personalizadas",
          desc: "Cada línea de código y flujo se construye en función de tu ventaja competitiva, sin dependencias forzadas."
        },
        {
          title: "Arquitecturas Escalables",
          desc: "Sistemas diseñados para soportar crecimiento en volumen de datos y usuarios sin degradar velocidad."
        },
        {
          title: "Integración Tecnológica",
          desc: "Conectamos tu ecosistema actual sin obligarte a desechar inversiones previas en software."
        },
        {
          title: "Automatización Inteligente",
          desc: "Optimizamos tareas operativas de punta a punta, permitiendo a tu equipo enfocarse en actividades estratégicas."
        },
        {
          title: "Calidad de Ingeniería",
          desc: "Estándares rigurosos de testing, código mantenible, seguridad por diseño y documentación clara."
        },
        {
          title: "Enfoque en Resultados",
          desc: "Priorizamos entregables que impactan directamente el rendimiento y los costos de tu organización."
        }
      ]
    },
    quote: {
      tag: "INICIEMOS TU PROYECTO",
      title: "Solicitar Propuesta Técnica y Comercial",
      subtitle: "Completa el formulario y un especialista de ingeniería analizará los requerimientos para estructurar una propuesta adaptada a tu organización.",
      form: {
        name: "Nombre completo",
        namePlaceholder: "Ej. Carlos Mendoza",
        company: "Empresa",
        companyPlaceholder: "Ej. Innovación Logística S.A.",
        email: "Correo electrónico corporativo",
        emailPlaceholder: "nombre@empresa.com",
        phone: "WhatsApp / Teléfono",
        phonePlaceholder: "+57 300 000 0000",
        country: "País",
        countrySelect: "Selecciona tu país",
        service: "Servicio de interés",
        serviceSelect: "Selecciona el servicio principal",
        description: "Descripción del proyecto",
        descriptionPlaceholder: "Describe brevemente tus procesos actuales, necesidades o el alcance del software/automatización que deseas implementar...",
        budget: "Presupuesto estimado (opcional)",
        budgetSelect: "Seleccionar rango estimado (opcional)",
        budgetOptions: [
          "Menos de $3,000 USD",
          "$3,000 - $7,000 USD",
          "$7,000 - $15,000 USD",
          "$15,000 - $30,000 USD",
          "Más de $30,000 USD"
        ],
        timeline: "Fecha estimada de implementación (opcional)",
        timelineSelect: "Seleccionar plazo deseado (opcional)",
        timelineOptions: [
          "Inmediato (< 30 días)",
          "1 a 3 meses",
          "3 a 6 meses",
          "Fase de planeación / Exploratoria"
        ],
        submitBtn: "Enviar solicitud técnica",
        submitting: "Procesando solicitud...",
        confidentiality: "Garantizamos estricta confidencialidad bajo estándares de seguridad de datos."
      },
      validation: {
        required: "Este campo es obligatorio.",
        invalidEmail: "Por favor ingresa un correo corporativo válido.",
        invalidPhone: "Ingresa un número telefónico válido con código de país.",
        tooShort: "Por favor proporciona un poco más de contexto (mínimo 15 caracteres)."
      },
      status: {
        successTitle: "Solicitud Recibida Correctamente",
        successMsg: "Gracias por contactar a ARKENOR LABS. Nuestro equipo de ingeniería revisará tus requerimientos y te contactará en menos de 24 horas hábiles.",
        leadId: "ID de Referencia:",
        errorTitle: "No se pudo procesar el envío",
        errorMsg: "Ocurrió un error al conectar con el servidor. Por favor verifica tu conexión o contáctanos directamente por correo o WhatsApp.",
        retryBtn: "Intentar nuevamente"
      }
    },
    ctaFinal: {
      tag: "ACELERACIÓN TECNOLÓGICA",
      title: "Tu próxima ventaja tecnológica comienza aquí.",
      description: "Cuéntanos qué necesitas automatizar, desarrollar o integrar. Diseñemos juntos una solución que impulse tu negocio.",
      btnQuote: "Solicitar cotización",
      btnExpert: "Hablar con un especialista"
    },
    whatsapp: {
      tooltip: "¿Tienes dudas sobre tu proyecto? Conversemos directamente.",
      fallbackModalTitle: "Canal de WhatsApp",
      fallbackModalMsg: "El número oficial de WhatsApp de ARKENOR LABS está en proceso de verificación corporativa. Puedes enviar tu solicitud directamente a través de nuestro formulario técnico o correo electrónico.",
      btnGoToForm: "Ir al Formulario de Cotización"
    },
    footer: {
      descriptor: "AUTOMATION · SOFTWARE · INTEGRATION",
      about: "Ingeniería tecnológica especializada en automatización inteligente de procesos, desarrollo de software a medida e integración de ecosistemas digitales empresariales.",
      tagline: "ARKENOR LABS — Engineering a more connected future.",
      colNav: "Navegación",
      colServices: "Servicios",
      colSolutions: "Soluciones",
      colLegal: "Legal & Privacidad",
      privacy: "Política de Privacidad",
      terms: "Términos y Condiciones",
      rights: "Todos los derechos reservados.",
      socialPending: "Enlace oficial próximamente."
    },
    legalModals: {
      privacyTitle: "Política de Privacidad y Tratamiento de Datos",
      privacyBody: `En ARKENOR LABS, la seguridad y confidencialidad de la información empresarial es nuestra máxima prioridad técnica.

1. Uso de la Información: Los datos suministrados a través de nuestros formularios técnicos o canales de comunicación se utilizarán exclusivamente para evaluar la viabilidad de proyectos, estructurar propuestas de ingeniería y establecer contacto comercial directo.
2. No Comercialización: ARKENOR LABS no vende, cede ni transfiere información de clientes o proyectos a terceros.
3. Seguridad: Implementamos protocolos de encriptación y almacenamiento restringido para salvaguardar los requerimientos comerciales y técnicos compartidos.
4. Derechos: Puedes solicitar la actualización, consulta o eliminación de tus datos de contacto en cualquier momento enviando una comunicación formal a nuestros canales autorizados.`,
      termsTitle: "Términos de Servicio y Condiciones Generales",
      termsBody: `El presente sitio web y sus contenidos son propiedad de ARKENOR LABS.

1. Alcance: La información técnica, arquitecturas de referencia y diagramas mostrados en este portal tienen fines informativos e ilustrativos sobre nuestras capacidades de ingeniería de software, automatización e integración de sistemas.
2. Propuestas Técnicas: Toda cotización formal de servicios está sujeta a una etapa previa de levantamiento de requerimientos y a la suscripción de un Acuerdo de Nivel de Servicio (SLA) y contrato formal de desarrollo.
3. Propiedad Intelectual: Los logotipos, marcas, código base y metodologías de ARKENOR LABS están protegidos por leyes de propiedad intelectual internacionales.`
    }
  },

  en: {
    meta: {
      title: "ARKENOR LABS | Automation, Custom Software & System Integration",
      description: "Technology engineering to automate operations, connect systems, and build intelligent enterprise digital solutions.",
      keywords: "business process automation, custom software development, system integration, enterprise artificial intelligence, API integration, workflow automation"
    },
    nav: {
      home: "Home",
      services: "Services",
      solutions: "Solutions",
      methodology: "Methodology",
      differentiators: "About",
      contact: "Contact",
      cta: "Request a quote"
    },
    hero: {
      badge: "ENGINEERING · AUTOMATION · SOFTWARE",
      title: "We turn complex processes into intelligent solutions.",
      description: "We design, develop and integrate technology to optimize operations, automate processes and connect digital ecosystems.",
      ctaPrimary: "Request a quote",
      ctaSecondary: "Explore services",
      telemetry: {
        architecture: "Architecture: Scalable",
        pipeline: "Pipeline: Active 99.98%",
        latency: "Ecosystem Latency: < 14ms"
      }
    },
    valueProp: {
      tag: "VALUE PROPOSITION",
      title: "More intelligence. Less friction. Better results.",
      subtitle: "We empower organizations to optimize their operations by eliminating manual friction and unifying fragmented digital infrastructure.",
      pillars: [
        {
          num: "01",
          title: "Intelligent Automation",
          desc: "End-to-end automation of critical tasks, cross-department workflows, and document processing to multiply team throughput.",
          metric: "Up to -70% operational time"
        },
        {
          num: "02",
          title: "Custom Software",
          desc: "Development of robust, bespoke web platforms and cloud-native software built specifically around your exact business rules.",
          metric: "Resilient scalable systems"
        },
        {
          num: "03",
          title: "System Integration",
          desc: "Seamless, bidirectional connectivity between platforms, legacy databases, ERPs, CRMs, and modern third-party APIs.",
          metric: "Real-time sync"
        }
      ]
    },
    services: {
      tag: "CORE CAPABILITIES",
      title: "Specialized Engineering Services",
      subtitle: "High-grade technological solutions built with software engineering rigor, clean architecture, and strategic business focus.",
      requestService: "Request this service",
      items: [
        {
          id: "automation",
          title: "BUSINESS PROCESS AUTOMATION",
          desc: "Automation of enterprise business processes, approval workflows, document ingestion, and repetitive high-friction operations.",
          benefit: "Elimination of human error and dramatic acceleration of operational cycles.",
          tags: ["Workflows", "RPA", "Intelligent OCR", "Approval Gates"]
        },
        {
          id: "software",
          title: "CUSTOM SOFTWARE DEVELOPMENT",
          desc: "Design and construction of high-performance web applications, secure enterprise platforms, and tailored digital architectures.",
          benefit: "Full intellectual property ownership without the constraints of generic off-the-shelf tools.",
          tags: ["Web Platforms", "Core Systems", "Microservices", "Cloud Native"]
        },
        {
          id: "integration",
          title: "API & SYSTEM INTEGRATION",
          desc: "Deep integration of APIs, CRM, ERP, relational/NoSQL databases, and external cloud services to harmonize fragmented ecosystems.",
          benefit: "Real-time data integrity across your entire software tech stack.",
          tags: ["REST / GraphQL", "Webhooks", "ERP / CRM Sync", "ETL Pipelines"]
        },
        {
          id: "ai",
          title: "ARTIFICIAL INTELLIGENCE",
          desc: "Deployment of autonomous agents, cognitive assistants, and enterprise AI models applied to core business workflows.",
          benefit: "Augmented decision-making and seamless processing of unstructured data.",
          tags: ["Autonomous Agents", "Enterprise LLMs", "RAG Pipelines", "Predictive ML"]
        },
        {
          id: "data",
          title: "DATA ANALYTICS & BUSINESS INTELLIGENCE",
          desc: "Construction of executive dashboards, real-time telemetry, and resilient data architectures for high-conviction decision-making.",
          benefit: "Uncompromised, single-source-of-truth visibility into corporate performance.",
          tags: ["Executive BI", "Data Warehousing", "KPI Tracking", "Real-Time Telemetry"]
        },
        {
          id: "consulting",
          title: "TECHNOLOGY CONSULTING",
          desc: "Strategic advisory, technical infrastructure audits, enterprise software architecture, and continuous process optimization.",
          benefit: "Architectural clarity before committing capital to misaligned development.",
          tags: ["Tech Architecture", "Security Audits", "Cloud Strategy", "Process Re-engineering"]
        }
      ]
    },
    solutions: {
      tag: "INDUSTRY APPLICATION",
      title: "Reference Solutions & Architectures",
      subtitle: "Production-ready technological patterns engineered for enterprise scale and mission-critical performance.",
      disclaimer: "Note: The following examples represent illustrative architectural scenarios for technical demonstration.",
      tabs: [
        {
          id: "operations",
          name: "Operations Automation",
          title: "Automated Operations & Multi-Tier Approval Orchestration",
          summary: "An autonomous workflow pipeline that aggregates intake requests, validates contracts with AI, and triggers accounting actions without manual delay.",
          specs: [
            { label: "Response Time", val: "< 2 seconds" },
            { label: "Data Validation", val: "Multi-tiered AI-assisted" },
            { label: "Audit Log", val: "100% Cryptographic Trace" }
          ],
          diagramLabel: "Orchestration Pipeline"
        },
        {
          id: "ecosystem",
          name: "Ecosystem Integration",
          title: "Unified Integration Mesh for ERP, CRM & Cloud Services",
          summary: "A resilient event-driven middleware connecting legacy on-prem databases with modern SaaS APIs through fault-tolerant messaging channels.",
          specs: [
            { label: "Protocols", val: "Bidirectional REST / gRPC" },
            { label: "Event Broker", val: "Distributed Message Queues" },
            { label: "Fault Handling", val: "Automated Circuit Breaker" }
          ],
          diagramLabel: "Integration Topology"
        },
        {
          id: "ai-agents",
          name: "Applied AI",
          title: "Autonomous Cognitive Agents for Complex Knowledge Workflows",
          summary: "A mesh of domain-specific agents that parse complex agreements, evaluate regulatory compliance, and draft contextualized executive briefs.",
          specs: [
            { label: "Architecture", val: "Retrieval-Augmented (RAG)" },
            { label: "Privacy Guard", val: "Zero-Data Retention" },
            { label: "Safety", val: "Human-in-the-loop validation" }
          ],
          diagramLabel: "Agent Matrix"
        },
        {
          id: "platforms",
          name: "Digital Platforms",
          title: "High-Availability Multi-Tenant Enterprise Software",
          summary: "Modular microservices architecture engineered to sustain millions of concurrent transactions with enterprise-grade encryption and zero downtime.",
          specs: [
            { label: "SLA Target", val: "99.99% Availability" },
            { label: "Security", val: "RBAC + AES-256 at Rest" },
            { label: "Infra", val: "Kubernetes / Serverless Grid" }
          ],
          diagramLabel: "Software Architecture"
        },
        {
          id: "analytics",
          name: "Data Analytics",
          title: "Real-Time Telemetry Pipeline & Executive Intelligence Hub",
          summary: "Continuous streaming ingestion of operational telemetry, normalized into columnar data warehouses and presented on reactive executive dashboards.",
          specs: [
            { label: "Refresh Latency", val: "Sub-second" },
            { label: "Tracked KPIs", val: "+50 Core Business Metrics" },
            { label: "Alerting", val: "Automated Anomaly Detection" }
          ],
          diagramLabel: "Data Telemetry"
        }
      ]
    },
    methodology: {
      tag: "ENGINEERING PROCESS",
      title: "From strategy to implementation.",
      subtitle: "A disciplined, step-by-step engineering roadmap designed to de-risk delivery, enforce code standards, and guarantee smooth rollout.",
      steps: [
        {
          number: "01",
          title: "Discovery",
          desc: "In-depth audit of current processes, existing technology stacks, system dependencies, and quantifiable business targets.",
          deliverable: "Technical Roadmap & Architecture Scope"
        },
        {
          number: "02",
          title: "Architecture",
          desc: "System topology blueprinting, database schema definition, API integration contracts, and zero-trust security design.",
          deliverable: "System Specification & Interactive Wireframes"
        },
        {
          number: "03",
          title: "Development",
          desc: "Modular coding under clean code standards, automated CI/CD pipelines, and rigorous unit/integration testing in sandbox environments.",
          deliverable: "Functional Builds & Comprehensive QA"
        },
        {
          number: "04",
          title: "Deployment & Evolution",
          desc: "Zero-downtime production launch, live telemetry monitoring, thorough architectural documentation, and continuous scaling.",
          deliverable: "Production Deployment & Active Telemetry"
        }
      ]
    },
    differentiators: {
      tag: "WHY ARKENOR LABS",
      title: "Engineering technology that creates real business value.",
      subtitle: "We combine deep technical craftsmanship with enterprise delivery discipline to solve complex challenges where generic software falls short.",
      items: [
        {
          title: "Customized Solutions",
          desc: "Every line of code and automated workflow is tailored to your unique operational edge, without vendor lock-in."
        },
        {
          title: "Scalable Architectures",
          desc: "Systems engineered from day one to handle heavy traffic and massive data throughput without latency degradation."
        },
        {
          title: "Seamless Integration",
          desc: "We interconnect your existing tech stack without requiring you to abandon prior investments in software."
        },
        {
          title: "Intelligent Automation",
          desc: "We eliminate repetitive manual work across operations, freeing high-value teams to focus on revenue-generating goals."
        },
        {
          title: "Engineering Rigor",
          desc: "Exacting code standards, automated testing suites, security-by-design, and transparent documentation."
        },
        {
          title: "Business-Outcome Focus",
          desc: "We measure success by tangible business metrics: operational efficiency, lower error rates, and rapid ROI."
        }
      ]
    },
    quote: {
      tag: "START YOUR INITIATIVE",
      title: "Request a Technical & Commercial Proposal",
      subtitle: "Fill out the project brief below. An engineering lead will review your specifications and prepare an architecture and proposal tailored to your business.",
      form: {
        name: "Full Name",
        namePlaceholder: "e.g., Sarah Jenkins",
        company: "Company",
        companyPlaceholder: "e.g., Apex Logistics Corp",
        email: "Corporate Email",
        emailPlaceholder: "name@company.com",
        phone: "WhatsApp / Phone",
        phonePlaceholder: "+1 (555) 000-0000",
        country: "Country",
        countrySelect: "Select your country",
        service: "Primary Service of Interest",
        serviceSelect: "Select primary service",
        description: "Project Description",
        descriptionPlaceholder: "Briefly outline your current workflow challenges, technical requirements, or the scope of software/automation you aim to deploy...",
        budget: "Estimated Budget (optional)",
        budgetSelect: "Select budget range (optional)",
        budgetOptions: [
          "Under $3,000 USD",
          "$3,000 - $7,000 USD",
          "$7,000 - $15,000 USD",
          "$15,000 - $30,000 USD",
          "Over $30,000 USD"
        ],
        timeline: "Target Implementation Timeline (optional)",
        timelineSelect: "Select desired timeframe (optional)",
        timelineOptions: [
          "Immediate (< 30 days)",
          "1 to 3 months",
          "3 to 6 months",
          "Planning / Exploratory stage"
        ],
        submitBtn: "Submit Technical Request",
        submitting: "Processing Request...",
        confidentiality: "Strict enterprise data confidentiality guaranteed under NDAs."
      },
      validation: {
        required: "This field is required.",
        invalidEmail: "Please provide a valid corporate email address.",
        invalidPhone: "Please enter a valid phone number with country code.",
        tooShort: "Please provide a bit more project context (at least 15 characters)."
      },
      status: {
        successTitle: "Request Received Successfully",
        successMsg: "Thank you for contacting ARKENOR LABS. Our engineering leads will review your specs and reach out within 24 business hours.",
        leadId: "Reference ID:",
        errorTitle: "Submission could not be completed",
        errorMsg: "An error occurred while connecting to the server. Please verify your connection or reach out directly via email or WhatsApp.",
        retryBtn: "Try Again"
      }
    },
    ctaFinal: {
      tag: "TECHNOLOGICAL ACCELERATION",
      title: "Your next technological advantage starts here.",
      description: "Tell us what you need to automate, develop, or integrate. Let's engineer a solution that drives your organization forward.",
      btnQuote: "Request a quote",
      btnExpert: "Speak with a specialist"
    },
    whatsapp: {
      tooltip: "Questions about your project? Chat directly with engineering.",
      fallbackModalTitle: "WhatsApp Business Channel",
      fallbackModalMsg: "ARKENOR LABS' official WhatsApp Business number is currently undergoing corporate verification. Please submit your project brief through our technical quote form or direct corporate email.",
      btnGoToForm: "Go to Quote Form"
    },
    footer: {
      descriptor: "AUTOMATION · SOFTWARE · INTEGRATION",
      about: "Technology engineering firm specializing in intelligent process automation, custom software development, and enterprise digital ecosystem integration.",
      tagline: "ARKENOR LABS — Engineering a more connected future.",
      colNav: "Navigation",
      colServices: "Services",
      colSolutions: "Solutions",
      colLegal: "Legal & Privacy",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      rights: "All rights reserved.",
      socialPending: "Official link coming soon."
    },
    legalModals: {
      privacyTitle: "Privacy Policy & Data Protection",
      privacyBody: `At ARKENOR LABS, safeguarding corporate data and project specifications is our fundamental technical principle.

1. Information Usage: Information submitted through our project inquiry forms is strictly used to evaluate project feasibility, formulate technical architecture blueprints, and facilitate direct commercial communication.
2. No Third-Party Reselling: ARKENOR LABS never sells, trades, or distributes client or project data to third-party brokers.
3. Security Controls: We maintain strict encryption-at-rest and least-privilege access controls for all received technical briefs.
4. Data Subject Rights: You may request review, modification, or removal of your corporate contact data at any time by contacting our authorized channels.`,
      termsTitle: "Terms of Service & Engagement",
      termsBody: `This website and its associated content are the property of ARKENOR LABS.

1. Scope: All reference diagrams, technical overviews, and architectural mockups are published for informational and illustrative purposes regarding our engineering capabilities.
2. Formal Proposals: Binding commitments and service levels require a comprehensive technical discovery phase, formalized statement of work (SOW), and mutually signed Service Level Agreement (SLA).
3. Intellectual Property: Brandmarks, software designs, and proprietary methodologies of ARKENOR LABS are protected under international intellectual property regulations.`
    }
  }
};

class I18nManager {
  constructor() {
    this.currentLang = this.detectLanguage();
  }

  detectLanguage() {
    // 1. Check URL path (/es or /en)
    const path = window.location.pathname.toLowerCase();
    if (path.includes('/en') || path.endsWith('/en')) {
      return 'en';
    }
    if (path.includes('/es') || path.endsWith('/es')) {
      return 'es';
    }

    // 2. Check query param ?lang=
    const params = new URLSearchParams(window.location.search);
    const langParam = params.get('lang');
    if (langParam === 'en' || langParam === 'es') {
      return langParam;
    }

    // 3. Check localStorage
    const saved = localStorage.getItem('arkenor_lang');
    if (saved === 'en' || saved === 'es') {
      return saved;
    }

    // Default to Spanish as requested
    return 'es';
  }

  setLanguage(lang) {
    if (lang !== 'es' && lang !== 'en') return;
    this.currentLang = lang;
    localStorage.setItem('arkenor_lang', lang);
    document.documentElement.lang = lang;
    
    // Update active state in switches
    this.updateSwitchersUI();

    // Re-render all elements with data-i18n
    this.applyTranslations();

    // Trigger custom event for dynamic components (canvas, interactive solutions)
    window.dispatchEvent(new CustomEvent('arkenor:languageChanged', { detail: { lang } }));
  }

  getTranslation(keyPath) {
    const keys = keyPath.split('.');
    let current = ARKENOR_TRANSLATIONS[this.currentLang];
    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        // Fallback to ES
        let fallback = ARKENOR_TRANSLATIONS['es'];
        for (const fbKey of keys) {
          if (fallback && fallback[fbKey] !== undefined) {
            fallback = fallback[fbKey];
          } else {
            return keyPath;
          }
        }
        return fallback;
      }
    }
    return current;
  }

  applyTranslations() {
    // 1. Regular text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const translation = this.getTranslation(key);
      if (typeof translation === 'string') {
        el.textContent = translation;
      }
    });

    // 2. HTML content
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      const translation = this.getTranslation(key);
      if (typeof translation === 'string') {
        el.innerHTML = translation;
      }
    });

    // 3. Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const translation = this.getTranslation(key);
      if (typeof translation === 'string') {
        el.setAttribute('placeholder', translation);
      }
    });

    // 4. Titles & meta
    const metaTitle = this.getTranslation('meta.title');
    const metaDesc = this.getTranslation('meta.description');
    if (metaTitle && typeof metaTitle === 'string') document.title = metaTitle;
    const descEl = document.querySelector('meta[name="description"]');
    if (descEl && metaDesc && typeof metaDesc === 'string') descEl.setAttribute('content', metaDesc);

    // 5. Update service options inside quote form select if exists
    const serviceSelect = document.getElementById('quoteService');
    if (serviceSelect && ARKENOR_CONFIG && ARKENOR_CONFIG.SERVICES) {
      const currentSelected = serviceSelect.value;
      const placeholderText = this.getTranslation('quote.form.serviceSelect');
      serviceSelect.innerHTML = `<option value="" disabled ${!currentSelected ? 'selected' : ''}>${placeholderText}</option>`;
      ARKENOR_CONFIG.SERVICES.forEach(svc => {
        const opt = document.createElement('option');
        opt.value = svc.id;
        opt.textContent = this.currentLang === 'en' ? svc.en : svc.es;
        if (currentSelected === svc.id) opt.selected = true;
        serviceSelect.appendChild(opt);
      });
    }

    // 6. Update Budget & Timeline options
    this.updateDropdowns();
  }

  updateDropdowns() {
    const budgetSelect = document.getElementById('quoteBudget');
    if (budgetSelect) {
      const currentVal = budgetSelect.value;
      const budgetOpts = this.getTranslation('quote.form.budgetOptions');
      const placeholder = this.getTranslation('quote.form.budgetSelect');
      budgetSelect.innerHTML = `<option value="">${placeholder}</option>`;
      if (Array.isArray(budgetOpts)) {
        budgetOpts.forEach(optVal => {
          const opt = document.createElement('option');
          opt.value = optVal;
          opt.textContent = optVal;
          if (currentVal === optVal) opt.selected = true;
          budgetSelect.appendChild(opt);
        });
      }
    }

    const timelineSelect = document.getElementById('quoteTimeline');
    if (timelineSelect) {
      const currentVal = timelineSelect.value;
      const timeOpts = this.getTranslation('quote.form.timelineOptions');
      const placeholder = this.getTranslation('quote.form.timelineSelect');
      timelineSelect.innerHTML = `<option value="">${placeholder}</option>`;
      if (Array.isArray(timeOpts)) {
        timeOpts.forEach(optVal => {
          const opt = document.createElement('option');
          opt.value = optVal;
          opt.textContent = optVal;
          if (currentVal === optVal) opt.selected = true;
          timelineSelect.appendChild(opt);
        });
      }
    }
  }

  updateSwitchersUI() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      const lang = btn.getAttribute('data-lang');
      if (lang === this.currentLang) {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      }
    });
  }

  init() {
    this.setLanguage(this.currentLang);

    // Attach click listeners to language switchers
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const selectedLang = btn.getAttribute('data-lang');
        if (selectedLang) {
          this.setLanguage(selectedLang);
          // Optional sync with history state without full page reload
          if (window.history && window.history.pushState) {
            const url = new URL(window.location);
            url.searchParams.set('lang', selectedLang);
            window.history.pushState({}, '', url);
          }
        }
      });
    });
  }
}

// Global instance
window.i18n = new I18nManager();

document.addEventListener('DOMContentLoaded', () => {
  window.i18n.init();
});

