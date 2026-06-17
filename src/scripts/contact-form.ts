const form = document.getElementById('contact-form') as HTMLFormElement | null;
if (!form) {
  // Contact section not on this page.
} else {
  const statusEl = document.getElementById('contact-form-status');
  const submitBtn = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  const defaultLabel = submitBtn?.textContent?.trim() ?? 'Send Message';
  const sendingLabel = form.dataset.sendingLabel ?? 'Sending…';
  const successMessage =
    form.dataset.successMessage ?? 'Thank you for your message. We will be in touch shortly.';
  const errorMessage =
    form.dataset.errorMessage ?? 'Something went wrong. Please email us directly at info@digmamedical.com.';

  function setStatus(message: string, type: 'success' | 'error' | 'info') {
    if (!statusEl) return;
    statusEl.textContent = message;
    statusEl.classList.remove('hidden', 'text-green-700', 'text-red-700', 'text-muted');
    if (type === 'success') statusEl.classList.add('text-green-700');
    else if (type === 'error') statusEl.classList.add('text-red-700');
    else statusEl.classList.add('text-muted');
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const honey = form.querySelector<HTMLInputElement>('input[name="_honey"]');
    if (honey?.value) return;

    const endpoint = form.dataset.endpoint;
    if (!endpoint) {
      setStatus(errorMessage, 'error');
      return;
    }

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    submitBtn?.setAttribute('disabled', 'true');
    if (submitBtn) submitBtn.textContent = sendingLabel;
    setStatus(sendingLabel, 'info');

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      form.reset();
      setStatus(successMessage, 'success');
    } catch {
      setStatus(errorMessage, 'error');
    } finally {
      submitBtn?.removeAttribute('disabled');
      if (submitBtn) submitBtn.textContent = defaultLabel;
    }
  });
}
