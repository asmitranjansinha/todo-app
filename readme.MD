# Todo App

## Description
This project implements a simple Todo application using Node.js, Express.js, and SQLite for data storage. Users can perform CRUD operations (Create, Read, Update, Delete) on Todo items through a RESTful API.

## File Structure

```txt
📦src
 ┣ 📂 controllers
 ┃ ┣ 📂 todoController.js
 ┣ 📂 db
 ┃ ┣ 📂 todos.db
 ┣ 📂 middleware
 ┃ ┣ 📂 errorHandling.js
 ┣ 📂 models
 ┃ ┣ 📂 db.js
 ┃ ┣ 📂 Todo.js
 ┣ 📂 routes
 ┃ ┣ 📂 todoRoutes.js
 ┣ 📜app.js
```

## Setup Instructions
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies by running `npm install`.
4. Start the server with `node src/app.js`.

## Usage
- Access the API endpoints using HTTP requests (e.g., POSTman, cURL).
- The base URL for API requests is `http://localhost:3000`.

## API Endpoints
- `GET /todos`: Get all Todo items.
- `GET /todos/:id`: Get a Todo item by ID.
- `POST /todos`: Create a new Todo item.
- `PUT /todos/:id`: Update an existing Todo item.
- `DELETE /todos/:id`: Delete a Todo item.

## Project Dependencies
- `express`: Web framework for Node.js used for handling HTTP requests and routes.
- `sqlite3`: SQLite database driver for Node.js used for data storage.
- `nodemon` (optional, for development): Automatically restarts the server when changes are detected.