// restricting the choice of the users with the already defined options
// in an ecommerce website - order can be in the card, waiting for payment, delivered or in the shipment
// like in aisle, middle or corner seat

// use const enum seatChoice for better and clean js code
enum seatChoice {
  AISLE = 11, // by default base value is 0
  MIDDLE, // consequently, other values are assigned by itself
  WINDOW = "window", // string can also be used but the u have to initialize them explicity
}

const seat = seatChoice.WINDOW;
console.log(seat);

export {};
