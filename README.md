# Fullstack Web Ecosystem for Developers: 
<img src="https://tanish-basu-portfolio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHackhubb.f6b84d69.png&w=3840&q=95" alt="license">
## Main Technologies:
 <img src="https://skillicons.dev/icons?i=tailwind,ts,react,nextjs,prisma,git,github,mysql,planetscale,mongodb,vercel,linux,webflow," />
Features:

- Image Sharing both Personal and in community
- fast and interactive webflow
- Real-time messaging using Socket.io
- Send attachments as messages using UploadThing
- Delete & Edit messages in real time for all users
- Create Text, Audio and Video call Channels
- 1:1 conversation between members
- 1:1 video calls between members
- Member management (Kick, Role change Guest / Moderator)
- Unique invite link generation & full working invite system
- Infinite loading for messages and posts in batches of 10 (tanstack/query)
- Server creation and customization
- Beautiful UI using TailwindCSS and ShadcnUI
- Full responsivity and mobile UI
- Websocket fallback: Polling with alerts
- ORM using Prisma
- SQL Database integration
- Authentication with Clerk

### Prerequisites

**Node version 18.x.x**

### Cloning the repository

```shell
git clone https://github.com/TanishBasu2002/HackHubb.git
```

### Install packages

```shell
npm i
```

### Setup .env file

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=

NEXT_CLERK_WEBHOOK_SECRET=

MONGODB_URL=

DATABASE_URL=
MUX_TOKEN_SECRET=
MUX_TOKEN_ID=
STRIPE_API_KEY=
NEXT_PUBLIC_APP_URL=http://localhost:3000
STRIPE_WEBHOOK_SECRET=
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

LIVEKIT_API_KEY=
LIVEKIT_API_SECRET=
NEXT_PUBLIC_LIVEKIT_URL=
```

### Setup Prisma

Add MySQL Database (I used PlanetScale)

```shell
npx prisma generate
npx prisma db push

```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command | description                              |
| :------ | :--------------------------------------- |
| `dev`   | Starts a development instance of the app |
