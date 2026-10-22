/**
 * Build-time snapshot of the site's content for the PHP admin (/editor/) and
 * the PHP page renderer (/cms/render.php). Emitted as static JSON files:
 *
 *   /editor-seed/meta.json        when this build ran + lookup lists
 *   /editor-seed/blogs.json       every blog post
 *   /editor-seed/doctors.json     every doctor
 *   /editor-seed/hospitals.json   every hospital (with address/established/certs)
 *   /editor-seed/treatments.json  every treatment (with sub-treatments)
 *
 * Images are resolved to their built URLs so PHP can show them. Nothing here
 * is secret — it is the same content the public pages already show.
 */
import type { APIRoute } from 'astro';
import type { ImageMetadata } from 'astro';
import { blogPosts } from '../../data/blog';
import { doctors } from '../../data/doctors';
import { hospitals } from '../../data/hospitals';
import { hospitalDetails } from '../../data/hospitalDetails';
import { treatments } from '../../data/treatments';
import { destinations } from '../../data/destinations';
import { TREATMENT_IMAGES } from '../../utils/searchIndex';

const url = (image: ImageMetadata | string | undefined) => (typeof image === 'string' ? image : image?.src ?? '');

const files: Record<string, () => unknown> = {
	meta: () => ({
		builtAt: new Date().toISOString(),
		destinations: destinations.map((d) => ({ slug: d.slug, city: d.city })),
		treatmentImages: Object.fromEntries(Object.entries(TREATMENT_IMAGES).map(([key, img]) => [key, url(img)])),
	}),
	blogs: () => blogPosts.map((post) => ({ ...post, image: url(post.image) })),
	doctors: () =>
		doctors.map((doctor) => ({
			...doctor,
			photo: url(doctor.photo),
			bannerPhoto: url(doctor.bannerPhoto),
			topRightPhoto: url(doctor.topRightPhoto),
		})),
	hospitals: () =>
		hospitals.map((hospital) => {
			const details = hospitalDetails[hospital.slug];
			return {
				...hospital,
				image: url(hospital.image),
				address: details?.address ?? '',
				established: details?.established ?? null,
				certs: details?.certs ?? [],
			};
		}),
	treatments: () => treatments,
};

export function getStaticPaths() {
	return Object.keys(files).map((file) => ({ params: { file } }));
}

export const GET: APIRoute = ({ params }) =>
	new Response(JSON.stringify(files[params.file as string]()), {
		headers: { 'Content-Type': 'application/json; charset=utf-8' },
	});
