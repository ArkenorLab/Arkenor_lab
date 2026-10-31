/**
 * ARKENOR LABS — Core Client Controller
 * Manages sticky nav, mobile menu drawer, WhatsApp integration with conditional fallback,
 * interactive solutions showcase, modals, and smooth interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileMenu();
  initWhatsAppButtons();
  initSolutionsTabs();
  initServiceQuoteTriggers();
  initLegalModals();
  initSocialLinks();
});

/* 1. STICKY HEADER & SCROLL BEHAVIOR */
function initStickyHeader() {
  const header = document.getElementById('siteHeader');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* 2. MOBILE MENU DRAWER */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const drawer = document.getElementById('mobileNavDrawer');
  const overlay = document.getElementById('mobileNavOverlay');
  const closeBtn = document.getElementById('mobileNavClose');
  const navLinks = drawer ? drawer.querySelectorAll('a') : [];

  if (!toggleBtn || !drawer) return;

  function openMenu() {
    drawer.classList.add('active');
    if (overlay) overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    toggleBtn.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    drawer.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
    toggleBtn.setAttribute('aria-expanded', 'false');
  }

  toggleBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (overlay) overlay.addEventListener('click', closeMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

/* 3. WHATSAPP CONDITIONAL INTEGRATION */
function initWhatsAppButtons() {
  const updateWALinks = () => {
    const config = window.ARKENOR_CONFIG || {};
    const waNumber = (config.WHATSAPP_NUMBER || '').trim();
    const currentLang = (window.i18n && window.i18n.currentLang) ? window.i18n.currentLang : 'es';
    const message = (config.WHATSAPP_MESSAGES && config.WHATSAPP_MESSAGES[currentLang]) 
      ? config.WHATSAPP_MESSAGES[currentLang] 
      : "Hola, estoy interesado en los servicios de ARKENOR LABS.";
    const encodedMsg = encodeURIComponent(message);

    const waButtons = document.querySelectorAll('.js-whatsapp-trigger');

    waButtons.forEach(btn => {
      // Remove previous listener clone
      const newBtn = btn.cloneNode(true);
      btn.parentNode.replaceChild(newBtn, btn);

      if (waNumber && waNumber.length >= 7) {
        // Valid WhatsApp configured
        newBtn.href = `https://wa.me/${waNumber}?text=${encodedMsg}`;
        newBtn.target = '_blank';
        newBtn.rel = 'noopener noreferrer';
      } else {
        // Empty or pending: Requirement Section 13:
        // "Si el número está vacío, mostrar un acceso de contacto alternativo y no generar enlaces WhatsApp inválidos."
        newBtn.href = '#cotizacion';
        newBtn.removeAttribute('target');
        newBtn.removeAttribute('rel');
        newBtn.addEventListener('click', (e) => {
          e.preventDefault();
          openWhatsAppFallbackModal();
        });
      }
    });
  };

  updateWALinks();
  window.addEventListener('arkenor:languageChanged', updateWALinks);
}

function openWhatsAppFallbackModal() {
  const modal = document.getElementById('whatsappFallbackModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  } else {
    // If modal doesn't exist, scroll directly to quote form
    const quoteSec = document.getElementById('cotizacion');
    if (quoteSec) quoteSec.scrollIntoView({ behavior: 'smooth' });
  }
}

/* 4. SOLUTIONS & REFERENCE ARCHITECTURE SHOWCASE (TABS) */
function initSolutionsTabs() {
  const tabButtons = document.querySelectorAll('.solution-tab-btn');
  const panels = document.querySelectorAll('.solution-panel');

  if (!tabButtons.length || !panels.length) return;

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');

      tabButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      panels.forEach(p => {
        p.classList.remove('active');
        p.setAttribute('hidden', 'true');
      });

      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const activePanel = document.getElementById(`solution-${targetId}`);
      if (activePanel) {
        activePanel.classList.add('active');
        activePanel.removeAttribute('hidden');
      }
    });
  });
}

/* 5. SERVICE CARD "COTIZAR ESTE SERVICIO" TRIGGERS */
function initServiceQuoteTriggers() {
  document.querySelectorAll('.js-select-service').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceId = btn.getAttribute('data-service-id');
      const select = document.getElementById('quoteService');
      const quoteSection = document.getElementById('cotizacion');

      if (select && serviceId) {
        select.value = serviceId;
        // Visual highlight
        select.classList.add('pulse-focus');
        setTimeout(() => select.classList.remove('pulse-focus'), 1500);
      }

      if (quoteSection) {
        quoteSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/* 6. LEGAL MODALS (PRIVACY & TERMS) */
function initLegalModals() {
  const modal = document.getElementById('legalDocModal');
  if (!modal) return;

  const modalTitle = document.getElementById('legalModalTitle');
  const modalContent = document.getElementById('legalModalContent');
  const closeBtn = modal.querySelector('.modal-close');
  const backdrop = modal.querySelector('.modal-backdrop');

  function openLegalModal(type) {
    const currentLang = window.i18n ? window.i18n.currentLang : 'es';
    const dict = window.ARKENOR_TRANSLATIONS[currentLang]?.legalModals || {};

    if (type === 'privacy') {
      modalTitle.textContent = dict.privacyTitle || 'Política de Privacidad';
      modalContent.innerHTML = formatMarkdownParagraphs(dict.privacyBody || '');
    } else {
      modalTitle.textContent = dict.termsTitle || 'Términos de Servicio';
      modalContent.innerHTML = formatMarkdownParagraphs(dict.termsBody || '');
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLegalModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function formatMarkdownParagraphs(text) {
    return text.split('\n\n').map(p => `<p>${p.replace(/\n/g, '<br>')}</p>`).join('');
  }

  document.querySelectorAll('.js-legal-trigger').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const docType = trigger.getAttribute('data-doc');
      openLegalModal(docType);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLegalModal);
  if (backdrop) backdrop.addEventListener('click', closeLegalModal);

  // Close fallback WhatsApp modal
  const waModal = document.getElementById('whatsappFallbackModal');
  if (waModal) {
    waModal.querySelectorAll('.modal-close, .modal-backdrop, .js-close-wa-modal').forEach(el => {
      el.addEventListener('click', () => {
        waModal.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }
}

/* 7. SOCIAL CHANNELS SETUP (SECTION 14) */
function initSocialLinks() {
  const config = window.ARKENOR_CONFIG || {};

  // LinkedIn
  const linkedinLinks = document.querySelectorAll('.js-social-linkedin');
  linkedinLinks.forEach(el => {
    if (config.LINKEDIN_URL && config.LINKEDIN_URL.trim() !== '') {
      el.href = config.LINKEDIN_URL.trim();
      el.target = '_blank';
      el.rel = 'noopener noreferrer';
    } else {
      // Graceful hidden or disabled state
      el.classList.add('pending-channel');
      el.setAttribute('title', 'LinkedIn Arkenor Labs (Próximamente)');
      el.addEventListener('click', (e) => e.preventDefault());
    }
  });

  // Instagram
  const instagramLinks = document.querySelectorAll('.js-social-instagram');
  instagramLinks.forEach(el => {
    if (config.INSTAGRAM_URL && config.INSTAGRAM_URL.trim() !== '') {
      el.href = config.INSTAGRAM_URL.trim();
      el.target = '_blank';
      el.rel = 'noopener noreferrer';
    } else {
      el.classList.add('pending-channel');
      el.setAttribute('title', 'Instagram Arkenor Labs (Próximamente)');
      el.addEventListener('click', (e) => e.preventDefault());
    }
  });

  // Contact Email
  const emailLinks = document.querySelectorAll('.js-contact-email');
  emailLinks.forEach(el => {
    if (config.CONTACT_EMAIL && config.CONTACT_EMAIL.trim() !== '') {
      el.href = `mailto:${config.CONTACT_EMAIL.trim()}`;
      el.textContent = config.CONTACT_EMAIL.trim();
    } else {
      // Point smoothly to quote form
      el.href = '#cotizacion';
      el.textContent = window.i18n ? window.i18n.getTranslation('nav.contact') : 'Contacto Corporativo';
    }
  });
}

