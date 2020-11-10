// JavaScript source code
let arr= ["R","A","H","U","L"];
[,,val]=arr;
console.log(val);

const organization ={
    name:"Rahul",
    address:{
        city:"Mumbai",
        pincode:421002
    }
}

let {name,address:{pincode:pin}} = organization;
console.log(pin);
