# Nettbasert CV – Next.js + TypeScript + Tailwind CSS

Dette prosjektet er en moderne, responsiv og statisk nettbasert CV på norsk. Bygget med Next.js (App Router), TypeScript og Tailwind CSS.

## Funksjoner

- Seksjoner: Profil, Erfaring, Utdanning, Ferdigheter, Prosjekter, Kontaktinformasjon
- Last ned CV som PDF (uten ekstern tjeneste)
- Delbar offentlig URL
- Responsivt og minimalistisk design
- SEO-optimalisert
- Ingen backend

## Kom i gang

1. Installer avhengigheter:
   ```bash
   npm install
   ```
2. Start utviklingsserver:
   ```bash
   npm run dev
   ```
3. Bygg for produksjon:
   ```bash
   npm run build
   ```

## Distribusjon

Klar for Vercel, Netlify eller GitHub Pages.

## Tilpasning

Rediger innholdet i seksjonene i `src/app` og komponentene i `src/components`.

## PDF-eksport

PDF-funksjon implementeres med `@react-pdf/renderer` eller Next.js SSR-eksport.

## Lisens

MIT
