"use strict";
function check(val) {
    if (typeof val === "string") {
        return val.toLocaleLowerCase();
    }
    return val + 2;
}
function provideId(id) {
    if (!id) {
        console.error("please provide a valid id!!");
        return;
    }
    id.toLocaleLowerCase();
}
function isAdminAccount(account) {
    // in operator narrowing
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
// instance of narrowing
// any variable can be created using new keyword
new Date();
function logDate(x) {
    // instanceof checks whether the var is instance of a class
    // typeof checks for primitive type var
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
}
// type predicates
function isFish(pet) {
    // pet as Fish ===> type casts pet as a fish
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "Fish Food";
    }
    else {
        pet;
        return "Bird Food";
    }
}
