class Jogo {
  constructor(jogadores = []) {
    this.jogadores = jogadores;
    this.temGanhador = true;
    this.rodadas = [];
  }

  rodada(
    jogador,
    indexPokemon,
    poder,
    desafiante,
    indexPokemonDesafiante,
    poderDesafiante
  ) {
    var rodada = {
      pokemonVida: null,
      inimigoVida: null,
      dano: null,
      danoDesafiante: null,
      temGanhador: this.temGanhador,
    };

    if (!this.temGanhador) {
      const pokemon = jogador.pokemons[indexPokemon];

      const dano = pokemon.usarPoder(poder);

      const inimigo = desafiante.pokemons[indexPokemonDesafiante];

      const danoDesafiante = inimigo.usarPoder(poderDesafiante);

      pokemon.sofrerDano(danoDesafiante);
      inimigo.sofrerDano(dano);

      rodada = JSON.stringify({
        pokemonVida: pokemon.vida,
        inimigoVida: inimigo.vida,
        dano: dano,
        danoDesafiante: danoDesafiante,
        rodadas: this.rodadas,
      });

      this.rodadas.push(rodada);
    }

    return rodada;
  }
}

module.exports = Jogo;
