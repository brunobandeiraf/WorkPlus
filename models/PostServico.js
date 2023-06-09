import Sequelize from "sequelize";
import connection from "../config/db.js";
import User from "./User.js";

const PostServico = connection.define(
    'postServico',
    {
        idPostServico: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: true,
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
            allowNull: true,
        },
        regiao: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        dtDisponivel: {
            type: Sequelize.DATE,
            unique: true,
            allowNull: true,
        },
        periodoMatutino: {
            type: Sequelize.BOOLEAN,
            allowNull: true,
        },
        periodoVespertino: {
            type: Sequelize.BOOLEAN,
            allowNull: true,
        },
        periodoNoturno: {
            type: Sequelize.BOOLEAN,
            allowNull: true,
        },
        linkWhats: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        descricao: {
            type: Sequelize.STRING,
            allowNull: true,
        },
    }
);

PostServico.belongsTo(User, {
    foreignKey: 'idUser'
});

export default PostServico;