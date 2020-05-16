const jogo = require("../src/data").jogo;

test("deveria jogar uma rodada do jogo", () => {
  const indexPokemonDesafiante = 0;
  const indexPokemonMestre = 0;
  const poderDesafiante = 0;
  const poderMestreGinasio = 0;

  jogo.rodada(
    indexPokemonDesafiante,
    indexPokemonMestre,
    poderDesafiante,
    poderMestreGinasio
  );
});
