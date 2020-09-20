const express = require('express')

const UserController = require('./controllers/UserController')
const SessionController = require('./controllers/SessionController')
const authMiddleware = require('./middlewares/auth')

const TicketController = require('./controllers/TicketController')

const routes = express.Router()

routes.post('/users', UserController.store)
routes.get('/users', UserController.index)

routes.post('/sessions', SessionController.store)

routes.use(authMiddleware)

routes.post('/users/:users_id/tickets', TicketController.store)
routes.get('/users/:users_id/tickets', TicketController.index)
routes.delete('/users/:id/tickets', TicketController.delete)
routes.put('/users/:id/tickets', TicketController.update)
module.exports = routes