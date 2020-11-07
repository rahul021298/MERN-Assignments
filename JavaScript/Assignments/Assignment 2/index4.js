var arr1=[1,2,3,4,5],arr2=[];

function square(num){
    return num * num;
}

function map(arr1, square){
    for(i=0;i<arr1.length;i++){
        arr2.push(square(arr1[i]));
    }
    return arr2;
}
document.getElementById("array").innerHTML = "Given array is: " + arr1;
document.getElementById("result").innerHTML = "Squared array is: " + map(arr1,square);
