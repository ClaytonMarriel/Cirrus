const { Model, DataTypes } = require('sequelize')
const bcrypt = require('bcryptjs')


class User extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            profile: DataTypes.STRING,
            email: DataTypes.STRING,
            password_hash: DataTypes.STRING,
            password: DataTypes.VIRTUAL
        }, {
            sequelize,
        })
        //Trecho de código executado antes de qualquer usuario ser criado ou editado
        this.addHook('beforeSave', async (user) => {
            if (user.password) {
                user.password_hash = await bcrypt.hash(user.password, 8)
            }

        })

        return this
    }

    //Verificando a senha digitada pelo usuário
    checkPassword(password) {
        return bcrypt.compare(password, this.password_hash)
    }
    static associate(models) {
        this.hasMany(models.Ticket, { foreignKey: 'users_id', as: 'ticket' })
    }
}

module.exports = User