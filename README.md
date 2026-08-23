# My Personal/Portfolio Website ⭐

This is the source code for my personal website, built using **React**, **Vite**, custom CSS, and a **typewriter** library to create an interactive and personal feel. The website is hosted on **GitHub Pages** and serves as my online portfolio, showcasing my skills as a Data Scientist and Software Engineer.

## Demo

Check out the live version of my website [here](https://matei9721.github.io/portfolio-website/).

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: Development server and production build tool.
- **Custom CSS**: A bespoke field-notebook and data-console visual system.
- **Lucide React**: A lightweight, consistent icon set for links and project markers.
- **Typewriter Effect Library**: A library that powers the animated introduction.
- **GitHub Pages**: Hosting service for the website.

## Features

- **Interactive Portfolio**: Dynamic content that showcases my experience, skills, and projects.
- **Custom Responsive UI**: A lightweight visual system designed for the site rather than a component-library theme.
- **Typewriter Effect**: Adds an eye-catching typewriter animation to various sections of the site.
- **Custom Components**: Built from scratch using React to provide a personalized touch.

## Setup and Installation

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher; see `.nvmrc`)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Local verification

Install the locked dependencies once:

```bash
npm ci
```

Run the regression suite without watch mode:

```bash
npm run test:ci
```

Run the combined pre-commit check (tests and production build):

```bash
npm run check
```

Create the production bundle with the non-interactive build check:

```bash
npm run build:check
```

Start the Vite development server locally:

```bash
npm run dev
```

Preview the built production bundle locally after `npm run build:check`:

```bash
npm run preview
```

The Vite base path is configured for GitHub Pages at `/portfolio-website/`.

## Content architecture

Portfolio copy and links live in `src/content/`, while reusable presentation
components live in `src/components/`. `App.js` composes the page sections;
`TerminalSection` owns the accessible custom terminal interaction, and the project and work
experience sections render from their corresponding content modules.

## Deployment

GitHub Pages deployment is handled by `.github/workflows/deploy.yml`. A push to
`main` runs the tests and production build, uploads the generated `dist/`
artifact, and deploys it through the official GitHub Pages actions. The
workflow can also be started manually from the Actions tab.
