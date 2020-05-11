const Pokemon = require("../models/pokemon");

const pokemons = [
    new Pokemon("bocao", 99999),
    new Pokemon("agahmenon", 10),
    new Pokemon("morcego mijão", 70),
  ];

function criarPokemon(requisicao, resposta) {
    console.log(requisicao.body.nome);
    resposta.send(200);
  }

  function pegarPokemon(requisicao, resposta){
    resposta.send(pokemons)
  }

  module.exports = {
      criarPokemon,
      pegarPokemon
  }