const express = require('express');
const app = express();
const todoRoutes = require('./routes/todoRoutes');
const { errorHandler } = require('./middleware/errorHandling');

// Middleware
app.use(express.json());

// Routes
app.use('/todos', todoRoutes);

// Error handling middleware
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
