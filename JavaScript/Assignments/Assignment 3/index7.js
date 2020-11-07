var str = '{"firstname":"abc", "lastname":"xyz"}';

console.log(typeof(str));

var str1 = JSON.parse(str);
console.log(str1.firstname, str1.lastname);
