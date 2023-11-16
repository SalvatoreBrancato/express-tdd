const {test, expect} = require("@jest/globals");
const createSlug= require('./createSlug');

test('createSlug dovrebbe ritornare una stringa', ()=>{
    const stringa = 2 
    const result = createSlug(stringa);

    expect(result).toBe("2");
}) 

test('createSlug dovrebbe ritornare una stringa in lowercase', ()=>{
    const stringa = "MINUSCOLO"
    const result = createSlug(stringa)

    expect(result).toBe("minuscolo")
})

