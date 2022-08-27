//8- Crie um algoritmo que, dado um número informado pelo usuário, imprima no terminal a tabuada dele de 1 a 10. USANDO ESTRUTURA DE REPETIÇÃO



function calculaTabuada(numero){

    console.log("tabuada")

    for(let i= 1; i < 11;i++){
        console.log(`${numero} x ${i} = ${numero * i}`) 
        console.log(numero + " x " + i + " = " + (numero * i)) 
    }
        
}
calculaTabuada(6)




