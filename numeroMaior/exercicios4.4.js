//Ler 3 valores e devolver o maior deles

function NumeroMaior(n1, n2, n3){
        if( n1 > n3 && n1 > n2 ){
        console.log("O N1 É O MAIOR")
        }
        
        else if(n2 > n1 && n2 > n3){
        console.log("O N2 É O MAIOR")
        }
        
        else{
        console.log("O N3 É O MAIOR")
        }
    
}

console.log(NumeroMaior(15,30,2))


