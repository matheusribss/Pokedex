const express = require("express")
const Jogo = require ("./jogo")
const Pokemon = require("./pokemon") 
const Jogador = require ("./jogador")

const server = express()
const port = 3000


const jogador1 = new Jogador ("Frejat", "Gayzinho" , "O-")
const jogador2 = new Jogador ("Roberto", "Traveco", "B+")
const jogador3 = new Jogador ("Marcela Eldourado","Sapatão", "A-")



server.get("/jogador",(requisicao,resposta)=>resposta.send(jogador1))




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


