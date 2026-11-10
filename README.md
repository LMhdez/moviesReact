# Movies React

A React application for discovering films, viewing metadata and maintaining a personal favourites list.

## Features

- Featured film and popular movie catalogue.
- Genre filtering and sorting by relevance, release date or title.
- Movie details, related titles, cast and directors.
- Personal favourites stored in the current browser session.
- Movie reviews saved locally in the current browser.

## Technology

- React 18
- React Router 6
- Vite
- Tailwind CSS

## Deployment

Published with GitHub Pages: https://lmhdez.github.io/moviesReact/

GitHub Actions installs dependencies, builds the Vite application, deploys `dist/` and checks the published frontend and metadata API.

## Movie metadata source

The application uses Cinemeta, the public movie metadata service from the Stremio ecosystem:

- Catalogue: `https://cinemeta-catalogs.strem.io/top/catalog/movie/top.json`
- Individual metadata: `https://v3-cinemeta.strem.io/meta/movie/{imdb_id}.json`

No API key or paid service is required. Cinemeta is an external service without a service-level guarantee; availability and response formats may change.

## Reviews and personal data

There is no application backend. Reviews are saved in the visitor's browser using `localStorage`; they are not sent to a server, shared with other visitors or synchronised between devices. The review form no longer asks for an email address.

Favourites are stored in the browser session.

## Local development

Requires Node.js 22 or a compatible supported version.

```bash
npm ci
npm run dev
```

## Validation and production build

```bash
npm run lint
npm run build
npm run preview
```

The production build uses the `/moviesReact/` base path required by GitHub Pages.
