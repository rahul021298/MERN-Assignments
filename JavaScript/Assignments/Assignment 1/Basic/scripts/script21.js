var list1=[1,2,3,4,5,6];
var list2=[];
document.getElementById("list").innerHTML = "Given List: " +list1;
function reverseList(){
    for(i=list1.length-1;i>=0;i--){
        list2.push(list1[i]);
    }
    console.log(list2);
}
console.log(reverseList());
document.getElementById("reverse").innerHTML = "Reversed List: " + list2;