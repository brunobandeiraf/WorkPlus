import Sequelize from "sequelize";
import connection from "../config/db.js";
import User from "./User.js";

const PostTrabalho = connection.define(
    'postTrabalho',
    {
        idPostTrabalho: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        // idUser: {
        //     type: Sequelize.INTEGER,
        //     allowNull: false,
        //     references: {
        //         model: 'users',
        //         key: 'idUser',
        //     }
        // },
        tipoServico: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        endereco: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        dtInicio: {
            type: Sequelize.DATE,
            unique: true,
            allowNull: true,
        },
        periodoMatutino: {
            type: Sequelize.BOOLEAN,
            allowNull: true,
        },
        // periodoVespertino: {
        //     type: Sequelize.BOOLEAN,
        //     allowNull: true,
        // },
        // periodoNoturno: {
        //     type: Sequelize.BOOLEAN,
        //     allowNull: true,
        // },
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

PostTrabalho.belongsTo(User, {
    foreignKey: 'idUser'
});

export default PostTrabalho;