# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: peers — other developers and people curious about Javier's work — browsing a personal showcase of side projects. Hiring is secondary: recruiters may land here, and the CV download and contact details serve them, but the site is not optimized as a job-hunting funnel.

## Product Purpose

A personal record and showcase of Javier Ocampo's side projects as a fullstack developer based in Dublin, Ireland (originally from Argentina). Success is a visitor exploring the projects — opening demos, repos, or APKs — and coming away with a sense of the person behind them. Optional outcomes: getting in touch, downloading the CV, or leaving a donation.

## Positioning

- **Playful side projects with personality:** a satirical Ryanair failure monitor, a gothic/horror fiction blog, a retro CRT-style Android dashboard — projects chosen for fun and character, not only résumé value.
- **Security awareness:** a Python/Semgrep vulnerability scanner signals a security-minded engineer.
- Breadth across web (React, NestJS, Astro) and native Android (Kotlin, Jetpack Compose) supports both, but is not the headline.

## Operating Context

- Static Astro 5 site with Tailwind 4, deployed to GitHub Pages at `https://javieroc.github.io/portfolio-astro` (base path `/portfolio-astro` must prefix all public asset URLs).
- Single-page flow: Hero → About → Tech Stack → Projects → Contact, plus per-project pages at `/projects/[slug]`.
- Projects live in the `projects` content collection (`src/content/projects/*.md`): title, description, image, stack, optional github/demo/apk links, ordered by `weight`.

## Capabilities and Constraints

- Project cards and modal/detail pages linking to GitHub repos, live demos, and Android APK downloads.
- Downloadable CV: `public/Javier_Ocampo_CV.pdf`.
- Donation: Stripe Buy Button in a modal (`src/components/DonationButton.astro`), opened by any `[data-donate-trigger]` element; no backend — must keep working on static hosting.
- Contact: email, phone, location, GitHub, LinkedIn.
- English only; no localization planned.

## Brand Commitments

- Name: Javier Ocampo, "Fullstack Developer", Dublin, Ireland.
- Fantasy/medieval motif is part of the identity: Cinzel and Uncial Antiqua fonts, the sword image, and a voice of journeys and summits ("The next summit is always worth it.").
- Donation button stays as a feature.
- Phone number stays public on the Contact section.

## Evidence on Hand

- Six real projects with screenshots in `public/projects/`: Workahomies Mobile App, Workahomies Web, MuShits, Bottle of Klein, Dublin Airport Monitor (RyanFail), Vulnerability Scanner.
- Avatar (`public/avatar.jpeg`), hero wallpaper, sword image, CV PDF.
- No testimonials, client logos, employer history, metrics, or press on the site — do not fabricate any.

## Product Principles

1. The projects are the product; everything else frames them.
2. Personality over polish-by-template — the playful, story-driven character of the work should come through.
3. Peers first: favor depth and honesty about what was built over recruiter-style selling.
4. Keep it static, fast, and free to host.
