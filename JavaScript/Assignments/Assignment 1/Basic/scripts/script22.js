var list=[1,2,3,4,5,6];
var element=5;
var flag=0;
document.getElementById("list").innerHTML = "List: " +list;
function isElement(){
    for(i=0;i<list.length;i++){
        if(list[i] == element){
            flag++;
        }
    }    
    console.log(flag);
}
isElement();
if(flag>0){
    console.log("Element " + element + " is present");
    document.getElementById("element").innerHTML = "Element " + element + " is present";
}else{
    console.log("Element " + element + " is not present");
    document.getElementById("element").innerHTML = "Element " + element + " is not present";
}