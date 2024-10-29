
# IA03 - User Registration

This project is part of the Advanced Web Programming course - VNUHCMUS - 2024.

## Student Infomation

- Student Name: Nguyen Duc Quang
- Student ID: 20120359

## How to run

1. Clone the repository
2. Run the following command to install dependencies both for the API and the web project

```bash
yarn install
```

3. Add required environment variables to `.env` file in the root directory

```env
# FRONTEND
API_URL=http://localhost:3001

# BACKEND
DATABASE_URL=postgres://username:password@localhost:5432/dbname
```

4. Run the following command to start the API

```bash
cd ia03-be && yarn start:dev
```

5. Run the following command to start the web project

```bash
cd ia03-fe && yarn dev
```

## Deployment

- The API is deployed on [Render](https://dashboard.render.com/)
- The web project is deployed on [Vercel](https://ia-03-user-registration.vercel.app)
