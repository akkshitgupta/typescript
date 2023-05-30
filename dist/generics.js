"use strict";
// arrays are by-default generics
const score = [];
const _name = [];
function identityOne(val) {
    return val;
}
// here the type keyword is being used as a varible explained below
function identityTwo(val) {
    return val;
}
const valuee = 12;
const rea = typeof valuee;
identityTwo({ joined: "asd", duration: 23 });
function searchIndex(productList) {
    const index = 3;
    return productList[index];
}
const moreSearch = (productList) => {
    return productList[3];
};
// use the concept of generics instead of using the union type as in line 5
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo,
    };
}
anotherFunction(3, { connection: "asd", username: "weit", passWord: "wer" });
// generic class
class Sell {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
