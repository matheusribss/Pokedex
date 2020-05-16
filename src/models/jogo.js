class Jogo {
  constructor(jogadores = []) {
    this.temGanhador = false;
    this.rodadas = [];
    this.mestreGinasio = jogadores[0];
    this.desafiante = jogadores[1];
    this.pokemonDesafiante = null;
    this.pokemonMestreGinasio = null;
    this.ganhador = "mestre";
  }

  setarPokemon(indexPokemonDesafiante, indexPokemonMestre) {
    //DEFININDO OS POKEMONS
    this.pokemonMestreGinasio = this.mestreGinasio.pokemons[indexPokemonMestre];
    this.pokemonDesafiante = this.desafiante.pokemons[indexPokemonDesafiante];
  }

  calcularDano(indexPoderDesafiante, indexPoderMestreGinasio) {
    const poderDesafiante = this.pokemonDesafiante.poderes[indexPoderDesafiante]
      .nome;

    console.log(poderDesafiante);

    const danoDesafiante = this.pokemonDesafiante.usarPoder(poderDesafiante);

    const poderMestreGinasio = this.pokemonMestreGinasio.poderes[
      indexPoderMestreGinasio
    ].nome;

    const danoMestredoGinasio = this.pokemonMestreGinasio.usarPoder(
      poderMestreGinasio
    );

    return {
      danoDesafiante: danoDesafiante,
      danoMestredoGinasio: danoMestredoGinasio,
    };
  }

  verificarGanhador() {
    var countPokemonsDesafianteMortos = 0;
    var countPokemonsMestreMortos = 0;

    this.desafiante.pokemons.forEach((pokemon) => {
      if (!pokemon.estaVivo) {
        countPokemonsDesafianteMortos++;
      }
    });

    this.mestreGinasio.pokemons.forEach((pokemon) => {
      if (!pokemon.estaVivo) {
        countPokemonsMestreMortos++;
      }
    });

    if (countPokemonsDesafianteMortos >= this.desafiante.pokemons.length) {
      this.temGanhador = true;
      return;
    }

    if (countPokemonsMestreMortos >= this.mestreGinasio.pokemons.length) {
      this.temGanhador = true;
      this.ganhador = "desafiante";
    }
  }

  rodada(
    indexPokemonDesafiante,
    indexPokemonMestre,
    indexPoderDesafiante,
    indexPoderMestreGinasio
  ) {
    if (!this.temGanhador) {
      this.setarPokemon(indexPokemonDesafiante, indexPokemonMestre);
      const logDano = this.calcularDano(
        indexPoderDesafiante,
        indexPoderMestreGinasio
      );

      console.log(logDano);
      this.verificarGanhador();

      const rodada = {
        pokemonDesafiante: this.pokemonDesafiante,
        pokemonMestreGinasio: this.pokemonMestreGinasio,
        dano: logDano,
      };

      this.rodadas.push(rodada);
    }
  }
}

module.exports = Jogo;
