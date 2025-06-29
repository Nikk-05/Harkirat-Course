"use strict";
// const x: number = 101
// console.log(x)
// -------------------------------------------------
function greet(firstName) {
    console.log("Hello " + firstName);
}
greet("Nikhil");
// type inference means it is automatically understand what is the return type of function, As you need to specify for good practice.
function sum(a, b) {
    return a + b;
}
console.log(sum(5, 4));
// function accepts no argument and returns nothing
function runAfter1Sec(fn) {
    setTimeout(fn, 1000);
}
runAfter1Sec(function () {
    console.log("Hi there");
});
function printFunction(cb) {
    setTimeout(cb, 1000);
}
const doSomething = () => {
    return 5;
};
const val = printFunction(doSomething);
console.log(val);
function isLegal(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
function printFullName(user) {
    console.log(`${user.firstName} ${user.lastName}`);
}
isLegal({
    firstName: "Nikhil",
    lastName: "Singh",
    age: 25
});
function firstElement(arr) {
    return arr[0];
}
const value = firstElement(["Nikhil", "Singh"]);
console.log(value);
