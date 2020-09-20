//Configurando a conexão com o banco

const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const User = require('../models/User')
const Ticket = require('../models/Ticket')

const connection = new Sequelize(dbConfig)

User.init(connection)
Ticket.init(connection)

User.associate(connection.models)
Ticket.associate(connection.models)

module.exports = connection