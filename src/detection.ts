function check(val: number | string) {
  if (typeof val === "string") {
    return val.toLocaleLowerCase();
  }
  return val + 2;
}

function provideId(id: string | null) {
  if (!id) {
    console.error("please provide a valid id!!");
    return;
  }

  id.toLocaleLowerCase();
}

// empty string must be taken care of properly
// read about narrowing in from docs

interface Userr {
  name: string;
  username: string;
}

interface Admin {
  name: string;
  username: string;
  isAdmin: boolean;
}

function isAdminAccount(account: Userr | Admin) {
  // in operator narrowing
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
}

// instance of narrowing

// any variable can be created using new keyword
new Date();
function logDate(x: Date | string) {
  // instanceof checks whether the var is instance of a class
  // typeof checks for primitive type var
  if (x instanceof Date) {
    console.log(x.toUTCString());
  }
}

type Fish = { swim: () => void };
type Bird = { fly: () => void };

// type predicates

function isFish(pet: Fish | Bird): pet is Fish {
  // pet as Fish ===> type casts pet as a fish
  return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet;
    return "Fish Food";
  } else {
    pet;
    return "Bird Food";
  }
}
