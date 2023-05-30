// arrays are by-default generics
const score: Array<number> = [];
const _name: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

// here the type keyword is being used as a varible explained below
function identityTwo<Type>(val: Type): Type {
  return val;
}

const valuee: number = 12;
const rea = typeof valuee;
// now the rea can be used anywhere to represent the type of valuee

interface customer {
  joined: string;
  duration: number;
}

identityTwo<customer>({ joined: "asd", duration: 23 });

function searchIndex<T>(productList: T[]): T {
  const index: number = 3;
  return productList[index];
}

const moreSearch = <T>(productList: T[]): T => {
  return productList[3];
};

// to avoid the confusion while working with jsx in react put a comma there

interface Database {
  connection: string;
  username: string;
  passWord: string;
}

// use the concept of generics instead of using the union type as in line 5

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

anotherFunction(3, { connection: "asd", username: "weit", passWord: "wer" });

interface Quiz {
  name: string;
  type: string;
  ques: number;
  time: number;
}

interface Course {
  name: string;
  duration: number;
  type: string;
  tutor: string;
  validity: number;
}

// generic class
class Sell<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}
