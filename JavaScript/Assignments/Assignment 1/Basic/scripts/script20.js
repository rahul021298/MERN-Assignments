var list=[1,4,6];
var largest=0;

function largestElement(){
    for(i=0;i<list.length;i++){
        if(list[i]>largest){
            largest = list[i];
        }
    }
    return largest;    
}
console.log(largestElement());
document.getElementById("list").innerHTML = "List: " +list;
document.getElementById("largest").innerHTML = "Largest: " + largest;