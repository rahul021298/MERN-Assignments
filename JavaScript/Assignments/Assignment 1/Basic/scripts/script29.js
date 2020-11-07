var recursiveFunction = function (arr, x, start, end) {
    if (start > end) return false;
    let mid=Math.floor((start + end)/2); 
    if (arr[mid]===x) return true;
    if(arr[mid] > x)  
        return recursiveFunction(arr, x, start, mid-1); 
    else
        return recursiveFunction(arr, x, mid+1, end); 
} 

var arr = [1, 3, 5, 7, 8, 9]; 
document.write("Array is: [1, 3, 5, 7, 8, 9]<br>");
document.write("x = 5<br>");
var x = 5; 
   
if (recursiveFunction(arr, x, 0, arr.length-1)) 
    document.write("Element found!<br>"); 
else document.write("Element not found!<br>"); 

document.write("x = 6<br>");
x = 6; 
   
if (recursiveFunction(arr, x, 0, arr.length-1)) 
    document.write("Element found!<br>"); 
else document.write("Element not found!<br>"); 