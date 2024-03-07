const Todo = require('../models/Todo');

let todos = [];

// Get all todos
exports.getAllTodos = (req, res) => {
    res.json(todos);
};

// Get todo by ID
exports.getTodoById = (req, res) => {
    const todo = todos.find(todo => todo.id === parseInt(req.params.id));
    if (!todo) {
        return res.status(404).json({ message: 'Todo not found' });
    }
    res.json(todo);
};

// Create new todo
exports.createTodo = (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({ message: 'Title and description are required' });
    }
    const newTodo = new Todo(Date.now(), title, description, false);
    todos.push(newTodo);
    res.status(201).json(newTodo);
};

// Update todo
exports.updateTodo = (req, res) => {
    const { title, description, completed } = req.body;
    const todo = todos.find(todo => todo.id === parseInt(req.params.id));
    if (!todo) {
        return res.status(404).json({ message: 'Todo not found' });
    }
    todo.title = title || todo.title;
    todo.description = description || todo.description;
    todo.completed = completed || todo.completed;
    res.json(todo);
};

// Delete todo
exports.deleteTodo = (req, res) => {
    todos = todos.filter(todo => todo.id !== parseInt(req.params.id));
    res.status(204).end();
};
