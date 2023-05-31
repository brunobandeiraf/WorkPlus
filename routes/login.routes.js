import express from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const login = express.Router();

login.post("/", async (req, res) => {

    const { userName, password } = req.body;

    const registeredUser = await User.findOne(
        { where: { userName }}
    ).catch(
        (err) => {
            console.log("Error: ", err);
        }
    );

    if(!registeredUser)
        return res 
            .status(400)
            .json({ message: "Usuário ou senha inválidos."})
    
    if(!bcrypt.compareSync(password, registeredUser.password))
        return res
            .status(400)
            .json({message: "Usuário ou senha inválidos."})

    const token = jwt.sign(
        {
            idUser: registeredUser.idUser,
            name: registeredUser.name,
        },
        process.env.JWT_SECRET, 
        {
            expiresIn: "1h"
        }
    );

    res.json({
        message:"Bem-Vindo",
        token: token
    })
});

export default login;