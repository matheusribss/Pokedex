const Pokemon = require("../src/pokemon") 
const Jogador = require("../src/jogador") 



const esboco= new Pokemon ("agahmenon", 10)

const esboco2= new Pokemon ( undefined,10)

const jogador = new Jogador ("marcao","bisexual","D-",true,[esboco,esboco2])
const jogador2 = new Jogador ("bene","macho","D-",false)



test ("deveria criar jogador",()=>{

    
    expect (jogador.pokemons.length).toBe(2)
    expect (jogador.nome).toBe("marcao")
    expect (jogador2.nome).toBe("bene")
    expect (jogador2.jaChupou).toBeFalsy()
    expect (jogador2.pokemons).not.toBeUndefined()

})

test ("deveria ver status jogador",()=>{

    
    expect (jogador.verStatusJogador()).not.toBeUndefined()

})

test ("deveria adicionar pokemon",()=>{

    const pokemon = new Pokemon ("morcego mijão",400,"fogo")

    
    expect (jogador.adicionarPokemon(pokemon)).toBe(3)
    expect (jogador.adicionarPokemon()).toBeNull()


})

