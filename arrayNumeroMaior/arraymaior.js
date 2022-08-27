//5 - Função que recebe array de números inteiros e devolve maior numero do array
//maquina burra

function encontrarMaior(arrayNumeros){
    
    var numeroMaior = arrayNumeros[0]

    for (let i = 0; i < arrayNumeros.length; i++){
        console.log("numero atual " + arrayNumeros[i] + " numeroMaior é " + numeroMaior)
        if(arrayNumeros[i] > numeroMaior){
            numeroMaior = arrayNumeros[i]            
        }    

    }
    return numeroMaior
}   
console.log(encontrarMaior([-23,-3,-10]))