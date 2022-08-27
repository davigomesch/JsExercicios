//Ler 3 valores e devolver o menor deles

function NumeroMaior(n1, n2, n3){

        if( n1 < n3 && n1 < n2 ){
            console.log("O N1 É O MENOR")
        }
        
        else if(n2 < n1 && n2 < n3){
            console.log("O N2 É O MENOR")
        }
        
        else{
            console.log("O N3 É O MENOR")
        }
    
}

console.log(NumeroMaior(15,10,54))