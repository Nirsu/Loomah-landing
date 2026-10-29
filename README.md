# Loomah landing page

## V3 — Illustrated neighbourhood

The `v3-landing-page` branch rebuilds the landing around the illustrated B direction
selected for the store screenshots: warm paper, orange accents, leafy greens and
family outings. It starts from `feat/v2-landing-page` and keeps the existing Next.js
routes, French/English support, legal pages and newsletter API contract.

The page includes a neighbourhood hero with a real app capture, three keyboard-accessible
outing tabs, a three-step interactive app preview, the Loomah story, an FAQ and an illustrated
panoramic footer. Store links remain labelled as coming soon.

Illustrations live in `public/illustrations/` as optimized WebP files. Their provenance
and generation prompts are in `public/illustrations/ASSETS.txt` and `REFINEMENT.txt`. The
`-v2.webp` scenes are composed for the website: a two-tip croissant, a simple park,
a shared reading moment and one continuous promenade in the footer. The mobile
footer crop keeps the parent and child visible. Nunito is served locally
from `public/fonts/`, with its SIL Open Font License.

```bash
pnpm dev --port 3100
node --test scripts/test-waitlist.cjs
pnpm exec tsc --noEmit
pnpm build
```

The newsletter tests mock the network and do not create real subscriptions. They cover
invalid emails, the locale and payload, server errors, and stalled requests.

### Verification — October 15, 2026

Production build, TypeScript, ESLint and all four newsletter tests pass. Browser
verification covered French at 390, 768 and 1440 px and English at 320 and 1440 px.
No horizontal document overflow was observed at the checked widths.

Verified interactions: opening and closing the mobile menu, Escape returning focus
to the menu button, anchor navigation, language switching preserving the anchor and
legal-page path, category selection with arrow/End keys, all three app previews,
FAQ disclosure, invalid-email feedback and clearing that feedback on edit. Privacy
and terms routes render, and all visible images loaded in the desktop production pass.
Reduced-motion behavior is defined in CSS; it was not separately emulated.

The walkthrough uses actual French app captures cropped to remove debug/system bars.
English alternative text identifies the French app interface. On mobile, compact step
buttons and the selected explanation keep the preview close to the controls.

Review images are saved in `../output/landing-v3-polished/`, including the continuous
desktop capture `loomah-v3-amelioree-continue.jpg`. It is stitched from overlapping
browser viewport captures, removing repeated sticky headers. Real newsletter delivery
was not exercised: the tests use a mocked network and no real subscription was created.
Changes are local on `v3-landing-page`; nothing has been deployed.

October 16 review: removed development captions, postcard labels, floating slogans,
the story stamp and the redundant promise strip. Unified category/section backgrounds
around ivory and warm neutrals with one terracotta accent. The hero now has an explicit
discovery link alongside the launch CTA; the language control is a grouped FR/EN switch
with full accessible language names. Desktop and mobile navigation and language changes
were checked after this cleanup. Launch availability remains stated accurately.

October 27 palette update: restored color using the app's `LoomahPalette.light`
values (orange `#F97316`, green `#10B981`, peach, mint and lavender surfaces).
Primary buttons use orange and selected categories use green. Dark text variants
keep small labels readable; the ivory illustration canvas is preserved.

Contrast and icon follow-up: functional orange `#C2410C` (hover `#9A3412`)
and green `#047857` use white labels, while app pastels and the brighter orange
remain on surfaces and large headings. Ratios: CTA 5.18:1 (hover 7.31:1), selected
green 5.48:1, email placeholder 5.28:1, input boundary on ivory 3.67:1, error text
6.23:1. Large orange headings remain 3.43:1. Selection indicators persist on hover;
category selection updates immediately to avoid low-contrast color interpolation.
Input errors have a message, an alert icon and a distinct red boundary.

Interface icons use only `lucide-react`, its default 2-unit stroke and `currentColor`:
ArrowRight for internal progression, ArrowUpRight for external social links, Mail
for contact, ChevronDown for FAQ disclosure, Send for signup, LoaderCircle while
pending, CircleCheck/CircleAlert for feedback, LockKeyhole for privacy. Coffee,
Trees and BookOpen identify categories; Menu/X control mobile navigation. Icons
repeat visible text and are hidden from assistive technology; menu buttons keep
accessible labels. Logos, illustrations and app screenshots are separate assets.
Checks: production build, lint, four mocked newsletter tests, desktop/mobile visual
review, keyboard tabs, expanded FAQ, empty email validation and rendered contrast
measurements. These checks cover the changed interface, not a full WCAG audit.

Hero/steps review: changed the headline to “Sortir en famille, tout simplement.”
(“Family days out, made simple.”), with concrete supporting copy and one launch CTA.
Removed the pocket announcement and secondary hero link. The how-it-works section
now continues the ivory page background. All steps have quiet card boundaries and
filled rounded number badges; the active step retains the dark-green marker.

Category/footer follow-up: all three category panels share the café's peach
background. Footer contact/social links and the idle newsletter submit button
are text-only; loading and status icons remain functional. Reviewed the live
newsletter forms at https://www.familinparis.fr/inscription-newsletter/ and
https://toulouse.kidiklik.fr/newsletter.html: both use text-only submit controls.

Bilingual landing page for Loomah, built with Next.js 16, React 19, and Tailwind CSS 4.

## Development

```bash
pnpm install
pnpm dev
```

The French page is available at `http://localhost:3000/fr`, and the English page at `http://localhost:3000/en`.

## Newsletter

The form posts signups to the landing's same-origin server route:

`POST /api/newsletter` with `{ "email": "test@example.com", "locale": "fr" }`, where `locale` is `fr` or `en`.

Set server-side `API_URL` to the backend API URL, for example `http://localhost:3000/api` locally or `https://api.loomah.fr/api` in production. The route forwards to `${API_URL}/newsletter`. Existing `NEXT_PUBLIC_API_URL` configuration is supported as a fallback. Browser requests stay on the landing origin, so local previews no longer depend on the backend's production-only CORS header. Missing configuration or a backend failure never produces a success message.

For local use, start the backend on port 3000 (`pnpm dev --port 3000` in Loomah-backend) and the landing on port 3100 (`pnpm dev --port 3100`). PostgreSQL must also be running.

Subscribers are persisted in Payload's `newsletter-subscribers` collection, available in the backend administration under **Newsletter subscribers**. Resend contact synchronization is best-effort; the welcome email is also best-effort after persistence. Failures are logged by the backend. Sending newsletter campaigns remains a separate action.

Verified on 2026-10-29 against local PostgreSQL and the configured Resend account: browser signup succeeded, the row contained the French locale and a Resend contact ID, submitting the same address in uppercase left exactly one row, and Resend reported the welcome email as delivered. The synthetic `resend.dev` test subscription was removed after verification.

The newsletter-only fix was also deployed on 2026-10-29 to the existing V2 production branch (`feat/v2-landing-page`, commit `a1f2405`) and backend `main` (`6cac26b`). The V3 redesign remains local. A signup through `https://loomah.fr/fr#waitlist` was verified in production PostgreSQL and Resend after credential rotation: one row after two submissions, French welcome email delivered, then the synthetic contact and database row were removed. PostgreSQL password (old password rejected), Payload session secret, Resend key (old key revoked), and Railway bucket credentials were rotated. The backend now references Railway bucket credentials directly. Discord webhook rotation is being handled by the owner separately.

Newsletter checks:

```bash
node --test scripts/test-waitlist.cjs scripts/test-newsletter-route.cjs
# In Loomah-backend:
pnpm test:int tests/int/newsletter.int.spec.ts
```

## Verification

```bash
pnpm lint
pnpm build
```
