const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const todoRoutes = require('./routes/todoRoutes');
const { errorHandler } = require('./middleware/errorHandling');

// Initialize SQLite database
const db = new sqlite3.Database('src/db/todos.db', (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
        return;
    }
    console.log('Connected to the SQLite database.');

    // Create todos table if it doesn't exist
    db.run(`
        CREATE TABLE IF NOT EXISTS todos (
            id INTEGER PRIMARY KEY,
            title TEXT NOT NULL,
            description TEXT,
            completed BOOLEAN DEFAULT 0
        )
    `);
});

// Middleware for JSON body parsing
app.use(express.json());

// Routes
app.use('/todos', todoRoutes);

// Error handling middleware
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
