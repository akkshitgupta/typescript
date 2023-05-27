"use strict";
// use union type instead of using any
Object.defineProperty(exports, "__esModule", { value: true });
let score = 33;
score = 44;
score = "55";
// array
const data = [1, 2, 3, 4, 5]; // only numbers
const data1 = ["1", "2", "3", "4", "5"]; // only strings
const data2 = ["1", "2", 3, "4", "5"]; // strings or numbers
// initializing some of the variables with their pre-values
let seat;
