const Pokemon = require("../src/models/pokemon") 

const esboco= new Pokemon ("agahmenon", 10)

const esboco2= new Pokemon ( undefined,10)



test ("deveria criar um pokemon",()=>{

    
    expect (esboco.vida).toBe(100)
    expect (esboco.estaVivo).toBeTruthy()
    expect (esboco2.nome).toBe("")

})



test ("deveria usar poder", ()=>{

    expect (esboco.usarPoder("paulada")).toBe(100)
    
    expect (esboco.usarPoder(null)).toBeNull()

    esboco.vida = 0
    expect (esboco.usarPoder("paulada")).toBeNull()
})


test ("deveria ver status", ()=>{

    expect (esboco.verStatus()).not.toBeUndefined()
})

