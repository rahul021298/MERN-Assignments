var list1=[1,2,3,4,5,6], list2=[];
document.getElementById("list").innerHTML = "List: " +list1;
function isElement(){
    for(i=0;i<list1.length;i++){
    list2.push(list1[i]);
    i++;
    }    
}
isElement();
console.log(list2);
document.getElementById("odd-list").innerHTML = list2;
