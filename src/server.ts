import "reflect-metadata";
import express from "express";

import { router } from "./routes";

import "./database";

const app = express();

app.use(express.json());

app.use(router);

/**
 * GET => Buscar informação
 * POST => Inserir informação
 * PUT => Atualizar informação
 * DELETE => Excluir informação
 * PATCH => Alterar informação específica do obj
 */

app.get("/test", (request, response) => {
    //Request => Entrando
    //Response => Saindo

    return response.send("Olá NLW via GET!");
});

app.post("/test-post", (request, response) =>{

    return response.send("Olá NLW via POST! Primeira Aula")
});

// http://localhost:3000
app.listen(3000, () => console.log("Server is running"));

