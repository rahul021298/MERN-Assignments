// JavaScript source code
class A{
    _previousno = 0;
    _currentno = 1;
    [Symbol.iterator](){
        let previousno = this._previousno;
        let currentno = this._currentno;
        let next;
        return{
            next(){
                next = previousno + currentno;
                previousno = currentno;
                currentno = next;
                return next;
            }
        }
    }
}

const abc = new A()[Symbol.iterator]();
console.log(0);
console.log(1);
console.log(abc.next());
console.log(abc.next());
console.log(abc.next());
console.log(abc.next());
// console.log(abc.next());
// console.log(abc.next());
// console.log(abc.next());
// console.log(abc.next());
// console.log(abc.next());
// console.log(abc.next());
// console.log(abc.next());
// console.log(abc.next());
// console.log(abc.next());
// console.log(abc.next());
// console.log(abc.next());
// console.log(abc.next());
// console.log(abc.next());
// console.log(abc.next());
// console.log(abc.next());
// console.log(abc.next());
// console.log(abc.next());
// console.log(abc.next());
// console.log(abc.next());
// console.log(abc.next());
// console.log(abc.next());
// console.log(abc.next());
// console.log(abc.next());
// console.log(abc.next());
// console.log(abc.next());
// console.log(abc.next());
