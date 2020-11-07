// JavaScript source code
function padChars(num,str){
var string="";	
for(i=0;i<num;i++){
		string= string+str;
	}
	return string;
}

var concatedString = padChars(5,"ab");
document.getElementById("input").innerHTML = "Input: 5, ab";
document.getElementById("output").innerHTML = "Output is: " + concatedString;
console.log(concatedString);