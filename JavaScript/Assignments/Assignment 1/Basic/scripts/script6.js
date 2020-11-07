// JavaScript source code
function numRollsToGetSix(){
var count=0;	
while(num!=6){
	num = Math.floor(Math.random() * 6) + 1;
	console.log(num);
	count++;
	}
	return count;
}
 var num = numRollsToGetSix();
 document.getElementById("die").innerHTML = num + " times die rolled to get a six.";
 console.log(num);