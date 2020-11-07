// JavaScript source code
function parity(num){
	if(num%2 == 0)
		return "even";
	else
		return "odd";
}

var num = prompt("Please enter Number");

// console.log(num);
document.getElementById("number").innerHTML = "Given no: "+ num;
document.getElementById("result").innerHTML = "No is " + parity(num);