// JavaScript source code
function dec2bin(dec){
  return (dec >>> 0).toString(2);
}
var str = dec2bin(3);
var boolean = str.charAt(str.length-1);
console.log(Boolean(!parseInt(boolean)));
document.getElementById("input").innerHTML = "Input is 3";
document.getElementById("output").innerHTML = Boolean(!parseInt(boolean));
