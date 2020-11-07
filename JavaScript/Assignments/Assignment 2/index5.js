var arr=[1,3,5,4,2];
function isEven(num){
    return (num%2 == 0);
}
function find(arr, isEven){
    if(arr.length<1){

    }else{
        console.log("in");
        if(isEven(arr[0])){
            
            document.getElementById("result").innerHTML += arr;            
        }
        arr.shift();
        find(arr, isEven);
    }
    
}
document.getElementById("array").innerHTML = "Array is: " +arr+ " Even nos are:"
// console.log(find(arr, isEven));
// document.getElementById("compose1").innerHTML = "Given no is 5 after doubling and then squaring,"
// document.getElementById("result1").innerHTML = "Result is: " + value1;
// document.getElementById("compose2").innerHTML = "Given no is 5 after squaring and then doubling,"
// document.getElementById("result2").innerHTML = "Result is: " + value2;