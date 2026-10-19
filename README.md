# taskmaster

todo app with user and admin dashboards.

## features

- user sign up / sign in (jwt, bcrypt)
- add, complete and delete todos
- admin dashboard with users

## stack

react 18 + vite · recoil · tailwind css · framer motion · express · mongodb (mongoose) · zod

## run locally

needs node 20.6+.

```bash
npm install && cp backend/.env.example backend/.env && node --env-file=backend/.env backend/index.js
cd frontend && npm install && npm run dev
```

## env

copy `backend/.env.example` to `backend/.env` and set `MONGODB_URI`.
