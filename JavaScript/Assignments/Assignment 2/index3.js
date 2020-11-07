var arr=[1,3,5,4,2];
function isEven(num){
    return (num%2 == 0);
}
function find(arr, isEven){
    for(i=0;i<arr.length;i++){
        value = isEven(arr[i]);
        if(value == true){
            document.getElementById("result").innerHTML += " " +arr[i];
            console.log(arr[i]);
        }
    }
}
document.getElementById("array").innerHTML = "Array is: " +arr+ " Even nos are:"
console.log(find(arr, isEven));
// document.getElementById("compose1").innerHTML = "Given no is 5 after doubling and then squaring,"
// document.getElementById("result1").innerHTML = "Result is: " + value1;
// document.getElementById("compose2").innerHTML = "Given no is 5 after squaring and then doubling,"
// document.getElementById("result2").innerHTML = "Result is: " + value2;