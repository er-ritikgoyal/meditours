/**
 * Keeps meta descriptions within what search results show (~160 characters) by dropping
 * whole trailing sentences, then whole trailing clauses. Words inside a kept sentence or
 * clause are never changed, so figures are never altered, only left out with their clause.
 */
export const META_DESCRIPTION_MAX = 160;

// Abbreviations that end with a dot but don't end a sentence ("Dr. Ila Gupta").
// Also single-letter initials ("Dr. S. Sudha", "D.V.L.").
const ABBREVIATION = /(?:(?:^|[\s(])(?:Dr|Dra|Drs|Mr|Mrs|Ms|St|Prof|Sr|Sra|Jr|No|Pvt|Ltd|Co|Inc|vs|etc|approx)|(?:^|[\s(.])\p{Lu})\.$/iu;
// Below this, a clause-trimmed sentence says too little; cut at a word boundary instead.
const MIN_USEFUL = 90;
const SENTENCE_END = /[.!?।。؟]$/;

function splitSentences(text: string): string[] {
	const parts = text.split(/(?<=[.!?।。؟])\s+/);
	const out: string[] = [];
	for (const part of parts) {
		if (out.length && ABBREVIATION.test(out[out.length - 1])) out[out.length - 1] += ` ${part}`;
		else out.push(part);
	}
	return out;
}

function trimClauses(sentence: string, max: number): string {
	const end = SENTENCE_END.test(sentence) ? sentence.slice(-1) : '.';
	const body = SENTENCE_END.test(sentence) ? sentence.slice(0, -1) : sentence;
	// Clause separators: commas (Latin and Arabic), semicolons, dashes.
	const pieces = body.split(/(?<=[,،;])\s+|\s+(?=[—–]\s)/);
	let kept = '';
	for (const piece of pieces) {
		const next = kept ? `${kept} ${piece}` : piece;
		if (`${next.replace(/[,،;\s]+$/, '')}${end}`.length > max) break;
		kept = next;
	}
	kept = kept.replace(/[,،;\s—–]+$/, '');
	if (kept.length + 1 >= MIN_USEFUL) return `${kept}${end}`;
	// A single clause longer than the limit: cut at the last space and mark it.
	const cut = body.slice(0, max - 1);
	return `${cut.slice(0, cut.lastIndexOf(' ') > 0 ? cut.lastIndexOf(' ') : cut.length).replace(/[,،;\s]+$/, '')}…`;
}

export function trimDescription(text: string, max = META_DESCRIPTION_MAX): string {
	const clean = text.replace(/\s+/g, ' ').trim();
	if (clean.length <= max) return clean;
	const sentences = splitSentences(clean);
	let kept = '';
	for (const sentence of sentences) {
		const next = kept ? `${kept} ${sentence}` : sentence;
		if (next.length > max) break;
		kept = next;
	}
	return kept || trimClauses(sentences[0], max);
}
