# Peanut Butter: A Next.js Starter

> It's 3am and you just woke up from a sick dream where you're fighting dinosaurs, but you're stomach is _grumbling_.
>
> What do you do?
>
> There's only one thing to do: go to the kitch, grab a spoon, and start chowing down on a spoonfull of peanutbutter. It's not for everyone, it's certainly not optimal, but it solves your base needs and lets you go back to pursueing your dreams of fighting dinosuars.

That's a metaphor.

This is a Next.js starter setup with a few tools I like, configured in the way I like them. My goal with this project is to be able to spin up new side projects with as little friction as possible.

## What's Included?

- Next.js
- Typescript
- [Packages Directory](#packages)
- Database: `prisma` + `postgres`
- Authentication: `next-auth`
- Unit Testing: `jest` + `@testing-library/react`
- Integration Testing: `cypress` + `@testing-library/cypress`

## Commands

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| yarn              | Install dependencies                     |
| yarn dev          | Start development server                 |
| yarn test         | Run Jest unit tests                      |
| yarn cypress open | Open Cypress integration testing UI      |
| yarn cypress run  | Run Cypress integration tests without UI |
| yarn migrate      | Migrate the database                     |

## Setup

### Environment

- Copy `.env.example` to `.env`

### Database

- Create PostgreSQL database
- Update `DATABASE_URL` inside `.env`.
- Run `yarn migrate`

### Authentication

This starter uses [next-auth](https://next-auth.js.org) for authentication and is configured to work with [GitHub OAuth](#github) out of the box.

To learn how to work with other providers visit [the next-auth documentation](https://next-auth.js.org/configuration/providers).

#### GitHub

[Register a New Github OAuth Application](https://github.com/settings/applications/new) with the following information:

| Field                      | Value                                   |
| -------------------------- | --------------------------------------- |
| Application Name           | your-app-name-dev                       |
| Homepage URL               | http://localhost:3000                   |
| Authorization callback URL | http://localhost:3000/api/auth/callback |

- Set the `GITHUB_CLIENT_ID` in the `.env`
- Generate a new secret and set it as `GITHUB_CLIENT_SECRET` in the `.env`

> _Secure Connection Failed:_ Make sure the urls are `http` and that the `NEXT_AUTH_URL` is not set in your local `.env`.

## Packages

This starter is setup so that anything inside of `packages` can be imported directly. Treat the `packages` directory like a private `node_modules` and organize the code flatly as packages.

### Example: react-button

A simple `react-button` module was added to this starter to demostrate the pattern. The module contains it's tests and source code, and can be imported as it's name.

**File System**

```
packages/
  react-button/
    index.tsx
    react-button.tsx
    react-button.test.tsx
```

**pages/about.tsx**

```diff
-  import { Button } from "../packages/react-button"
+ import { Button } from "react-button"

export function Page() {
  return (
    <>
      <h1>About Us</h1>
      <Button>Say Hi!</Button>
    </>
  )
}
```
