var str = '({firstname:"abc", lastname:"xyz"})';

console.log(typeof(str));

var str1 = eval(str);
console.log(str1.firstname, str1.lastname);
