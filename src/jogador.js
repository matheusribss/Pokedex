class Jogador{

    constructor(nome="",sexualidade="",tipoSangue="",jaChupou=true,pokemons=[]){
        this.nome = nome
        this.sexualidade = sexualidade
        this.tipoSangue = tipoSangue
        this.jaChupou = jaChupou
        this.pokemons = pokemons
    }

    verStatusJogador(){
        return `nome: ${this.nome}, sexualidade: ${this.sexualidade}, tipo Sanguineo: ${this.tipoSangue}, ja Chupou Alguem?: ${this.jaChupou}, pokemons : ${this.pokemons} `
    }

    adicionarPokemon(pokemon=null){

        if(pokemon!==null) return this.pokemons.push(pokemon)

        return pokemon

        
    }

}


module.exports = Jogador