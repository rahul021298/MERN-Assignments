// JavaScript source code
var strings = ["1.2","2.3","3.4"];
console.log(strings);
var str1 = new Array(3);
function numArray(strings){
	for(i=0;i<strings.length;i++){
		str1[i] = parseFloat(strings[i]);
	}
	console.log(str1);
}
 numArray(strings);
 document.getElementById("string").innerHTML = "String Array: " + strings;
 document.getElementById("integer").innerHTML = "Float Array: " + str1;
 
