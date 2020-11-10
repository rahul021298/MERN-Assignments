const chatroom2 = new Set();
const chatroom1 = new Set();

const user1 = new Map([
    ["user1", "Hi user2"]
]);

const user2 = new Map([
    ["user2", "Hi user3"]
]);

const user3 = new Map([
    ["user3", "Hi user1"]
]);

const user4 = new Map([
    ["user4", "Hi user5"]
]);

const user5 = new Map([
    ["user5", "Hi user6"]
]);

const user6 = new Map([
    ["user6", "Hi user4"]
]);

chatroom1.add(user1);
chatroom1.add(user2);
chatroom1.add(user3);

chatroom2.add(user4);
chatroom2.add(user5);
chatroom2.add(user6);

console.log("Chatroom1:")
for(const x of chatroom1){
    console.log(x.keys(),x.values());
}

// let getInfo1 = () => {
//     for(let entry of user1.entries()){
//         console.log(`${entry[0]} -> ${entry[1]}`);
//     }
//     for(let entry of user2.entries()){
//         console.log(`${entry[0]} -> ${entry[1]}`);
//     }
//     for(let entry of user3.entries()){
//         console.log(`${entry[0]} -> ${entry[1]}`);
//     }
// }

let getInfo2 = () => {
    for(let entry of user4.entries()){
        console.log(`${entry[0]} -> ${entry[1]}`);
    }
    for(let entry of user5.entries()){
        console.log(`${entry[0]} -> ${entry[1]}`);
    }
    for(let entry of user6.entries()){
        console.log(`${entry[0]} -> ${entry[1]}`);
    }
}

// getInfo1();
console.log("Chatroom2:")
for(const x of chatroom2){
    console.log(x.keys(),x.values());
}
// getInfo2();