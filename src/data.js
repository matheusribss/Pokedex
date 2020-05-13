const Jogador = require("./models/jogador");
const Pokemon = require("./models/pokemon");
const Jogo = require("./models/jogo");

const bocao = new Pokemon("bocao", 99999);
const agahmenon = new Pokemon("agahmenon", 10);
const morcegoMijao = new Pokemon("morcego mijão", 70);

const pokemons = [bocao, agahmenon, morcegoMijao];

const jogador1Pokemons = [bocao, agahmenon];

const jogador2Pokemons = [morcegoMijao];

const jogador1 = new Jogador(
  "Frejat",
  "Gayzinho",
  "O-",
  true,
  jogador1Pokemons
);
const jogador2 = new Jogador(
  "Roberto",
  "Traveco",
  "B+",
  false,
  jogador2Pokemons
);

const jogadores = [jogador1, jogador2];

const jogo = new Jogo(jogadores);

module.exports = {
  jogadores,
  pokemons,
  jogo,
};
