import Sequelize from "sequelize";
import connection from "../config/config.js";
import User from "./User.js";

const PostServico = connection.define(
    'postServico',
    {
        idPostTrabalho: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        idUser: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'idUser',
            }
        },
        tipoServico: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        regiao: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        dtDisponivel: {
            type: Sequelize.DATE,
            unique: true,
            allowNull: false,
        },
        periodoMatutino: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        },
        periodoVespertino: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        },
        periodoNoturno: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        },
        linkWhats: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        descricao: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    }
);

Review.belongsTo(User, {
    foreignKey: 'idUser'
});

export default PostServico;