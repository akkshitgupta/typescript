abstract class _TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): void;
  // below is the key difference in the interface and the abstract classes
  getReelTime(): number {
    // some logic
    return 2;
  }
}

// Cannot create an instance of an abstract class.ts(2511)
// const obj = new TakePhoto("assd", "asdf");

class _Instagram extends _TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log("sepia");
  }
}

const aksh = new _Instagram("as", "as", 7);
aksh.getReelTime();
