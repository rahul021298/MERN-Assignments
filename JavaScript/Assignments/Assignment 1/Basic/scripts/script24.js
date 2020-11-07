var list=[1,2,3,4,5,6],sum=0;
document.getElementById("list").innerHTML = "List: " +list;
function total(){
    for(i=0;i<list.length;i++){
        sum += list[i];
    }    
    return sum;
}
console.log(total());
document.getElementById("sum").innerHTML = "Sum is: " + sum;
