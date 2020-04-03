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
        switch (this.flavour) {
            case 'coklat':
                this._cookTime = 20; break;
            case 'kacang':
                this._cookTime = 30; break;
            case 'keju':
                this._cookTime = 35; break;
        }
        this._status = '';
    }
    get flavour() {return this._flavour;}
    set flavour(param) {this._flavour = param;}
    get cookTime() {return this._cookTime;}
    set cookTime(param) {this._cookTime = param;}
    get status() {return this._status}
    set status(param) {this._status = param;}

    static flavour(flavour) {
        return new Cookies(flavour);
    }
}

class Cook {
    static oven(biscuit, setTime, report = 5) {
        let nowTime = 0;
        while (nowTime < setTime){
            nowTime++;
            if (nowTime > biscuit.cookTime){
                biscuit.status = 'gosong';
            } else if (nowTime == biscuit.cookTime) {
                biscuit.status = 'matang';
            } else {
                biscuit.status = 'mentah';
            }
            if (nowTime % report == 0 && nowTime != setTime) {
                console.log(`Kue ${biscuit.flavour}, menit ke ${nowTime} : ${biscuit.status}`);
            }
        }
        console.log(`Kue ${biscuit.flavour}, menit ke ${nowTime} : ${biscuit.status}`);
    }
}

Cook.oven(Cookies.flavour('kacang'), 30);
console.log();
Cook.oven(Cookies.flavour('keju'), 38, 10);