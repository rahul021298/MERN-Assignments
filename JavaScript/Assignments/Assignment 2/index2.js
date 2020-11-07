function square(x){
    return x * x;
}
function double(x){
    return x * 2;
}
function compose1(square,double,x){
    return  square(double(x));
}
function compose2(double,square,x){
    return  double(square(x));
}
var value1 = compose1(square, double, 5);
var value2 = compose2(double, square, 5);
document.getElementById("compose1").innerHTML = "Given no is 5 after doubling and then squaring,"
document.getElementById("result1").innerHTML = "Result is: " + value1;
document.getElementById("compose2").innerHTML = "Given no is 5 after squaring and then doubling,"
document.getElementById("result2").innerHTML = "Result is: " + value2;