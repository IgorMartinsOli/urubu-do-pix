const express = require('express');
const User = require('./controllers/userController');
const routes = express.Router();

routes.get('/users', User.getAll);
routes.get('/users/:id', User.getById);
routes.post('/users', User.store);
routes.put('/users/:id', User.update);
routes.delete('/users/:id', User.delete);

module.exports = routes;