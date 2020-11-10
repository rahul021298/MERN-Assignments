// JavaScript source code
let order = {
    "id":1,
    "title":"Rice",
    "price":100,
    printOrder: () => {
        return `Id: ${order.id}, Title: ${order.title}`;
    },
    getPrice: () => {
        return `Price:${order.price}`;
    }
}

let order1 = Object.assign(order);
console.log(order1);