// JavaScript source code
function sumOfN(){
    var num = parseInt(prompt("Enter a number :"));
    var sum=0;
    if(!isNaN(num)){
        for(i=1; i<=num; i++){
            sum+=i;
        }
    }else{alert("Enter number only!!!");}

    document.getElementById("result").innerHTML="The sum of numbers 1 to "+num+" is:"+sum;
}