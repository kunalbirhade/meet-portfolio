# Meet Panchal | Portfolio

A personal portfolio website built with **Next.js 14**, showcasing work, projects, and contact options. The site uses the App Router, Tailwind CSS, and Framer Motion for a modern, responsive experience.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Email:** Nodemailer (contact form)
- **Scheduling:** React Calendly (book a meeting)

## Prerequisites

- Node.js 18+
- npm or yarn

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd meet-portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment variables

Create a `.env.local` file in the project root for local development. The contact form uses Gmail to send emails:

```env
GMAIL_USER=your-email@gmail.com
GMAIL_PASS=your-app-password
```

> Use a [Gmail App Password](https://support.google.com/accounts/answer/185833) rather than your regular password for `GMAIL_PASS`.

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command          | Description                                     |
| ---------------- | ----------------------------------------------- |
| `npm run dev`    | Start the development server                    |
| `npm run build`  | Build for production                            |
| `npm run start`  | Start the production server (run after `build`) |
| `npm run lint`   | Run Next.js ESLint                              |
| `npm run format` | Format code with Prettier                       |

## Project Structure

```
meet-portfolio/
├── app/
│   ├── about/          # About / CV page and content (education, skills, work experience)
│   ├── api/contact/    # Contact form API route (POST)
│   ├── book-meeting/   # Calendly booking page
│   ├── contact/        # Contact page
│   ├── playground/     # Playground / side projects
│   ├── work/           # Work / portfolio projects
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/         # Reusable UI components
│   ├── shared/         # Shared subcomponents (e.g. TitleBlock)
│   ├── About.tsx
│   ├── ContactForm.tsx
│   ├── ContactUs.tsx
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── Highlights.tsx
│   ├── Playground.tsx
│   ├── SectionShell.tsx
│   └── Work.tsx
└── public/             # Static assets (images, favicon, robots.txt, sitemap)
```

## Features

- **Home:** Hero, highlights, work grid, playground projects, about summary, contact
- **About:** Detailed CV with tabs (summary, work experience, education, skills)
- **Work:** Portfolio of selected projects
- **Playground:** Side projects and experiments
- **Book a meeting:** Calendly embed for scheduling
- **Contact:** Contact form with email delivery via the `/api/contact` route
- **SEO:** Metadata, Open Graph, and sitemap support

## Production Build

```bash
npm run build
npm run start
```

## License

See [LICENSE](LICENSE) in the repository.
