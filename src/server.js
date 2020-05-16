const express = require("express");
const criarJogador = require("./handlers/jogador").criarJogador;
const pegarJogador = require("./handlers/jogador").pegarJogador;
const criarJogo = require("./handlers/jogo").criarJogo;
const criarPokemon = require("./handlers/pokemons").criarPokemon;
const pegarPokemon = require("./handlers/pokemons").pegarPokemon;
const rodada = require("./handlers/jogo").rodada;

const server = express();
const port = 3000;
server.use(express.json());

server.get("/jogadores", pegarJogador);

server.post("/jogadores", criarJogador);

server.post("/pokemons", criarPokemon);

server.get("/pokemons", pegarPokemon);

server.post("/jogos", criarJogo);

server.get("/rodada", rodada);

function startServer() {
  server.listen(port, () => console.log("Server Rodando"));
}

module.exports = startServer;
