// JavaScript source code
function startGame(){

    var lower = parseInt(prompt("Enter a lower limit:"));
    var upper = parseInt(prompt("Enter a upper limit:"));

    if(!isNaN(lower) && !isNaN(upper)){
        var secretNum = Math.floor(Math.random() * (upper-lower+1))+lower;
        var count=1;

        var guessNum = parseInt(prompt("Guess a number between "+lower+" to "+upper+" :"));
        var prevGuess=guessNum;
        while(guessNum!==secretNum){

            if(guessNum<secretNum){
                guessNum = parseInt(prompt("Your guess was lesser than the Secret Number, try with greater number !"));
            }else{
                guessNum = parseInt(prompt("Your guess was greater than the Secret Number, try with lesser number !"));
            }

            if(guessNum!=prevGuess){
                count+=1;
                prevGuess=guessNum;
            }
        }
        document.getElementById("result").innerHTML="<h2>Congratulations! You have guessed the Secret Number after "+count+" attempts !</h2>";
    }else{
        alert("Enter correct input");
    }

    
}