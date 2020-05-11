const Jogador = require("../models/jogador");

const jogadores = [
    new Jogador("Frejat", "Gayzinho", "O-"),
    new Jogador("Roberto", "Traveco", "B+"),
    new Jogador("Marcela Eldourado", "Sapatão", "A-"),
  ];

function criarJogador(requisicao, resposta) {
  console.log(requisicao.body.nome);
  resposta.send(200);
}

function pegarJogador (requisicao,resposta){
    resposta.send(jogadores)
}

module.exports = {
    criarJogador,
    pegarJogador
}
