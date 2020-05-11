const express = require("express");
const Jogo = require("./models/jogo");
const Pokemon = require("./models/pokemon");
const Jogador = require("./models/jogador");
const criarJogador = require("./handlers/jogador");

const server = express();
const port = 3000;
server.use(express.json());

const pokemons = [
  new Pokemon("bocao", 99999),
  new Pokemon("agahmenon", 10),
  new Pokemon("morcego mijão", 70),
];

const jogadores = [
  new Jogador("Frejat", "Gayzinho", "O-"),
  new Jogador("Roberto", "Traveco", "B+"),
  new Jogador("Marcela Eldourado", "Sapatão", "A-"),
];

server.get("/jogadores", (requisicao, resposta) => resposta.send(jogadores));

server.post("/jogadores", criarJogador);

server.post("/pokemons", function (requisicao, resposta) {
  pokemons.push(new Pokemon(requisicao.body.nome));
  resposta.send(200);
});

server.get("/pokemons", (requisicao, resposta) => resposta.send(pokemons));

function startServer() {
  server.listen(port, () => console.log("Server Rodando"));
}

module.exports = startServer;
