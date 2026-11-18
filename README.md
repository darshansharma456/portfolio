[README.md](https://github.com/user-attachments/files/35041143/README.md)
# Darshan Sharma | Portfolio

A responsive, single-page developer portfolio built with React and Vite. It introduces me as a Computer Engineer and React frontend developer, and includes four project showcases, three of which are interactive mini apps you can try in the browser.

**Live site:** https://darshan-portfolio-virid.vercel.app

## Features

- Responsive dark-theme design for desktop, tablet and mobile
- Sections for About, Skills, Projects and Contact
- Interactive project demos built with React state:
  - **TaskFlow**: add, complete and delete tasks
  - **SpendWise**: expense tracker with totals in NPR
  - **DevQuiz**: short React, HTTP and SQL quiz with a score summary
  - **TuberFind**: research-interface prototype with image upload preview (no AI model is connected; it is a UI prototype only, not a medical tool)
- SEO setup: meta tags, Open Graph and Twitter cards, JSON-LD structured data, `robots.txt`, `sitemap.xml` and a `<noscript>` fallback
- Accessibility basics: skip link, semantic landmarks, focus outlines and reduced-motion support

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [lucide-react](https://lucide.dev/) for icons
- Plain CSS (`styles.css`)
- Deployed on [Vercel](https://vercel.com/)

## Project Structure

```
my-react-app/
├── public/
│   ├── favicon.svg
│   ├── og-image.png
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm (comes with Node.js)

### Run locally

```bash
# 1. Clone the repository
git clone https://github.com/darshansharma456/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Then open http://localhost:5173 in your browser.

### Build for production

```bash
npm run build
npm run preview   # optional: preview the production build locally
```

The production files are generated in the `dist/` folder.

## Deployment

The site is deployed on Vercel.

```bash
npm install -g vercel
vercel --prod
```

Alternatively, push the repository to GitHub and import it in Vercel. Vercel detects Vite automatically (build command `npm run build`, output directory `dist`) and redeploys on every push.

## SEO Notes

If you fork this project or change the domain, replace the site URL in:

- `index.html` (canonical link, Open Graph, Twitter and JSON-LD URLs)
- `public/robots.txt`
- `public/sitemap.xml`

Then submit the sitemap in Google Search Console.

## Contact

- **Email:** sharmadarshan367@gmail.com
- **GitHub:** [github.com/darshansharma456](https://github.com/darshansharma456)
- **LinkedIn:** [Darshan Sharma](https://www.linkedin.com/in/darshan-sharma-a1b3012b5/)
- **Location:** Kathmandu, Nepal

## License

This project is for personal portfolio use. Feel free to take inspiration from it, but please don't copy my personal content as your own.
