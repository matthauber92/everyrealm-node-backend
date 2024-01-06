# Every Realm Backend

This project is a **Express server with TypeScript** with the following stack:

- [**Prisma Client**](https://www.prisma.io/docs/concepts/components/prisma-client): Databases access (ORM)
- [**Prisma Migrate**](https://www.prisma.io/docs/concepts/components/prisma-migrate): Database migrations
- [**PostgreSQL**](https://www.postgresql.org): SQL database

## Contents

- [Getting Started](#getting-started)
- [Using the GraphQL API](#using-the-graphql-api)
- [Evolving the app](#evolving-the-app)
- [Explore and manipulate data](#explore-and-manipulate-data)
- [Access control](#access-control)

## Getting started

### 1. Install dependencies

```sh
npm install
```

### 2. Create and seed the database

Make sure [Docker](https://www.docker.com) is installed and running locally.

Run the following command to create and start your postgres database Docker container in detached mode.

```sh
docker-compose up -d
```

Create and configure an environment file for Prisma to connect with your database instance.

```sh
touch prisma/.env && echo "DATABASE_URL=\"postgresql://postgres:password@localhost:5432/everyrealm\"" > prisma/.env
```

Run the following command to initialize your database.

```
npx prisma migrate dev
```

