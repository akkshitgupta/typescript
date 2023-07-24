// function return type is number or undefined

function calculator(
  a: number,
  b: number,
  // only 4 string values are allowed
  op: "sum" | "sub" | "mul" | "div"
): number | undefined {
  if (op === "sum") {
    return a + b;
  }
  if (op === "sub") {
    return a - b;
  }
  if (op === "mul") {
    return a * b;
  }
  if (op === "div") {
    return a / b;
  }
}
// throw error
const wrongCalculate = calculator(1, 2, "wrong");

const calculate = calculator(1, 2, "sum");
console.log(calculate);
