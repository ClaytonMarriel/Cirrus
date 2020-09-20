//Informações para a criação do banco

module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'root',
    database: 'db_tickets',
    define: {
        timestamps: true,
        underscored: true,

    },
}