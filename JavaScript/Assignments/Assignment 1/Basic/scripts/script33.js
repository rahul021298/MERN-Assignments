// JavaScript source code
document.getElementById("result").innerHTML="Prime numbers upto "+ 1000 +" are :"

for(i = 2; i <= 1000; i++){ 
    if(checkPrime(i)){
        document.write(i+" ");
    } 

}

function checkPrime(i){
    for(j = 2; j < ( Math.floor(Math.sqrt(i)) + 1); j++){
        if(i%j == 0){
            return false ;
        }
    }
    return true;
}