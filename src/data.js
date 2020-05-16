const Jogador = require("./models/jogador");
const Pokemon = require("./models/pokemon");
const Jogo = require("./models/jogo");
const INVESTIDA = require("./models/poder").INVESTIDA;
const METEORO_DE_GELO = require("./models/poder").METEORO_DE_GELO;
const PAULADINHA = require("./models/poder").PAULADINHA;
const LINDEZINHA = require("./models/poder").LINDEZINHA;
const DEDADA_NA_MOLERA = require("./models/poder").DEDADA_NA_MOLERA;
const Poder = require("./models/poder").Poder;

const investida = new Poder(INVESTIDA, 10);
const meteoroDeGelo = new Poder(METEORO_DE_GELO, 15);
const pauladinha = new Poder(PAULADINHA, 5);
const lindezinha = new Poder(LINDEZINHA, 5);
const dedaNaMolera = new Poder(DEDADA_NA_MOLERA, 50);

const bocaoPoderes = [meteoroDeGelo, pauladinha];
const bocao = new Pokemon("bocao", 1, bocaoPoderes);

const agahmenonPoderes = [dedaNaMolera, lindezinha, METEORO_DE_GELO];
const agahmenon = new Pokemon("agahmenon", 2, agahmenonPoderes);

const morcegoMijaoPoderes = [investida, pauladinha];
const morcegoMijao = new Pokemon("morcego mijão", 3, morcegoMijaoPoderes);

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
