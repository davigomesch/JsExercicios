//Função recebe recebe array e devolve media
//uma função para cada elemento do array(foreach)
function mediaArray(arrayNumeros){

    var medianumeros = 0 

    arrayNumeros.forEach(element => {
        medianumeros += element
        
        
    });

    return medianumeros / arrayNumeros.length 

}

console.log(mediaArray([5,6,2]))