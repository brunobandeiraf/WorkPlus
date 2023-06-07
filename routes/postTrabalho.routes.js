import express from "express";
import PostTrabalho from "../models/PostTrabalho.js"

const postTrabalho = express.Router();

postTrabalho.get("/", (req, res) => {
    res.send("Rota de postTrabalhado");
});

 postTrabalho.post("/register", async (req, res) => {
//     periodoMatutino, periodoVespertino, periodoNoturno,
    const { idPostTrabalho, tipoServico, endereco, dtInicio, periodoMatutino, linkWhats, descricao } = req.body;

    const newPostTrabalho = new PostTrabalho({ idPostTrabalho, tipoServico, endereco, dtInicio,periodoMatutino, linkWhats, descricao});

    const savePostTrabalho = await newPostTrabalho.save().catch((err) => {
        console.log("Error: ", err);
        res.status(500).json({ error: "Não é possivel enviar esse Post"});
    });

    if(savePostTrabalho) 
    console.log(savePostTrabalho);
    res.json({ message: "Post de Trabalho enviado"});
});

postTrabalho.get("/ProcurarPorPostTrabalho", async (req, res) => {
    const postsTrabalho = await PostTrabalho.findAll().catch(
        (err) => {
            console.log(err)
        }
    );
    
    if(postsTrabalho){
        return res.json({postsTrabalho})
    }else{
        return null
    };
});
 
export default postTrabalho;


