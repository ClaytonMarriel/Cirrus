const User = require('../models/User')
const Ticket = require('../models/Ticket')
const { update } = require('lodash')

module.exports = {
    async index(req, res) {
        const { users_id } = req.params

        const user = await User.findByPk(users_id, {
            include: { association: 'ticket' }
        })

        return res.json(user)


    },

    async store(req, res) {
        const { users_id } = req.params
        const { assunto, mensagem } = req.body

        const user = await User.findByPk(users_id)

        if (!user) {
            return res.status(400).json({ error: 'User not found' })
        }

        const ticket = await Ticket.create({
            assunto,
            mensagem,
            users_id,
        })

        return res.json(ticket)
    },

    async delete(req, res) {
        const { id } = req.params

        const ticket = await Ticket.findByPk(id)

        if (!ticket) {
            return res.status(400).json({ error: 'Ticket not found' })
        }

        await ticket.destroy()

        return res.json()

    },

    async update(req, res) {
        const { id } = req.params
        const { assunto, mensagem } = req.body


        const ticket = await Ticket.findByPk(id)

        if (!ticket) {
            return res.status(400).json({ error: 'Ticket not found' })
        }

        await ticket.update(
            {
                assunto
            },
            {
                mensagem
            },
        )
            .then(result => res.json({ message: 'Update succecss' }))
            .catch(error => res.json({ message: 'Erro ao atualizar' }))

    }
}