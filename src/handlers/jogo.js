const pokemons = require("../data").pokemons;
const jogadores = require("../data").jogadores;
const jogo = require("../data").jogo;

function criarJogo(requisicao, resposta) {
  console.log(requisicao.body.pokemons);
  resposta.send(200);
}

function rodada(requisicao, resposta) {
  const rodada = jogo.rodada(
    jogadores[0],
    0,
    "dando jets",
    jogadores[1],
    0,
    "pauladinha"
  );
  resposta.send(rodada);
}

module.exports = {
  criarJogo,
  rodada,
};
