/*  instead use interface to define the type of the object so that it can be used in multiple places
 */
interface Person {
  name: string;
  age: number;
}

function greet(person: Person): string {
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
