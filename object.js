"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// pass the objects into a fucntion
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var userId = { name: "Akshit", isPaid: true, email: "akshit@mail.com" };
createUser(userId);
function callName(user) {
    return "Hello!!... ".concat(user.name);
}
// callName({ name: "akshit", email: " ", isActive: true });
var myUser = {
    _id: 5,
    name: "a",
    email: "ak",
    isActive: false,
};
var ans = 0;
myUser._id = 8;
console.log(myUser._id);
