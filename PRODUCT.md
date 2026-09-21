# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Three audiences of roughly equal priority, all landing on the same site:

1. **Tech recruiters and hiring managers** evaluating Mathieu Le Bellec for a permanent or technical-lead developer role — reading the experience timeline, recommendations, skills, and downloading a CV.
2. **Freelance / contract dev buyers** (companies, agencies, individuals) sizing him up for Angular + .NET missions.
3. **Photo and creative clients** — people looking for wedding/family photography, video, or graphic design (logos, wedding & birth announcements / "faire-part").

Typical visit: a short, evaluative session, often mobile, frequently arriving from LinkedIn, a job application, or word of mouth. Visitors may read in French, English, or Spanish.

## Product Purpose

A personal site that is both an online CV and a portfolio for Mathieu Le Bellec, a full-stack developer (Angular / C# .NET) based in Rennes, France. It exists to present his professional history, skills, recommendations, and creative work in one credible, self-owned place, in three languages, with downloadable PDF CVs.

Success = a visitor from any of the three audiences quickly grasps who he is, trusts the evidence, and has an easy path to contact him. It is currently a maintained professional presence ("living CV") rather than an urgent job-search funnel — the owner is employed.

## Positioning

A developer who is also a working creative. The engineering profile leads: ~9 years across Java, C#/.NET and Angular, including technical-lead roles (team lead on Bouygues Telecom's government "RRF" network-incident portal, built from scratch; earlier lead work at Veonum/Atos on Bouygues Telecom's IS). Alongside that, a genuine second track in photography, video and graphic design with real client output. The international, hands-on backstory — years backpacking across Latin America, Asia and Australia, a semester in Sweden, five months rebuilding a school in Oaxaca with All Hands and Hearts — is part of the profile, not decoration.

## Operating Context

- Four primary sections: **Home** (intro banner with rotating phrases, headline stats, services, recommendations, client-logo strip), **About** (bio extract, chronological life timeline of education / work / other experience / travel, filterable by type, plus hobbies), **Projects / Portfolio** (websites, logos, videos, faire-part — filterable, with a lightbox carousel), **Contact** (contact-info blocks + a message form).
- A persistent **side panel**: language switcher (FR/EN/ES), CV download (one PDF per language), personal details, and a categorized skills list with proficiency levels.
- Global **navigation** and **dark / light mode** toggle.
- Language is driven by a `?lang=` query param, falling back to the browser locale, default French.
- Contact form posts to a Firebase Cloud Function that sends the email.

## Capabilities and Constraints

- **Stack (existing, load-bearing):** Angular 20 standalone components, SCSS (layered `0-helpers` → `3-modules` structure with SCSS-variable theme mixins + CSS custom properties), NgRx Signals stores, RxJS. Hosted on Firebase Hosting; contact email via Firebase Cloud Functions. Build output `dist/online-cv-math`.
- **Trilingual is mandatory:** every piece of user-facing copy exists in French, English, and Spanish, held in `services/ui-txt/*` (UI chrome) and `services/cv-math/data*` (CV content). Any new surface or copy must ship all three. Current translations have minor gaps/typos (e.g. some Spanish skill labels, `expeProTitle`, card titles not translated) — future work may fix but must not drop languages.
- Content is static, authored in TypeScript data files — no CMS.
- Theming: `light-mode` / `dark-mode` classes on `<html>`; light uses a red primary (`#f60c00`), dark uses amber (`#ffc107`); neutral greys throughout; Poppins as the type family.
- Skills, social links, and experience entries each carry a `display` flag used to curate what is shown.
- Some data is stale and should be reviewed before being treated as current: contact availability text ("Available from April 1, 2026", "actively looking for a job") predates the current employed status; `dataHome` `lstRecap` values ("9 years", "3 years freelance", "100% motivated"); a typo in the FR fullstack service description (`l'FFOexpérience`); the Actemium entry's `technicalEnv` appears copied from a later Angular role.

## Brand Commitments

- Name: **Mathieu Le Bellec** (first name "Mathieu", family name "Le Bellec"). Title: "Full Stack Developer" / "Développeur Full Stack" / "Desarrollador Full Stack".
- Location: Rennes, France. Contact email: mathieu.lebellec.pro@gmail.com.
- Social presence shown: LinkedIn, GitHub, Bitbucket (Facebook/Instagram exist but are hidden).
- No formal logo, wordmark, or fixed brand palette was established; the current red/amber accents and Poppins are incumbent choices, not locked commitments.
- Voice: first person, plain, professional, warm. Recommendation quotes and CV prose are formal French/English/Spanish.

## Evidence on Hand

- **Recommendations** — real, attributed, with contact emails: Sébastien Pinet (Veonum), Michel Pelgrin (freelance manager, Bouygues Telecom mission), Arnaud Leroy (Bouygues Telecom). Patrick Leprince (Veonum) also defined. Full multi-paragraph quotes in all three languages in `services/cv-math/dataHome.ts`.
- **Client / employer logos:** Atos, Bouygues Telecom, RRF, Solina, Sopra Steria, Veonum — `src/assets/logos/`. Education logos INSA, IUT also present.
- **Work history:** Freelance–Bouygues Telecom (2023–2026), Freelance–Solina (2024), Veonum (2019–2023), Sopra Steria (2016–2018), Actemium (2013 internship), Cesta (2012 internship), plus NGO/teaching experience, detailed task lists per role.
- **Education:** INSA Rennes (Ingénieur SRC, 2010–2013), IUT Brest (DUT GEII, 2008–2010).
- **Portfolio assets** — `src/assets/portfolio/`: websites (Go2Sport, Magie Pour Tous, "Who Wants To Be A Millionaire", Tichat29 — with live Firebase links), logos (Alex Fishing, Bee Electronique, Go2Sport, La Casita, Magie Pour Tous, Tess, The Unchained Nomads, Volkany), video thumbnails (Go2Sport, Bois Quélen, Tennis Cesson), faire-part (7 birth announcements).
- **Photos:** portrait (`PhotoCv.jpg`), workspace, and hobby images (guitar, drums, trail running, handball, photography).
- **PDF CVs:** `src/assets/pdfs/Mathieu_LEBELLEC_CV-{FR,EN,ES}.pdf`.
- **Not on hand — do not fabricate:** no phone number is published, no service pricing, no metrics/benchmarks beyond the self-reported recap numbers, no written photography-client testimonials.

## Product Principles

1. **Evidence over adjectives.** Named recommendations, real client logos, dated roles with concrete task lists, and live project links are the persuasion — lean on them rather than on claims.
2. **Developer first, creative alongside.** The engineering profile is the headline for every audience; photography / video / graphic design is a real, visible secondary track, never buried and never co-equal with the dev story.
3. **Trilingual parity is non-negotiable.** Nothing ships in one or two languages; FR/EN/ES are equal citizens.
4. **One credible place.** The site is the owner's self-controlled professional record — accurate, current, and easy to keep updated from plain data files.
5. **Fast, low-friction evaluation.** Respect a short mobile visit: quick to grasp, quick to verify, quick to reach him; dark and light both first-class.

## Accessibility & Inclusion

No formal standard was specified. Given the evaluative, often-mobile, multilingual audience: maintain legible type and adequate contrast in both themes, keyboard-operable navigation, filters and the portfolio lightbox, correct `lang` handling per language, and meaningful alt text on logos, portfolio images, and the portrait.
