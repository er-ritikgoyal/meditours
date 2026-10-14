/**
 * Single source of truth mapping an issue type to a severity. Kept as a
 * flat, editable config object (not scattered inline through the detector
 * code) so the severity model can be tuned without touching detection logic
 * — per SEO_AUTOPILOT_ARCHITECTURE.md §14 ("the scoring system should be
 * configurable", same principle applied to issue severity).
 */
export const SEVERITY = {
	// CRITICAL — the page is effectively broken or invisible to search engines
	page_404: 'CRITICAL',
	redirect_loop: 'CRITICAL',
	robots_disallow_all: 'CRITICAL',
	fetch_error: 'CRITICAL',

	// HIGH — directly hurts how the page can rank or be understood at all
	missing_title: 'HIGH',
	missing_meta_description: 'HIGH',
	missing_h1: 'HIGH',
	multiple_h1: 'HIGH',
	broken_internal_link: 'HIGH',
	unexpected_noindex: 'HIGH',
	sitemap_url_not_ok: 'HIGH',

	// MEDIUM — real but not page-breaking; worth fixing in the next pass
	duplicate_title: 'MEDIUM',
	duplicate_meta_description: 'MEDIUM',
	missing_alt_text: 'MEDIUM',
	missing_canonical: 'MEDIUM',
	canonical_mismatch: 'MEDIUM',
	orphan_page: 'MEDIUM',
	redirect_chain: 'MEDIUM',
	page_missing_from_sitemap: 'MEDIUM',

	// LOW — nice-to-have, low urgency
	missing_structured_data: 'LOW',
	thin_content: 'LOW',
	poor_internal_linking: 'LOW',

	// INFO — informational only, not actionable on its own
	slow_response: 'INFO',
	single_redirect: 'INFO',
};

export const THIN_CONTENT_WORD_THRESHOLD = 300;
export const SLOW_RESPONSE_MS = 1000;
export const POOR_LINKING_INBOUND_THRESHOLD = 2;
export const MAX_REDIRECT_HOPS = 10;

export function severityOf(issueType) {
	return SEVERITY[issueType] ?? 'INFO';
}
