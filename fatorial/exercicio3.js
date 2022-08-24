//Função que receba um número inteiro e retorne o fatorial dele.

function calculaFatorial(numeroInteiro){

    var resultado = 1

    for(let i= numeroInteiro; i >= 1; i--){
        resultado = resultado * i 
    }
    return resultado
    
}
console.log(calculaFatorial(4))