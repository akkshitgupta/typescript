/*  instead use interface to define the type of the object so that it can be used in multiple places
 */
interface PersonInterface {
  name: string;
  age: number;
}

class Person implements PersonInterface {
  /* 

    also interface can be implemented by a class

    implements keyword is used to implement an interface in a class and this class must have all the properties and methods of the interface

    the class object must build on top of the interface
    */
  name: string;
  age: number;
  address: string;

  // constructor must initialise the properties of the class implementing the interface

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
}

function greet(person: PersonInterface): string {
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
