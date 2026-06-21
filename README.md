# StayMaster Pro

StayMaster Pro is a professional hospitality management system foundation for hotels, guest houses, resorts, and short-let apartments.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Prisma ORM
- PostgreSQL

## Getting Started

```bash
pnpm install
cp .env.example .env
pnpm prisma:generate
pnpm dev
```

Open `http://localhost:3000` to view the dashboard foundation.

## Project Structure

```text
src/
  app/
    (auth)/
    (dashboard)/
  components/
    dashboard/
    layout/
    ui/
  config/
  lib/
prisma/
  schema.prisma
```

This initial version focuses on clean architecture, reusable UI components, responsive dashboard layout, and authentication-ready routing. Payment gateway integration and complex business workflows are intentionally not included yet.
