"use strict";
class _TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    // below is the key difference in the interface and the abstract classes
    getReelTime() {
        // some logic
        return 2;
    }
}
// Cannot create an instance of an abstract class.ts(2511)
// const obj = new TakePhoto("assd", "asdf");
class _Instagram extends _TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("sepia");
    }
}
const aksh = new _Instagram("as", "as", 7);
aksh.getReelTime();
