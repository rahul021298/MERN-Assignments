// JavaScript source code
function add(){
    return 1+1;
}




let friends = function(username, ...userFriends){
    console.log(username);
    console.log("Friends:");
    for(i in userFriends){
        console.log(userFriends[i]);
    }
}
let username = "rahul";
let userFriends =["R","A","H","U","L"];
console.log("Username:");
friends(username, userFriends);

let printCapitalNames = function(n1,n2,n3,n4,n5){
    for(i in names){
        console.log(names[i].toString().toUpperCase());
    }
}

let names = ["Ra", "Rahul", "Raahul", "Makhija", "Rahul Makhija"];

console.log("Names:"+names);
console.log("Capital:");
printCapitalNames(...names);