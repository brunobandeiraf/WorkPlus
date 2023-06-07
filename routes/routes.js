import express from "express";
import user from "./user.router.js";
import postTrabalhado from "./cadastro.postTrabalho.routes.js";
import postServico from "./cadastro.postServico.routes.js";
import login from "./login.routes.js";

const router = express.Router();

router.use("/user", user);
router.use("/postTrabalho", postTrabalhado);
router.use("/postServico", postServico);
router.use("/login", login);

export default router;