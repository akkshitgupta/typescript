"use strict";
// pass the objects into a fucntion
// function createUser({ name: string, isPaid: boolean }) {}
Object.defineProperty(exports, "__esModule", { value: true });
let userId = { name: "Akshit", isPaid: true, email: "akshit@mail.com" };
function callName(user) {
    return `Hello!!... ${user.name}`;
}
// callName({ name: "akshit", email: " ", isActive: true });
let myUser = {
    _id: 5,
    name: "a",
    email: "ak",
    isActive: false,
};
let ans = 0;
console.log(myUser._id);
