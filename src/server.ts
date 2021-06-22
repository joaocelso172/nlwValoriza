import express from "express";

const app = express();

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

    return response.send("Olá NLW via POST!")
});

// http://localhost:3000
app.listen(3000, () => console.log("Server is running"));