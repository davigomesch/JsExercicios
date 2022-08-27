//Recebe uma frase e devolve ela com a ordem das palavras invertida
//Se eu passar a String "Eu sou o goku", a função deve retornar a String "goku o sou Eu"



function FraseReversa(str) {
    var StringFrase = '';
    for (var i = str.length - 1; i >= 0; i--) {
        StringFrase += str[i];
    }
    return StringFrase;
}

console.log(FraseReversa('Eu sou o goku'))