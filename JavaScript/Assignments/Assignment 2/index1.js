function square(x){
    return x * x;
}
function double(x){
    return x * 2;
}
function composedValues(square,double,x){
    return  square(double(x));
}
var value = composedValues(square, double, 5);
document.getElementById("given").innerHTML = "Given no is 5 after doubling and squaring,"
document.getElementById("result").innerHTML = "Result is: " + value;