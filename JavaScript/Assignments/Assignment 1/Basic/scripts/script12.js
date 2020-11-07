// JavaScript source code
var test1=["stop","quit","exit"];
function lengthOfNonQWords(test1){
var singleElement, isQ;
	for(i=0;i<test1.length;i++){
		singleElement = test1[i];
		isQ = singleElement.indexOf('q');
		if(isQ < 0){
			length += singleElement.length; 
		}
	}
	console.log(length);
}
lengthOfNonQWords(test1);
document.getElementById("array").innerHTML = "Given Array: " + test1;
document.getElementById("length").innerHTML = "Length without q elements: " + length;
