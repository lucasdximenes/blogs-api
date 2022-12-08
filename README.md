# Blog API

---

## Description 📜

This is a simple blog API that allows you to create, read, update and delete posts and categories. And also allow to register and login users. This API is built with Node.js, Express.js and MySQL with Sequelize ORM. This API is built with the MSC pattern.

Built with:

- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- [Sequelize](https://sequelize.org/)
- [Swagger](https://swagger.io/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [JWT](https://jwt.io/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)

Made with ❤️ by [Lucas Ximenes](https://www.linkedin.com/in/lucasdximenes)

---

## Features 📋

- [x] Create, read, update and delete posts
- [x] Create and read categories
- [x] Register, read and login users
- [x] Authentication with JWT
- [x] API documentation with Swagger

---

## Installation 🛠

<details>
<summary>Installation with Docker 🐳</summary>

1. Clone the repository

```bash
git clone git@github.com:lucasdximenes/blogs-api.git
```

2. Enter the project folder

```bash
cd blogs-api
```

3. You need to have Docker and Docker Compose installed on your machine. If you don't have it, you can download it [here](https://docs.docker.com/get-docker/) and [here](https://docs.docker.com/compose/install/).

4. Run the following command to start the containers and the API

```bash
docker-compose up -d
```

5. The API will be running on port 3001. You can access it by going to [http://localhost:3001](http://localhost:3001)

</details>

<details>
<summary>Installation without Docker 🌊</summary>

1. Clone the repository

```bash
git clone git@github.com:lucasdximenes/blogs-api.git
```

2. Enter the project folder

```bash
cd blogs-api
```

3. Install the dependencies

```bash
npm install
```

4. You need to have MySQL installed on your machine. If you don't have it, you can download it [here](https://dev.mysql.com/downloads/).

5. Create an `.env` file in the root of the project and add the following environment variables

```.env
MYSQL_USER=YOUR_MYSQL_USER
MYSQL_PASSWORD=YOUR_MYSQL_PASSWORD
MYSQL_HOST=YOUR_MYSQL_HOST
MYSQL_DATABASE=YOUR_MYSQL_DATABASE
JWT_SECRET=YOUR_JWT_SECRET
API_HOST=YOUR_API_HOST
API_PORT=YOUR_API_PORT
NODE_ENV=YOUR_NODE_ENV
```

6. Run the command below to create the database and migrate the tables

```bash
npm run prestart
```

7. Run the command below to seed the database with some data

```bash
npm run seed
```

8. Run the command below to start the API

```bash
npm start # or npm run dev
```

</details>

---

## Documentation 📚

You can access the documentation by going to endpoint `/api-docs` in your browser. For example, if you are running the API locally in `3001` port, you can access it by going to [http://localhost:3001/api-docs](http://localhost:3001/api-docs)

![API Documentation](https://user-images.githubusercontent.com/71415845/206444981-bc356b45-5930-4fae-8065-5e9921e25788.mp4)



---
