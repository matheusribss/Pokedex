class Pokemon {
  constructor(nome = "", ataque = 50, poderes = []) {
    this.nome = nome;
    this.vida = 100;
    this.ataque = ataque;
    this.estaVivo = true;
    this.poderes = poderes;
  }

  usarPoder(poder) {
    this.verificarVida();

    for (var i = 0; i < this.poderes.length; i++) {
      if (this.poderes[i].nome == poder) {
        if (this.estaVivo && poder !== null) {
          const dano = this.poderes[i].dano * this.ataque;

          return dano;
        }
      }
    }

    return null;
  }

  verificarVida() {
    if (this.vida <= 0) {
      this.estaVivo = false;
    }
  }

  sofrerDano(dano) {
    this.vida = this.vida - dano;
    this.verificarVida();
  }

  verStatus() {
    return `nome: ${this.nome},vida: ${this.vida}, ataque: ${this.ataque}, estaVivo: ${this.estaVivo}`;
  }
}

module.exports = Pokemon;
