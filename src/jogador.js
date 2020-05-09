class Jogador{

    constructor(nome,sexualidade,tipoSangue,jaChupou){
        this.nome = nome
        this.sexualidade = sexualidade
        this.tipoSangue = tipoSangue
        this.jaChupou = true
    }

    verStatusJogador(){
        return `nome: ${this.nome}, sexualidade: ${this.sexualidade}, tipo Sanguineo: ${this.tipoSangue}, ja Chupou Alguem?: ${this.jaChupou} `
    }

}


module.exports = Jogador