//Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escrever uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o aluno é aprovado). Escrever também a média calculada.

function AprovaçãoAluno(nota1, nota2){
    var MediaAnual = nota1 + nota2 /2
    if(MediaAnual>=6){

        return "Aluno Aprovado"

    }else{
        
        return "aluno Reprovado"
    } 
}

console.log(AprovaçãoAluno(6, 3))