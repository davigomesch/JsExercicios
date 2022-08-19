//1- Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias.

function idade(anos, mes, dias){
    var AnosQuantidade = anos * 365
    var MesQuantidade = mes * 30
    var total = (AnosQuantidade + MesQuantidade + dias)
return total
}
console.log(idade(19,6,15))