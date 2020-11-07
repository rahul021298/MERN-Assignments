function myFunction(){

    // document.getElementById("1").innerHTML = array;
    // document.getElementById("2").innerHTML = count;
    var arr=[1,2,3,4,5,6], count=2;
    document.getElementById("array").innerHTML = "given array:"+arr;
    document.getElementById("count").innerHTML = "count:" + count;
    for(j=0;j<count;j++){
        temp = arr[0];
        for(i=0;i<arr.length;i++){           
            arr[i] = arr[i+1];
        }
        arr[arr.length-1] = temp;
    }
    document.getElementById("shifted-array").innerHTML = "shifted array: " +arr;
    console.log(arr);
}
myFunction();