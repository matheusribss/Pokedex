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
        console.log (`nome: ${this.nome},vida: ${this.vida}, ataque: ${this.ataque}, estaVivo: ${this.estaVivo}`)
    }


    checarVida(){
        if (this.vida > 0){
            this.estaVivo = true
        }else{
            this.estaVivo = false
        }
    }
    
}

class Jogo{

    jogar(pokemon1,pokemon2){

        console.log("rinha começou")
        console.log("-----   000000")
        pokemon1.verStatus();
        console.log("-----   000000")
        pokemon2.verStatus();

    }
}



const bocao = new Pokemon ("bocao", 99999)
const pokemon3 = new Pokemon ("agahmenon", 10)
const pokemon2 = new Pokemon ("morcego mijão",70)

const jogo = new Jogo ()
jogo.jogar(bocao,pokemon2)
