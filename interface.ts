function greet(person: { name: string; age: number }): string {
  return (
    "Hello, " +
    person.name +
    " glad to know that you are " +
    person.age +
    " years old"
  );
}

const person = {
  name: "John",
  age: 30,
};

console.log(greet(person));
