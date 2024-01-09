# Every Realm Backend

This project is a **Express server with TypeScript** with the following stack:

- [**Prisma Client**](https://www.prisma.io/docs/concepts/components/prisma-client): Databases access (ORM)
- [**Prisma Migrate**](https://www.prisma.io/docs/concepts/components/prisma-migrate): Database migrations
- [**PostgreSQL**](https://www.postgresql.org): SQL database

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

### 4. Start the Express server

Launch your Express server with this command:

```
npm run dev
```

Navigate to [http://localhost:8000/docs](http://localhost:8000/docs) in your browser to explore the API of your Express instance.

### 5. Access the Postgres Database

Navigate to [http://localhost:8080](http://localhost:8080) to explore the database

- System: PostgreSQL
- Server: Postgres
- Username: postgres
- Password: password
- Database: everyrealm
