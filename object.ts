// pass the objects into a fucntion
function createUser({ name: string, isPaid: boolean }) {}

let userId = { name: "Akshit", isPaid: true, email: "akshit@mail.com" };

createUser(userId);

// error
// createUser({ name: "akshit", isPaid: false, email: "akshit@mail.com" });

// here type is similar to the struct or class in the cpp
type User = {
  readonly _id: number;
  name: string;
  email: string;
  isActive: boolean;
  creditCard?: number;
};

function callName(user: User): string {
  return `Hello!!... ${user.name}`;
}

// callName({ name: "akshit", email: " ", isActive: true });

let myUser: User = {
  _id: 5,
  name: "a",
  email: "ak",
  isActive: false,
};

let ans = 0;

// myUser._id = 8;

// JUST TO EXPLAIN

type cardNumber = {
  card_num: string;
};

type cardDate = {
  card_date: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

console.log(myUser._id);

export {};
