const ENDPOINT = '/send-enquiry.php';

export interface BindOptions {
	successEl?: Element | null;
	errorEl?: Element | null;
	/** Called right before the FormData is built, e.g. to populate hidden fields. */
	beforeSubmit?: (form: HTMLFormElement) => void;
}

const ERROR_MESSAGES: Record<string, string> = {
	validation: 'Please check your details (and attachment type/size) and try again.',
	mailer: "Something went wrong sending your message. Please try again or contact us directly.",
	method: 'Something went wrong. Please try again.',
};

export function bindEnquiryForm(form: HTMLFormElement | null, options: BindOptions = {}) {
	if (!form) return;

	const { successEl, errorEl, beforeSubmit } = options;
	const submitButton = form.querySelector<HTMLButtonElement>('button[type="submit"]');

	form.addEventListener('submit', async (e) => {
		e.preventDefault();
		errorEl?.setAttribute('hidden', '');
		successEl?.setAttribute('hidden', '');
		beforeSubmit?.(form);

		submitButton?.setAttribute('disabled', '');

		try {
			const response = await fetch(ENDPOINT, {
				method: 'POST',
				headers: { 'X-Requested-With': 'XMLHttpRequest' },
				body: new FormData(form),
			});

			const data = await response.json().catch(() => null);
			const status = data?.status ?? 'mailer';

			if (status === 'success') {
				form.reset();
				successEl?.removeAttribute('hidden');
				document.dispatchEvent(new CustomEvent('enquiry:success', { detail: { form: form.id || form.className } }));
			} else if (errorEl) {
				errorEl.textContent = ERROR_MESSAGES[status] ?? ERROR_MESSAGES.mailer;
				errorEl.removeAttribute('hidden');
			}
		} catch {
			if (errorEl) {
				errorEl.textContent = ERROR_MESSAGES.mailer;
				errorEl.removeAttribute('hidden');
			}
		} finally {
			submitButton?.removeAttribute('disabled');
		}
	});
}
