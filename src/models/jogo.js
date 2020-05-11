class Jogo {
  constructor(
    jogadores = [],
  ){
    this.jogadores = jogadores
  }
 
  rodada(jogador,indexPokemon,poder,desafiante,indexPokemonDesafiante,poderDesafiante){

    const pokemon = jogador.pokemons[indexPokemon]

    const dano = pokemon.usarPoder(poder)

    const inimigo = desafiante.pokemons[indexPokemonDesafiante]


    const danoDesafiante = inimigo.usarPoder(poderDesafiante)

    pokemon.vida = pokemon.vida - danoDesafiante

    inimigo.vida = inimigo.vida - dano

  }

}

module.exports = Jogo;
