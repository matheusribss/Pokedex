function criarJogador(requisicao, resposta) {
  console.log(requisicao.body.nome);
  resposta.send(200);
}

module.exports = criarJogador;
