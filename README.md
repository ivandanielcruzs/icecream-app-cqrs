# 🧊 Ice Cream CQRS API – NestJS Example

This is a **very simple and educational** project demonstrating how to implement the **CQRS (Command Query Responsibility Segregation)** pattern using **NestJS** and **TypeORM** with **PostgreSQL**.

> ⚠️ This is not a production-ready architecture. It's designed to **quickly understand how CQRS works in NestJS**.

---

## 🧱 Technologies Used

- [NestJS](https://nestjs.com/)
- [TypeORM](https://typeorm.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Docker](https://www.docker.com/)
- CQRS Module from `@nestjs/cqrs`

---

## 📁 Project Structure

```
src/
├── icecream/
│   ├── commands/              # Command models
│   ├── queries/               # Query models
|   ├── handlers/              # Handlers for Commands and Quries
│   ├── icecream.entity.ts     # TypeORM entity
│   ├── icecream.service.ts    # Domain logic
│   ├── icecream.controller.ts
│   └── icecream.module.ts
├── app.module.ts
└── main.ts
```

---

## 🚀 How to Run

### 1. Clone the repo and install dependencies

```bash
git clone <your-repo-url>
cd icecream-app
npm install
```

### 2. Make sure Docker is running and then start the app

```bash
docker-compose up --build
```

This will:

- Start a PostgreSQL container on port `5432`
- Build and run the NestJS app on port `3000`

### 3. Test the API

Use Postman, curl, or any REST client:

- `POST    /icecreams` – Create new ice cream  
- `GET     /icecreams` – List all ice creams  
- `PUT     /icecreams/:id` – Update an existing item  
- `DELETE  /icecreams/:id` – Remove an item  

---

## 🛠 Environment Variables

Create a `.env` file in the root folder:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASS=postgres
DB_NAME=icecream
PORT=3000
```

Docker will override these values when running.

---

## 📌 Purpose

This project is meant to:

- Demonstrate **how CQRS can be structured** in a NestJS application.
- Provide a **clear separation between reads (queries) and writes (commands)**.
- Serve as a **starter template or learning resource**.

---

## ⚙️ Build without Docker

If you want to run the backend locally (assuming PostgreSQL is already running):

```bash
npm run start:dev
```

---

## 🧪 Sample JSON for POST

```json
{
  "flavor": "Vanilla",
  "price": 3.5
}
```

---

## 📬 Feedback

Feel free to fork, modify, or use as a starting point.  
For improvements or questions, open an issue or PR.