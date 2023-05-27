// use union type instead of using any

let score: string | number = 33;
score = 44;
score = "55";

type User = {
  name: string;
  id: number;
};

// array

const data: number[] = [1, 2, 3, 4, 5]; // only numbers
const data1: string[] = ["1", "2", "3", "4", "5"]; // only strings
const data2: (string | number)[] = ["1", "2", 3, "4", "5"]; // strings or numbers

// initializing some of the variables with their pre-values
let seat: "aisle" | "window" | "middle";

export {};
