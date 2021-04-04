# next-prisma-starter

## What's Included?

- Next.js
- Typescript
- [Packages Directory](#packages)
- Database: `prisma` + `postgres`
- Authentication: `next-auth`
- Unit Testing: `jest` + `@testing-library/react`
- Integration Testing: `cypress` + `@testing-library/cypress`

## Database Setup

- Create PostgreSQL database
- Copy `.env.example` to `.env`
- Update DATABASE_URL inside `.env`
- Migrate
  ```
  yarn migrate
  ```

## Authentication Setup

This starter is setup to work with [GitHub OAuth](#github) out of the box.

To learn how to work with other providers visit [the next-auth documentation](https://next-auth.js.org/configuration/providers).

### GitHub

[Register a New Github OAuth Application](https://github.com/settings/applications/new) with the following information:

| Field                      | Value                                   |
| -------------------------- | --------------------------------------- |
| Application Name           | my-app-dev                              |
| Homepage URL               | http://localhost:3000                   |
| Authorization callback URL | http://localhost:3000/api/auth/callback |

- Set the `GITHUB_CLIENT_ID` in the `.env`
- Generate a new secret and set it as `GITHUB_CLIENT_SECRET` in the `.env`

> _Secure Connection Failed:_ Make sure the urls are `http` and that the `NEXT_AUTH_URL` is not set in your local `.env`.

## Packages

This starter is stup so that anything inside of `packages` can be imported by name.

Our suggestion is that you treat the `packages` directory like a private node_modules and organize the code accordingly.
