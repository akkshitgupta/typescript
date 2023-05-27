// trial based system where a user would like to use a trial at first

interface userOnTrial {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //   startTrial: () => string;
  startTrial(): string;
  getCoupon(token: string, value: number): number;
}

// we can add some more features to an already defined interface

interface userOnTrial {
  github?: string;
}

// just like inheritance in classes
interface Admin extends userOnTrial {}

const newUser: userOnTrial = {
  dbId: 345,
  email: "akshit",
  userId: 435,
  startTrial: () => {
    return "Trial started";
  },
  getCoupon: (hell: "adf", off: 29) => {
    return 234;
  },
};

export {};
