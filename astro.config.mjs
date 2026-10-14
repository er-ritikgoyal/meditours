// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'fr', 'ru', 'bn', 'ro', 'es', 'pt', 'vi', 'ar'],
		routing: {
			prefixDefaultLocale: false,
		},
	},
	vite: {
		server: {
			watch: {
				// public/images gets edited/resaved directly (photo apps, cloud sync) —
				// those tools write atomically via a transient *.tmp/~* file, which can
				// briefly not exist when the watcher tries to add it (Windows EBUSY /
				// ENOENT), crashing the dev server with an unhandled rejection.
				ignored: ['**/public/images/**/*.tmp', '**/public/images/**/~*'],
			},
		},
	},
});
