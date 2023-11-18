const post =[
    {
        title: "Torta della nonna",
        slug: "torta-della-nonna"
    },
    {
        title: "Torta della zia",
        slug: "torta-della-zia" 
    },
    {
        title: "Torta della mamma",
        slug: "torta-della-mamma" 
    }
]




module.exports= function (stringa){
    
    //lancia l'errore se il titolo non esiste
    if (!stringa || typeof stringa != "string" ) {
        throw new Error("createSlug: il titolo non esiste o il formato è errato");
      }

    //createSlug dovrebbe lanciare un errore se manca l’array dei post

    if(!post){
        throw new Error("createSlug: l'array non esiste");
    }
    

    //trasforma in stinga
    let slug = stringa.toString()
    
    //trasforma in minuscolo
    slug = slug.toLowerCase()

    //sostituisci gli spazi con -
    slug = slug.split(" ").join("-")

    //incrementa 1 se slug già esistente
    let counter = 0;
    for(elem of post){

        if(stringa === elem.slug){
            counter++
            return stringa + `(${counter})`
        }
    }

    


    return slug
}