# Task Manager App Server

This is the server-side of the Task Manager application, built with Node.js and Express.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Technologies Used](#technologies-used)
- [API Endpoints](#api-endpoints)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v14.x or later)
- [npm](https://www.npmjs.com/get-npm)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Abhishek-Gurav/TaskManagementAppServer.git
   cd TaskManagementAppServer
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root of the project and add the following environment variables:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

4. Start the server:
   ```bash
   npm start
   ```

   The server should now be running on [http://localhost:5000](http://localhost:5000).

## Project Structure

```
src/
├── controllers/
│   ├── authController.js
│   ├── taskController.js
├── middleware/
│   ├── authMiddleware.js
├── models/
│   ├── Task.js
│   ├── User.js
├── routes/
│   ├── authRoutes.js
│   ├── taskRoutes.js
├── utils/
│   ├── db.js
├── app.js
├── server.js
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Starts the server in production mode.

### `npm run dev`

Starts the server in development mode with [Nodemon](https://nodemon.io/).

## Technologies Used

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [JWT](https://jwt.io/)

## API Endpoints

### Auth Routes

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login a user

### Task Routes

- `GET /api/tasks` - Get all tasks
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/:id` - Update a task
- `DELETE /api/tasks/:id` - Delete a task
- `POST /api/tasks/:id/toggleTask` - Toggle task completion status
