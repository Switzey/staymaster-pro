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

## Prisma Setup

Set `DATABASE_URL` in `.env` to a local or hosted PostgreSQL database. The `.env.example` file includes only a placeholder database URL.

```bash
pnpm install
cp .env.example .env
pnpm prisma:generate
pnpm prisma:migrate -- --name init
pnpm prisma:seed
```

Useful Prisma commands:

```bash
pnpm prisma validate
pnpm prisma studio
```

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
  seed.mjs
```

This initial version focuses on clean architecture, reusable UI components, responsive dashboard layout, Prisma data modeling, and authentication-ready routing. Authentication, payment gateway integration, CRUD pages, and complex business workflows are intentionally not included yet.
