class Pokemon{

    constructor(nome,ataque,tipo){
        this.nome = nome
        this.vida = 100
        this.ataque = ataque
        this.estaVivo = true
        this.tipo = tipo
    }

    usarPoder(nome){

        if (this.estaVivo==true){
            console.log (`to usando o ${nome}`)

        }else{
            console.log ("pokemon ta morto")
        } 
    }

    verStatus(){
        return `nome: ${this.nome},vida: ${this.vida}, ataque: ${this.ataque}, estaVivo: ${this.estaVivo}`
    }


    checarVida(){
        if (this.vida > 0){
            this.estaVivo = true
        }else{
            this.estaVivo = false
        }
    }
    
}

module.exports = Pokemon
