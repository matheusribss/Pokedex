const express = require("express")
const Jogo = require ("./jogo")
const Pokemon = require("./pokemon") 

const server = express()
const port = 3000


const bocao = new Pokemon ("bocao", 99999)
const pokemon3 = new Pokemon ("agahmenon", 10)
const pokemon2 = new Pokemon ("morcego mijão",70)

const jogo = new Jogo ()

server.get("/jogar",(requisicao,resposta)=>resposta.send(`${jogo.jogar(bocao,pokemon2)}`))



server.get("/oi",(requisicao,resposta)=>resposta.send("Oi"))


function startServer (){
    server.listen(port,()=>console.log("Server Rodando"))
}



module.exports = startServer


