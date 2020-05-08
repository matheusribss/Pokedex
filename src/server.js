const express = require("express")


const server = express()
const port = 3000

server.get("/oi",(requisicao,resposta)=>resposta.send("Oi"))



server.listen(port,()=>console.log("Server Rodando"))


