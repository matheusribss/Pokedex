class Pokemon {
  constructor(nome = "", ataque = 50, tipo = "fogo", poderes = []) {
    this.nome = nome;
    this.vida = 100;
    this.ataque = ataque;
    this.estaVivo = true;
    this.tipo = tipo;
    this.poderes = [];
  }

  usarPoder(poder) {
    if (this.vida <= 0) {
      this.estaVivo = false;
    }

    for (i = 0; i < this.poderes.length; i++) {
      if (this.poderes[i].nome == poder) {
        if (this.estaVivo && poder !== null) {
          return poder.dano;
        }
      }
    }

    return null;
  }

  sofrerDano(dano) {
    this.vida = this.vida - dano;
  }

  verStatus() {
    return `nome: ${this.nome},vida: ${this.vida}, ataque: ${this.ataque}, estaVivo: ${this.estaVivo}`;
  }
}

module.exports = Pokemon;
