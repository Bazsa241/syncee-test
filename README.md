# 🚀 Syncee Test Project

A modern frontend application built with **Vite + React + TypeScript**, focusing on clean architecture, scalability, and developer experience.

---

## 🛠️ Tech Stack

- ⚡ Vite – lightning-fast development environment
- ⚛️ React 19
- 🟦 TypeScript
- 🎨 styled-components – component-based styling
- 🔄 @tanstack/react-query – server state management
- 🌐 axios – HTTP client
- 🔐 firebase – authentication & backend services
- 🧾 zod – schema validation
- 🔔 notistack – toast notifications
- 🧭 react-router-dom – routing

---

## 📦 Package Manager

This project uses **pnpm**.

If you don't have it installed:

```bash
npm install -g pnpm
```

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
pnpm install
```

### 2. Start development server

```bash
pnpm dev
```

The app will be available at:

```
http://localhost:5173
```

---

## 🏗️ Available Scripts

| Command        | Description                   |
| -------------- | ----------------------------- |
| `pnpm dev`     | Start development server      |
| `pnpm build`   | Type-check + production build |
| `pnpm preview` | Preview production build      |
| `pnpm lint`    | Run ESLint                    |
| `pnpm format`  | Format code with Prettier     |

---

## 🔐 Authentication

Firebase is used for authentication.
For convenience, a fully working Firebase configuration is provided in `.env.example` specifically for this test project.
Create a `.env` file based on it:

```bash
cp .env.example .env
```

---

## 🧪 Code Quality

- ESLint for linting
- Prettier for formatting
- Strict TypeScript setup

Run manually:

```bash
pnpm lint
pnpm format
```

---

## 🧠 Architecture Notes

- Feature-based structure for scalability
- Separation of:
  - UI (components)
  - Business logic (hooks/services)
  - Server state (react-query)
- Reusable and typed API layer
- Form validation with Zod

---

## ✨ Future Improvements

- Sorting for tables
- Reusable data table component
- i18n support
- Testing (Vitest / React Testing Library)
