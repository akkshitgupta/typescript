"use strict";
// interface is just like a rule that must be followed to run/perform a certain task
class Instagram {
    // if you want to take photo, certain things must be there
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class YouTube {
    // if you want to take photo, certain things must be there
    //   some extra would go after the completion of criterion
    constructor(cameraMode, filter, burst, shorts) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.shorts = shorts;
    }
}
