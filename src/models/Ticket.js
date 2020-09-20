const { Model, DataTypes } = require('sequelize')

class Ticket extends Model {
    //init: metodo, recebe a conexão com a base de dados

    static init(sequelize) {
        //chamando a classe model com o init
        super.init({
            assunto: DataTypes.STRING,
            mensagem: DataTypes.STRING,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'users_id', as: 'user' })
    }
}

module.exports = Ticket