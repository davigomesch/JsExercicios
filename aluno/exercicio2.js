//Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escrever uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o aluno é aprovado). Escrever também a média calculada.

//function verificaAprovado(nota1, nota2){
    // var MediaAnual = nota1 + nota2 /2
    // if(MediaAnual>=6){

    //     return true

    // }else{
        
    //     return false
    // } 
//}

//console.log(verificaAprovado(1, 3))

function verificaAprovado(arrayNotas){
    var soma = 0
    for(let i = 0;i < arrayNotas.length ; i++){
        soma = soma + arrayNotas[i]
    }
    
    var calculo = soma /arrayNotas.length

    return calculo

}


//console.log(verificaAprovado([2,2,6]))
console.log(verificaAprovado([2,9,4,6,2]))