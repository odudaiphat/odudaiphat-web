# Ô Dù Đại Phát — Vercel Ready Next.js App

## Stack

- Next.js root app
- React
- TypeScript
- Tailwind CSS
- Local WebP images
- Vercel-ready

## Requirements

- Node.js 20 LTS hoặc 22 LTS
- npm

## Local commands

```bash
npm install
npm run typecheck
npm run build
npm run dev
```

Mở local:

```bash
http://localhost:3000
```

## Env

Copy `.env.example` thành `.env.local` nếu cần chỉnh domain, hotline hoặc Zalo URL.

```bash
cp .env.example .env.local
```

## Push GitHub

```bash
git init
git add .
git commit -m "Initial Vercel-ready Next.js app"
git branch -M main
git remote add origin https://github.com/USERNAME/odudaiphat.git
git push -u origin main
```

## Deploy Vercel

1. Vào Vercel Dashboard.
2. Chọn Add New Project.
3. Import GitHub repo.
4. Framework Preset: Next.js.
5. Install Command: `npm install`.
6. Build Command: `npm run build`.
7. Deploy.

## Verification note

Source đã được tối giản cho Vercel root app:
- Không dùng Turborepo.
- Không dùng workspace.
- Không dùng CMS.
- Không dùng API route.
- Không dùng server action.
- Không dùng image remote.
- Tất cả ảnh dùng local `.webp`.

Trong môi trường tạo ZIP, `npm install` / `npm run build` có thể timeout do giới hạn runtime. Hãy chạy lại trên máy local hoặc Vercel để xác nhận lần cuối.
