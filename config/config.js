let Sequelize = require("sequelize")

const connection = new Sequelize('WorkPlus', 'root', '123456789', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
});

connection.sync()
  .then(() => {
    console.log('Tabela "users" criada com sucesso.');
  })
  .catch((error) => {
    console.error('Erro ao criar tabela "users":', error);
});

export default connection;