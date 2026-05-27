# AGENTS.md

## Cursor Cloud specific instructions

This is a Next.js 16 application (App Router) using TypeScript, Tailwind CSS v4, shadcn/ui, and Framer Motion.

### Quick reference

| Task | Command |
|------|---------|
| Dev server | `pnpm dev` (port 3000) |
| Lint | `pnpm lint` |
| Build | `pnpm build` |
| Add shadcn component | `pnpm dlx shadcn@latest add <name>` |

### Architecture notes

- Dark-only theme — the `<html>` element always has `class="dark"`.
- Custom fonts: `Quicksand` (body, `--font-sans`) and `Playfair Display` (headings, `--font-heading`).
- All interactive sections are client components (`"use client"`). Static sections (Footer) are server components.
- Confetti is injected via raw DOM (`useConfetti` hook) — this is intentional to avoid re-renders.
- Bucket list state is persisted to `localStorage` via `useLocalStorage` hook.
- The shadcn theme in `globals.css` uses `oklch` color values with a romantic pink/purple palette.
