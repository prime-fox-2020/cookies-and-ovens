// Answer These Questions:
//
// - What are essential classes?
// - What attributes will each class have?
// - What interface will each class provide?
// - How will the classes interact with each other?
// - Which classes will inherit from others, if any?
//

class Cookies {
    constructor(flavour) {
        this._flavour = flavour;
        this._cookTime = this.timeToCook();
    }
    get flavour() {return this._flavour;}
    set flavour(param) {this._flavour = param;}
    get cookTime() {return this._cookTime;}
    set cookTime(param) {this._cookTime = param;}

    timeToCook() {
        switch (this.flavour) {
            case  'coklat':
                return 20;
            case 'kacang':
                return 30; 
            case 'keju':
                return 35; 
        }
    }
}

class Cook {
    constructor() {
        this._nowTime = 0;
    }
    get nowTime() {return this._nowTime;}
    set nowTime(param) {this._nowTime = param;}
    
    static cookies(flavour, setTime) {
        let baking = new Cookies(flavour);
        if (setTime > baking.cookTime){
            console.log(`Kue ${flavour} gosong`);
        } else if (setTime == baking.cookTime) {
            console.log(`Kue ${flavour} matang`);
        } else {
            console.log(`Kue ${flavour} mentah`);
        }
    }
    
}

Cook.cookies('keju', 34);