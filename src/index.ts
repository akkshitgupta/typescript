// class User {
//   // anything private is not accesible outside of the class
//   private readonly _dbId: number = 10;
//   public username: string;
//   email: string;
//   // city: string = "";
//   name: string;
//   constructor(email: string, name: string, username: string) {
//     this.email = email;
//     this.name = name;
//     this.username = username;
//   }
// }

class _User {
  // a new user always gets a trial course
  private _courseCount = 1;

  //   protected keyword is accessible in the class inherited from this

  readonly resti: string = "asdf";
  constructor(public username: string, private id: number) {}

  //   get keyword for getter function
  get getUsername(): string {
    return `apple${this.username}`;
  }

  // getter function to access the _courseCount variable
  get getCount(): number {
    return this._courseCount;
  }

  private deleteToken() {}

  //   setter function to update the _courseCount variable
  set setCount(countNum: number) {
    if (countNum < 1) {
      throw new Error("course count should be atleast one");
    }
    this._courseCount = countNum;
  }
}

class Member extends _User {
  isFamily: boolean = true;
}

const newUser = new _User("aks", 323);
