# HackHubb - An Open Source Next.js Project

HackHubb is an open-source Next.js project that serves as a platform for collaboration and sharing among developers. This project is bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and is designed to make it easy for developers to get started with their own collaborative projects.

## Getting Started

To get started with HackHubb, follow these steps:

1. Clone the repository to your local machine:

git must be installed for this command to work install it by visiting - [git](https://git-scm.com/)

```bash
git clone [https://github.com/yourusername/HackHubb.git](https://github.com/TanishBasu2002/HackHubb)

cd HackHubb
```

#### It is build on Node 20.4.0 it is recomended to be used for this project

Install the project dependencies using npm, yarn, or pnpm:
```bash
npm install
# or
yarn install
# or
pnpm install
```
#### create an .env file for the project to run use the instruction given below-
```bash
DATABASE_URL='will be provided soon'
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=will be provided soon
CLERK_SECRET_KEY=will be provided soon
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
NEXT_CLERK_WEBHOOK_SECRET=will be provided soon

MONGODB_URL=will be provided soon
UPLOADTHING_SECRET=will be provided soon
UPLOADTHING_APP_ID=will be provided soon
```

Then run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
