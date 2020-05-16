function criarJogador(requisicao, resposta) {
  console.log(requisicao.body.nome);
  resposta.send(200);
}

function pegarJogador(requisicao, resposta) {
  resposta.send(jogadores);
}

module.exports = {
  criarJogador,
  pegarJogador,
};
