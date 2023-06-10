import express from "express";
import PostServico from "../models/PostServico.js"

const postServico = express.Router();

postServico.get("/", (req, res) => {
    res.send("Rota de postServico");
});

postServico.post("/register", async (req, res) => {

    const { idPostServico, idUser, tipoServico, regiao, dtDisponivel, periodoMatutino, periodoVespertino, periodoNoturno, linkWhats, descricao } = req.body;

    const newPostServico = new PostServico({ idPostServico, idUser, tipoServico, regiao, dtDisponivel, periodoMatutino, periodoVespertino, periodoNoturno, linkWhats, descricao });

    const savePostServico = await newPostServico.save().catch((err) => {
        console.log("Error: ", err);
        res.status(500).json({ error: "Não é possivel enviar esse Post"});
    });

    if(savePostServico) res.json({ message: "Post de Serviço enviado"});
});

postServico.get("/ProcurarPorPostServico", async (req, res) => {
    const postsServico = await PostServico.findAll().catch(
        (err) => {
            console.log(err)
        }
    );
    
    if(postsServico){
        return res.json({postsServico})
    }else{
        return null
    };
});
 
export default postServico;






 