var arr1=[1,2,3,4,5], arr2=[];

function square(num){
    return num * num;
}

function map(arr1, square){
    if(arr1.length>0){
        arr2.push(square(arr1[0]));
        arr1.shift();
        map(arr1, square);
    }
    return arr2;
}

document.getElementById("array").innerHTML = "Given Array is: " + arr1;

console.log(map(arr1, square));
document.getElementById("result").innerHTML = "Squared Array is: " + arr2;
// document.getElementById("array").innerHTML = "Given array is: " + arr1;
// document.getElementById("result").innerHTML = "Squared array is: " + map(arr1,square);
