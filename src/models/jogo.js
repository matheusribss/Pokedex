class Jogo{

    jogar(pokemon1,pokemon2){

        

        return `
        rinha começou 
        
        -----   000000

        ${pokemon1.verStatus()}

        -----   000000

        ${pokemon2.verStatus()}
        `
    }
}

module.exports = Jogo