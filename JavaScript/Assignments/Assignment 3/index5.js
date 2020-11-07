var person = {
    fname:"abc",
    lname:"xyz"
};
console.log(person.fname, person.lname);

person.fname="xyz";
person.lname="abc";
console.log(person.fname, person.lname);
console.log(person.mname);
person.mname="jkl";
console.log(person.mname);