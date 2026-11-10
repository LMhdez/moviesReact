# Movies React

Frontend application for exploring movies, viewing details and reviews, and maintaining a personal favourites list.

## Features

- Home page with headline and recent reviews.
- Movie catalogue with genre filters and sorting.
- Movie detail pages with related movies and reviews.
- Review submission.
- Personal favourites list (stored in the current browser session).
- Client-side routing with React Router.

## Technology

- React 18
- React Router 6
- Vite
- Tailwind CSS

## Deployment

The frontend is published with GitHub Pages:

https://lmhdez.github.io/moviesReact/

GitHub Actions runs the lint check and production build, then publishes the generated `dist/` directory. Vite and React Router are configured for the repository subpath. A Pages `404.html` fallback restores direct navigation to client-side routes.

## Backend dependency

The frontend continues to use the existing Azure Functions API at:

`https://moviesfunctionapp.azurewebsites.net/api`

GitHub Pages only hosts the static frontend; it does not replace or host this API. The API must remain available and allow browser requests from `https://lmhdez.github.io` through its CORS configuration. The review form also sends submissions to the existing `SubmitReview` endpoint.

No new Azure resources are created by the GitHub Pages deployment.

## Requirements

- Node.js 22 or a compatible supported version.
- npm.

## Local development

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

The preview command serves the production build locally. The production build uses the `/moviesReact/` base path required by GitHub Pages.
