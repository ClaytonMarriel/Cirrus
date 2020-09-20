
const User = require('../models/User')

module.exports = {

    async index(req, res) {
        const users = await User.findAll()
        return res.json(users)
    },

    async store(req, res) {

        const userExists = await User.findOne({ where: { email: req.body.email } })

        //verificando se usuário já está cadastrado
        if (userExists) {
            return res.status(400).json({ error: 'User already exists' })
        }


        const { name, profile, email, password } = req.body

        const user = await User.create({ name, profile, email, password })

        return res.json({ name, profile, email })
    },


}