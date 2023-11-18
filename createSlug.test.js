const {test, expect} = require("@jest/globals");
const createSlug= require('./createSlug');

test('createSlug dovrebbe ritornare una stringa', ()=>{
    const stringa = 'prova' 
    const result = createSlug(stringa);

    expect(typeof result).toBe("string");
}) 

test('createSlug dovrebbe ritornare una stringa in lowercase', ()=>{
    const stringa = "MINUSCOLO"
    const result = createSlug(stringa)

    expect(result).toBe("minuscolo")
})

test('createSlug dovrebbe ritornare una stringa con gli spazi sostituiti da -', ()=>{
    const stringa = "senza spazio"
    const result = createSlug(stringa)

    expect(result).toBe("senza-spazio")
})

test('createSlug dovrebbe incrementare di 1 lo slug quando esiste già', ()=>{
    const stringa = "torta-della-nonna"
    const result = createSlug(stringa)

    expect(result).toBe("torta-della-nonna(1)")
})

test("createSlug dovrebbe lanciare un errore in caso di titolo non presente o formato errato", () => {
    // Siccome stiamo testando un errore, dobbiamo racchiudere la funzione
    // in una arrow function, altrimenti il test fallirebbe
    const result = () => createSlug('');

    expect(result).toThrowError("createSlug: il titolo non esiste o il formato è errato");
})

test("createSlug dovrebbe lanciare un errore se manca l’array dei post", () => {
    
    const result = () => createSlug();

    expect(result).toThrowError("createSlug: il titolo non esiste o il formato è errato");
})
