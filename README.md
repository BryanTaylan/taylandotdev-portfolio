# Portfolio

A modern, clean, responsive personal portfolio built with:

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn-style UI components
- Framer Motion

The project now includes:

- A complete landing-style home page
- A cleaner shared navbar with `Home`, `Blog`, and `Resume`
- A placeholder blog page
- A dedicated resume route/button
- Reusable sections for hero, about, experience, projects, selected projects, and links

## Run locally

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Replace content

- Update site-level metadata in `app/layout.tsx`
- Replace hero and homepage copy in `components/hero-section.tsx` and `app/page.tsx`
- Refine the About content in `components/about-section.tsx`
- Swap project data in `components/projects-section.tsx`
- Update featured work in `components/selected-projects-section.tsx`
- Replace experience entries in `components/experience-section.tsx`
- Replace placeholder external links in `components/links-section.tsx` and `components/footer.tsx`
- Add real blog content in `components/blog-list.tsx`
- Replace the resume placeholder route in `app/resume/page.tsx`

## Notes

- The project defaults to dark mode.
- Framer Motion is used for hero entrance, page reveals, and card hover movement.
- Content is intentionally placeholder-friendly so it is easy to personalize later.
