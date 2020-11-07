// JavaScript source code
function numHeads(count){
	var num,head=0;		
for(i=0;i<count;i++){
	num = Math.floor(Math.random() * 10);
	if(num<5)
		head++;
	}
	return (head/count);
}

var num = numHeads(10000);
document.getElementById("coins").innerHTML = "No of times coins flipped: 10000";
document.getElementById("heads").innerHTML = "Heads fraction: " +num;
console.log(num);