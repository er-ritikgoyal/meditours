/**
 * First-touch campaign attribution for enquiry forms.
 *
 * After the page has loaded, keeps the first tagged landing of the browser session
 * (UTM tags, Google/Meta click IDs, the landing page URL and the external referrer) in
 * sessionStorage under `mt_attribution`, and copies it into hidden fields on every
 * enquiry form. Nothing leaves the browser except with a form the visitor submits
 * (send-enquiry.php forwards it to the lead hub). No cookies, no third-party calls.
 */
const STORAGE_KEY = 'mt_attribution';
export const ATTRIBUTION_PARAMS = [
	'utm_source',
	'utm_medium',
	'utm_campaign',
	'utm_term',
	'utm_content',
	'gclid',
	'gbraid',
	'wbraid',
	'fbclid',
] as const;
const MAX_LEN = 500;

type Attribution = Record<string, string>;

function read(): Attribution | null {
	try {
		const raw = sessionStorage.getItem(STORAGE_KEY);
		return raw ? (JSON.parse(raw) as Attribution) : null;
	} catch {
		return null;
	}
}

function write(value: Attribution) {
	try {
		sessionStorage.setItem(STORAGE_KEY, JSON.stringify(value));
	} catch {
		/* storage blocked: forms still work, just without attribution */
	}
}

function fromCurrentPage(): Attribution {
	const params = new URLSearchParams(location.search);
	const out: Attribution = { landing_page: location.href.slice(0, 1000) };
	for (const key of ATTRIBUTION_PARAMS) {
		const v = params.get(key);
		if (v) out[key] = v.slice(0, MAX_LEN);
	}
	try {
		if (document.referrer && new URL(document.referrer).host !== location.host) {
			out.first_referrer = document.referrer.slice(0, MAX_LEN);
		}
	} catch {
		/* malformed referrer */
	}
	return out;
}

const hasCampaign = (a: Attribution | null) => !!a && ATTRIBUTION_PARAMS.some((k) => a[k]);

function capture(): Attribution {
	const stored = read();
	const current = fromCurrentPage();
	// First touch wins; an untagged first page is replaced by the first tagged one.
	if (!stored || (!hasCampaign(stored) && hasCampaign(current))) {
		write(current);
		return current;
	}
	return stored;
}

function fillForms(attribution: Attribution) {
	const fields = ['landing_page', 'first_referrer', ...ATTRIBUTION_PARAMS];
	document.querySelectorAll<HTMLFormElement>('form[data-enquiry-form], form[data-contact-form]').forEach((form) => {
		for (const name of fields) {
			const value = attribution[name];
			if (!value) continue;
			let input = form.querySelector<HTMLInputElement>(`input[type="hidden"][name="${name}"]`);
			if (!input) {
				input = document.createElement('input');
				input.type = 'hidden';
				input.name = name;
				form.appendChild(input);
			}
			input.value = value;
		}
	});
}

function run() {
	fillForms(capture());
}

if (document.readyState === 'complete') run();
else window.addEventListener('load', run, { once: true });
