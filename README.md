# Loomah landing page

Bilingual landing page for Loomah, built with Next.js 16, React 19, and Tailwind CSS 4.

## Development

```bash
pnpm install
pnpm dev
```

The French page is available at `http://localhost:3000/fr`, and the English page at `http://localhost:3000/en`.

## Waitlist

The form adds new signups to Resend Contacts. Create a `.env.local` file based on `.env.example`, then set `RESEND_API_KEY`.

`RESEND_WAITLIST_SEGMENT_ID` is optional. When provided, new contacts are added directly to the corresponding segment.

Without an API key, the form intentionally displays an error instead of simulating a successful signup.

The API key is only read by the server-side route and must never use the `NEXT_PUBLIC_` prefix.

## Verification

```bash
pnpm lint
pnpm build
```
