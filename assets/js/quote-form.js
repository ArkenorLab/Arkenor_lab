/**
 * ARKENOR LABS — Quote Form (Static / Web3Forms)
 * ──────────────────────────────────────────────
 * 100% frontend. Submissions are delivered to the configured
 * email via Web3Forms (https://web3forms.com — free, no server needed).
 *
 * SETUP:
 *   1. Go to https://web3forms.com
 *   2. Enter the recipient email to get your ACCESS KEY
 *   3. Paste it in config.js → WEB3FORMS_ACCESS_KEY
 */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('arkenorQuoteForm');
  if (!form) return;

  const submitBtn    = document.getElementById('quoteSubmitBtn');
  const btnText      = submitBtn.querySelector('.btn-text');
  const btnSpinner   = submitBtn.querySelector('.btn-spinner');
  const formStatus   = document.getElementById('quoteFormStatus');

  // Form fields
  const nameInput    = document.getElementById('quoteName');
  const companyInput = document.getElementById('quoteCompany');
  const emailInput   = document.getElementById('quoteEmail');
  const phoneInput   = document.getElementById('quotePhone');
  const countryInput = document.getElementById('quoteCountry');
  const serviceInput = document.getElementById('quoteService');
  const descInput    = document.getElementById('quoteDescription');
  const honeypot     = document.getElementById('formHoneypot');

  // ── Validation helpers ──────────────────────────────────────────────────────
  function isValidEmail(e) {
    return /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(e.trim());
  }
  function isValidPhone(p) {
    return p.replace(/[^0-9+]/g, '').length >= 7;
  }

  function setError(field, key) {
    const group = field.closest('.form-group');
    group.classList.add('has-error');
    let errEl = group.querySelector('.field-error-msg');
    if (!errEl) {
      errEl = document.createElement('span');
      errEl.className = 'field-error-msg';
      group.appendChild(errEl);
    }
    errEl.textContent = window.i18n ? window.i18n.getTranslation(key) : 'Campo requerido';
    field.setAttribute('aria-invalid', 'true');
  }

  function clearError(field) {
    const group = field.closest('.form-group');
    if (!group) return;
    group.classList.remove('has-error');
    const errEl = group.querySelector('.field-error-msg');
    if (errEl) errEl.remove();
    field.removeAttribute('aria-invalid');
  }

  [nameInput, companyInput, emailInput, phoneInput, countryInput, serviceInput, descInput]
    .forEach(f => { if (f) { f.addEventListener('input', () => clearError(f)); f.addEventListener('change', () => clearError(f)); } });

  // ── Form submit ─────────────────────────────────────────────────────────────
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Bot trap
    if (honeypot && honeypot.value.trim() !== '') return;

    // Validate
    let hasErrors = false;
    const checks = [
      { field: nameInput,    key: 'quote.validation.required',     test: f => f.value.trim() !== '' },
      { field: companyInput, key: 'quote.validation.required',     test: f => f.value.trim() !== '' },
      { field: emailInput,   key: 'quote.validation.invalidEmail', test: f => isValidEmail(f.value) },
      { field: phoneInput,   key: 'quote.validation.invalidPhone', test: f => f.value.trim() !== '' && isValidPhone(f.value) },
      { field: countryInput, key: 'quote.validation.required',     test: f => f.value.trim() !== '' },
      { field: serviceInput, key: 'quote.validation.required',     test: f => f.value.trim() !== '' },
      { field: descInput,    key: 'quote.validation.tooShort',     test: f => f.value.trim().length >= 15 },
    ];

    // Also check required for email if empty (different message)
    if (!emailInput.value.trim()) {
      setError(emailInput, 'quote.validation.required');
      hasErrors = true;
    }

    checks.forEach(({ field, key, test }) => {
      if (!field) return;
      if (!test(field)) { setError(field, key); hasErrors = true; }
    });

    if (hasErrors) {
      const firstError = form.querySelector('.has-error input, .has-error select, .has-error textarea');
      if (firstError) firstError.focus();
      return;
    }

    // ── Check Web3Forms key ─────────────────────────────────────────────────
    const accessKey = (window.ARKENOR_CONFIG && window.ARKENOR_CONFIG.WEB3FORMS_ACCESS_KEY) || '';

    if (!accessKey || accessKey === 'YOUR_WEB3FORMS_ACCESS_KEY') {
      showConfigPendingMessage();
      return;
    }

    // ── Build payload for Web3Forms ─────────────────────────────────────────
    const lang = window.i18n ? window.i18n.currentLang : 'es';
    const serviceMap = {
      automation: lang === 'en' ? 'Business Process Automation' : 'Automatización de Procesos',
      software:   lang === 'en' ? 'Custom Software Development' : 'Desarrollo de Software',
      integration:lang === 'en' ? 'API & System Integration'    : 'Integración de Sistemas',
      ai:         lang === 'en' ? 'Artificial Intelligence'     : 'Inteligencia Artificial',
      data:       lang === 'en' ? 'Data Analytics & BI'         : 'Data Analytics & BI',
      consulting: lang === 'en' ? 'Technology Consulting'       : 'Consultoría Tecnológica',
    };

    const serviceLabel = serviceMap[serviceInput.value] || serviceInput.value;
    const budgetVal    = document.getElementById('quoteBudget')?.value  || '—';
    const timelineVal  = document.getElementById('quoteTimeline')?.value || '—';

    const formData = new FormData();
    formData.append('access_key', accessKey);
    formData.append('subject', `[ARKENOR LABS] Nueva solicitud: ${nameInput.value.trim()} — ${companyInput.value.trim()}`);
    formData.append('from_name', 'ARKENOR LABS · Formulario de Cotización');
    formData.append('botcheck', '');            // Web3Forms honeypot

    // Readable fields that appear in the email body
    formData.append('Nombre',             nameInput.value.trim());
    formData.append('Empresa',            companyInput.value.trim());
    formData.append('Correo',             emailInput.value.trim().toLowerCase());
    formData.append('WhatsApp/Teléfono',  phoneInput.value.trim());
    formData.append('País',              countryInput.value);
    formData.append('Servicio de interés', serviceLabel);
    formData.append('Descripción del proyecto', descInput.value.trim());
    formData.append('Presupuesto estimado', budgetVal);
    formData.append('Plazo de implementación', timelineVal);
    formData.append('Idioma del formulario', lang === 'en' ? 'English' : 'Español');
    formData.append('Fecha de envío', new Date().toLocaleString(lang === 'en' ? 'en-US' : 'es-CO'));

    // ── UI loading state ────────────────────────────────────────────────────
    submitBtn.disabled = true;
    if (btnSpinner) btnSpinner.classList.remove('hidden');
    if (btnText) btnText.textContent = window.i18n ? window.i18n.getTranslation('quote.form.submitting') : 'Procesando...';
    formStatus.innerHTML = '';
    formStatus.className = 'form-status';

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success) {
        form.reset();
        const successTitle = window.i18n ? window.i18n.getTranslation('quote.status.successTitle') : 'Solicitud Recibida';
        const successMsg   = window.i18n ? window.i18n.getTranslation('quote.status.successMsg')   : 'Gracias por contactar a ARKENOR LABS.';
        const refLabel     = window.i18n ? window.i18n.getTranslation('quote.status.leadId')       : 'Ref:';
        const refCode      = `ARK-${Date.now().toString(36).toUpperCase().slice(-6)}`;

        formStatus.className = 'form-status success';
        formStatus.innerHTML = `
          <div class="status-card success-card">
            <div class="status-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00BFA5" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            <div class="status-content">
              <h4>${successTitle}</h4>
              <p>${successMsg}</p>
              <div class="status-lead-ref">
                <span>${refLabel}</span>
                <code>${refCode}</code>
              </div>
            </div>
          </div>`;
        formStatus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

      } else {
        throw new Error(data.message || 'Web3Forms returned error');
      }

    } catch (err) {
      console.error('[ARKENOR] Form error:', err);
      const errorTitle = window.i18n ? window.i18n.getTranslation('quote.status.errorTitle') : 'Error al enviar';
      const errorMsg   = window.i18n ? window.i18n.getTranslation('quote.status.errorMsg')   : 'Por favor intenta de nuevo.';
      const retryLabel = window.i18n ? window.i18n.getTranslation('quote.status.retryBtn')   : 'Reintentar';

      formStatus.className = 'form-status error';
      formStatus.innerHTML = `
        <div class="status-card error-card">
          <div class="status-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff5252" stroke-width="2.5" stroke-linecap="round">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
          </div>
          <div class="status-content">
            <h4>${errorTitle}</h4>
            <p>${errorMsg}</p>
            <button type="button" class="btn-retry" onclick="this.closest('.status-card').remove();document.getElementById('quoteSubmitBtn').disabled=false;">${retryLabel}</button>
          </div>
        </div>`;
    } finally {
      submitBtn.disabled = false;
      if (btnSpinner) btnSpinner.classList.add('hidden');
      if (btnText) btnText.textContent = window.i18n ? window.i18n.getTranslation('quote.form.submitBtn') : 'Enviar solicitud técnica';
    }
  });

  // ── Config pending message (WEB3FORMS key not set yet) ──────────────────────
  function showConfigPendingMessage() {
    formStatus.className = 'form-status';
    formStatus.innerHTML = `
      <div class="status-card" style="background:rgba(255,193,7,0.08);border:1px solid rgba(255,193,7,0.3);">
        <div class="status-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFC107" stroke-width="2.5" stroke-linecap="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
            <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
        </div>
        <div class="status-content">
          <h4 style="color:#FFC107">Formulario pendiente de activación</h4>
          <p style="color:#c4d2da">El envío de correos aún no está configurado. Para activarlo:</p>
          <ol style="color:#84939B;font-size:0.85rem;margin:10px 0;padding-left:20px;line-height:1.8">
            <li>Ve a <a href="https://web3forms.com" target="_blank" rel="noopener" style="color:#00BFA5">web3forms.com</a> (gratis)</li>
            <li>Ingresa el correo receptor de ARKENOR LABS</li>
            <li>Copia el Access Key generado</li>
            <li>Pégalo en <code style="background:#101C25;padding:2px 6px;border-radius:3px;color:#00BFA5">assets/js/config.js</code> → <code style="color:#FFC107">WEB3FORMS_ACCESS_KEY</code></li>
          </ol>
        </div>
      </div>`;
    formStatus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
});
