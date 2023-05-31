import Sequelize from "sequelize";
import connection from "../config/config.js";

const User = connection.define(
    'user',
    {
        idUser: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        userName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING,
            unique: true,
            validate: {
                isEmail: true,
            }
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        cpf: {
            type: Sequelize.STRING(11),
            unique: true,
            allowNull: false,
        },
        dataNascimento: {
            type: Sequelize.DATE,
            allowNull: false,
        }
    }

);

export default User;