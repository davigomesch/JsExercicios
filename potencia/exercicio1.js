//1 - Recebe base e expoente, devolve resultado da potencia



function calculaPotencia(base, expoente){

    var calculo = 1

    for(let i = 0; i < expoente; i++){
        
        calculo = calculo * base
        console.log(calculo)
    }
    return calculo  

}
console.log(calculaPotencia(2,4));





