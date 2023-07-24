interface Circle {
  radius: number;
}

interface Rectangle {
  length: number;
  breadth: number;
}

interface triangle {
  base: number;
  height: number;
}

interface Square {
  side: number;
}

// type is more often used with union types
type Shape = Circle | Rectangle | triangle | Square;

function area(shape: Shape) {
  console.log("inside area function");
}
