//Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário.

function NovoSalario(salario, percetual){

var reajuste = salario * percentual /100
return reajuste + salario
}

console.log(NovoSalario(4500, 15))