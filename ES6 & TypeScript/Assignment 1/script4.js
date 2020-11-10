// JavaScript source code
let names = ["Tom","Ivan","Jerry"];

names = names.toString().split(",");

let name =names.map((names) => {
    return{"name":names,"length":names.length}
});

console.log(name);