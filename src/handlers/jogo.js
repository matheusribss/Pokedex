const Jogo = require("../models/jogo");

function criarJogo(requisicao, resposta) {
    console.log(requisicao.body.pokemons);
    resposta.send(200);
  }

  module.exports = criarJogo;