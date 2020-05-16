class Poder {
  constructor(nome = "", dano = 0) {
    this.nome = nome;
    this.dano = dano;
  }
}

const INVESTIDA = "investida";
const PAULADINHA = "pauladinha";
const METEORO_DE_GELO = "meteoro_de_gelo";
const LINDEZINHA = "lindezinha";
const DEDADA_NA_MOLERA = "dedada_na_molera";

module.exports = {
  Poder,
  INVESTIDA,
  PAULADINHA,
  METEORO_DE_GELO,
  LINDEZINHA,
  DEDADA_NA_MOLERA,
};
