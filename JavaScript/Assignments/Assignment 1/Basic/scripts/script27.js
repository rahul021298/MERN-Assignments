var list1=[1,4,6];
var list2=[2,3,5];
var list3=[];

function concatenate(list1, list2){

    for(i=0;i<list1.length;i++){
    list3.push(list1[i]);
    }
    for(i=0;i<list2.length;i++){
        list3.push(list2[i]);
    }
    return list3;
    
}
list3 = (concatenate(list1,list2));
console.log(list3.sort());
document.getElementById("list1").innerHTML = "List1: " +list1;
document.getElementById("list2").innerHTML = "List2: " + list2;
document.getElementById("concatenated-list").innerHTML = "After concatenation and sorting: " + list3;