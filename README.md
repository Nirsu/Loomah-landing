# Loomah landing page

Bilingual landing page for Loomah, built with Next.js 16, React 19, and Tailwind CSS 4.

## Development

```bash
pnpm install
pnpm dev
```

The French page is available at `http://localhost:3000/fr`, and the English page at `http://localhost:3000/en`.

## Newsletter

The form posts signups to the backend newsletter endpoint:

`POST /api/newsletter` with `{ "email": "test@example.com", "locale": "fr" }`, where `locale` is `fr` or `en`.

Set `NEXT_PUBLIC_API_URL` to the backend API URL, for example `http://localhost:3000/api`. The form calls `${NEXT_PUBLIC_API_URL}/newsletter`.

## Verification

```bash
pnpm lint
pnpm build
```
