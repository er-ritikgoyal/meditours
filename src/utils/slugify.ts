/** Turns a procedure name like "Coronary Artery Bypass Graft (CABG)" into a URL-safe slug. */
export function slugifyProcedure(name: string): string {
	return name
		.toLowerCase()
		.replace(/['’]/g, '')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');
}
