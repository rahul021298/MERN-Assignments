// JavaScript source code
function max(num1, num2, num3){
	if(num1>num2 && num1>num3)
		return num1;
	else if(num2>num3)
		return num2;
	else
		return num3;
}

var maxNum = max(1,3,2);
document.getElementById("num").innerHTML = "Given nos are: 1 3 2";
document.getElementById("max").innerHTML = "Maximun no is: " + maxNum;
