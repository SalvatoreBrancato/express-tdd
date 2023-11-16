const post ={
    title: "Torta della nonna",
    slug: "torta-della-nonna"
}




module.exports= function (stringa){
    
    //lancia l'errore se il titolo non esiste
    if (!stringa || typeof stringa != "string" ) {
        throw new Error("createSlug: il titolo non esiste o il formato è errato");
      }

    //trasforma in stinga
    let slug = stringa.toString()
    
    //trasforma in minuscolo
    slug = slug.toLowerCase()

    //sostituisci gli spazi con -
    slug = slug.split(" ").join("-")

    //incrementa 1 se slug già esistente
    if(stringa === post.slug){
        return stringa + '(1)'
    }

    


    return slug
}