// interface can be assumed as a protocol
// definition is not involved in the interface
interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}
// interface is just like a rule that must be followed to run/perform a certain task

class Instagram implements TakePhoto {
  // if you want to take photo, certain things must be there
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}
}
class YouTube implements TakePhoto {
  // if you want to take photo, certain things must be there
  //   some extra would go after the completion of criterion
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    public shorts: string
  ) {}
}
