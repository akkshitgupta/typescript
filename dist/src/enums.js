"use strict";
// restricting the choice of the users with the already defined options
// in an ecommerce website - order can be in the card, waiting for payment, delivered or in the shipment
// like in aisle, middle or corner seat
Object.defineProperty(exports, "__esModule", { value: true });
// use const enum seatChoice for better and clean js code
var seatChoice;
(function (seatChoice) {
    seatChoice[seatChoice["AISLE"] = 11] = "AISLE";
    seatChoice[seatChoice["MIDDLE"] = 12] = "MIDDLE";
    seatChoice["WINDOW"] = "window";
})(seatChoice || (seatChoice = {}));
const seat = seatChoice.WINDOW;
console.log(seat);
