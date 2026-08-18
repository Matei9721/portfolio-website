# My Personal/Portfolio Website ⭐

This is the source code for my personal website, built using **React**, **Vite**, **Ant Design**, and a **typewriter** library to create an interactive and dynamic feel. The website is hosted on **GitHub Pages** and serves as my online portfolio, showcasing my skills as a Data Scientist and Software Engineer.

## Demo

Check out the live version of my website [here](https://matei9721.github.io/portfolio-website/).

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: Development server and production build tool.
- **Ant Design**: A popular UI framework for React to build clean and responsive components.
- **Typewriter Effect Library**: A library to give cool typing effects for text (`react-typewriter-effect`).
- **GitHub Pages**: Hosting service for the website.

## Features

- **Interactive Portfolio**: Dynamic content that showcases my experience, skills, and projects.
- **Clean and Responsive UI**: Thanks to Ant Design, the website looks great on both desktop and mobile devices.
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

## Deployment

GitHub Pages deployment is handled by `.github/workflows/deploy.yml`. A push to
`main` runs the tests and production build, uploads the generated `dist/`
artifact, and deploys it through the official GitHub Pages actions. The
workflow can also be started manually from the Actions tab.
