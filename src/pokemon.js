class Pokemon{

    constructor(nome,ataque,tipo){
        this.nome = nome
        this.vida = 100
        this.ataque = ataque
        this.estaVivo = true
        this.tipo = tipo
    }

    usarPoder(poder){

        if (this.vida <= 0){
            this.estaVivo = false
        }
        


        if (this.estaVivo && poder!== null){
            
            return 100
        }

            return null
     
    }


    verStatus(){
        return `nome: ${this.nome},vida: ${this.vida}, ataque: ${this.ataque}, estaVivo: ${this.estaVivo}`
    }


    
}

module.exports = Pokemon
