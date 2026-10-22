/**
 * Merges content saved in the PHP editor (/editor/) into the site's built-in
 * data at build time. scripts/pull-cms-data.mjs downloads the saved records
 * into src/data/cms/{type}.json before every build.
 *
 *  - An edited built-in item replaces the original in place (same position),
 *    so per-language translations that are matched by position keep lining up.
 *  - Items created in the editor are added after the built-in ones.
 *  - Deleted editor-created items are dropped. Built-in items can't be deleted.
 */
import type { ImageMetadata } from 'astro';
import { cmsMedia } from './media';

export type CmsRecord = Record<string, unknown> & {
	slug: string;
	_cms?: { deleted?: boolean; source?: string; updatedAt?: number };
};

export function mergeCms<T extends { slug: string }>(
	base: T[],
	saved: Record<string, CmsRecord>,
	toItem: (record: CmsRecord, original: T | undefined) => T,
): T[] {
	const merged = base.map((item) => {
		const record = saved[item.slug];
		return record && !record._cms?.deleted ? toItem(record, item) : item;
	});
	const known = new Set(base.map((item) => item.slug));
	for (const record of Object.values(saved)) {
		if (!record?.slug || known.has(record.slug) || record._cms?.deleted) continue;
		merged.push(toItem(record, undefined));
	}
	return merged;
}

/**
 * An image field from the editor: a new upload ("/media/…") becomes the
 * downloaded, optimisable image; "" means the editor removed it; anything
 * else (the built URL it was shown with) means unchanged.
 */
export function cmsImage<T extends ImageMetadata | string | undefined>(value: unknown, original: T): ImageMetadata | T | undefined {
	if (typeof value !== 'string') return original;
	if (value === '') return undefined;
	if (value.startsWith('/media/')) return cmsMedia[value] ?? original;
	return original;
}

/** The saved record without editor-only keys. */
export function stripCms<T>(record: CmsRecord): T {
	const { _cms, ...rest } = record;
	return rest as T;
}
