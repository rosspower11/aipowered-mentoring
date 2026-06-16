# mentoring.aipowered.xyz — Private 1:1 Mentoring with Ross

Standalone Next.js landing page for Ross Power's private 1:1 mentoring. Same design system as the main Claude cohort site, repositioned around the personalised 1:1 experience.

## Structure

- `app/page.tsx` — composes the sections
- `components/mentoring/*` — section components
- `lib/mentoring.ts` — pricing tiers (USD + GBP) and the checkout URL
- `app/globals.css` — shared design system (fonts via `@import`)
- `app/mentoring.css` — pricing-tier + level-pill styles layered on top

## Pricing → checkout

All CTAs point to **https://checkout.aipowered.xyz/private-mentoring**, where the buyer picks:

| Length  | USD     | GBP (approx) |
|---------|---------|--------------|
| 1 hour  | $600    | £445         |
| 2 hours | $1,100  | £816         |
| 3 hours | $1,600  | £1,187       |

Edit these in `lib/mentoring.ts`.

## Run locally

```bash
npm install
npm run dev
# http://localhost:3000
```

## Deploy to Vercel

1. This repo (`aipowered-mentoring`) → Vercel **New Project → import**. Auto-detects Next.js.
2. Project **Settings → Domains → Add** `mentoring.aipowered.xyz`.
3. Add the DNS record Vercel shows, at your DNS provider for `aipowered.xyz`:

   | Type  | Name        | Target                 | Proxy / mode |
   |-------|-------------|------------------------|--------------|
   | CNAME | `mentoring` | `cname.vercel-dns.com` | DNS only     |

4. Wait for Vercel to show the domain as **Valid** (SSL issued). Live at **https://mentoring.aipowered.xyz**.
