const post ={
    title: "Torta della nonna",
    slug: "torta-della-nonna"
}




module.exports= function (stringa){
    
    //trasforma in stinga
    let slug = stringa.toString()
    
    //trasforma in minuscolo
    slug = slug.toLowerCase()

    //sostituisci gli spazi con -
    slug = slug.split(" ").join("-")

    //
    if(stringa === post.slug){
        return stringa + '(1)'
    }

    return slug
}