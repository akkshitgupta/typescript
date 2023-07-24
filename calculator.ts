// function return type is number or undefined

function calculator(a: number, b: number, op: string): number | undefined {
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

const calculate = calculator(1, 2, "sum");
console.log(calculate);
