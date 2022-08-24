//função recebe array e retorna ele invertido 

function inverteArray(arrayNumeros){
    var arrayInvertido = []; 

    for(let i = arrayNumeros.length-1; i >= 0;i--){
        arrayInvertido.push(arrayNumeros[i]);
    }

    return arrayInvertido
}
console.log(inverteArray([3,5,7,77,88,99]))