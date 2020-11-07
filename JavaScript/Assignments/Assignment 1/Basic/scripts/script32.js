// JavaScript source code
function sumOf(){
    var num = parseInt(prompt("Enter a limit :"));
    var sum=0;
    if(!isNaN(num)){
        for(i=1; i<=num; i++){
           if(i%3==0 || i%5==0){
            sum+=i;
           }
        }
    }else{alert("Enter number only!!!");}

    document.getElementById("result").innerHTML="<strong> The sum of only multiples of three or five for the numbers 1 to "+num+" is: "+sum+"</strong>";
}