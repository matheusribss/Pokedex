function criarPokemon(requisicao, resposta) {
  console.log(requisicao.body.nome);
  resposta.send(200);
}

function pegarPokemon(requisicao, resposta) {
  resposta.send(pokemons);
}

module.exports = {
  criarPokemon,
  pegarPokemon,
};
