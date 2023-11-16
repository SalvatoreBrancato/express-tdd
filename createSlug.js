module.exports= function (stringa){
    
    //trasforma in stinga
    let slug = stringa.toString()
    
    //trasforma in minuscolo
    slug = slug.toLowerCase()

    //sostituisci gli spazi con -
    slug = slug.split(" ").join("-")
    return slug
}