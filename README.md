This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Run the project using docker

1. install Docker
2. Clone the repository
3. Build your container:

```bash
docker build -t marina-jewelry .
```

4. Run your container:

```bash
docker run -p 3000:3000 marina-jewelry
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the login page.

6. here's an email : marina-jewelry@admin.com, and password : keepItSim

## Or

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
