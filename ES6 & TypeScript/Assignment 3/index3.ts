interface Printable{
    name:string;
    age?:number;
    radius?:number;

}
let circle: Printable = {
    name:"Cricle",
    radius: 1

}

let employee: Printable = {
    name:"RA",
    age: 21
}

let printAll=(circle,employee)=>{
    console.log(circle);
    console.log(employee);   
}

printAll(circle,employee);