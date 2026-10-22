# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Content editor (/editor/)

A password-protected PHP admin for blogs, treatments (with sub-treatments), doctors and hospitals, modelled on the AlisPro editor.

- **Saving publishes straight away**: `/cms/render.php` shows the saved version of that English page until the next build; untouched pages are served as normal static pages (rules in `public/.htaccess`).
- **The next build catches up**: `npm run build` first runs `scripts/pull-cms-data.mjs`, which downloads the saved content and images into `src/data/cms/` and `src/assets/cms/`. `src/data/*.ts` merges them in, so menus, listings, search, the sitemap and the other languages include the changes.
- Data lives outside the web root (`../cms-data/` next to `public_html`), so uploading a new build never deletes it.

### One-time setup on the server

1. Create `.env` in the web root (next to `index.html`; blocked from the web by `.htaccess`):
   ```env
   EDITOR_PASSWORD_HASH='<output of: php -r "echo password_hash(\'YourPassword\', PASSWORD_BCRYPT, [\'cost\'=>12]);">'
   CMS_EXPORT_KEY='<a long random string, 32+ characters>'
   ```
2. Keep `.env` when uploading new builds (it is not part of `dist/`).
3. Sign in at `https://alispromeditours.com/editor/`.

### On the machine that builds the site

Create `.env` in the project root (git-ignored) with the same key, so builds pull the editors' changes:
```env
CMS_EXPORT_KEY='<same value as on the server>'
```
Without it the build still works, using the content already committed in `src/data/cms/`.
