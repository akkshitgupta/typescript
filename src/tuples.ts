// all about tuples
// mutable tuples

// similar to an array but in a proper order

let user: [string, number, boolean];

user = ["name", 23, true];
// user = [23, false, "name"];  not assignable

type userr = [number, string, boolean]; // tuple type is created

let username: userr = [123, "name", true];
