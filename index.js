// Answer These Questions:
//
// - What are essential classes?
// - What attributes will each class have?
// - What interface will each class provide?
// - How will the classes interact with each other?
// - Which classes will inherit from others, if any?
//
//
// Your code here
class Cake {
    constructor(nama) {
        this._nama = nama;
        this._timeBake;
        this._bakedTime = 0
        this._status = 'mentah';
    }

    get nama() {
        return this._nama;
    }

    get status() {
        return this._status;
    }

    isBaking(time) {
        this._bakedTime = time;

        if (this._bakedTime < 50 / 100 * this._timeBake) this._status = 'mentah';
        else if (this._bakedTime < 0.75 * this._timeBake) this._status = 'setengah matang';
        else if (this._bakedTime < this._timeBake) this._status = 'hampir matang';
        else if (this._bakedTime > this._timeBake) this._status = 'hangus';
        else this._status = 'matang';
    }

}

class chocolateCake extends Cake {
    constructor(nama) {
        super(nama);

        this._timeBake = 20;
    }

}

class peanutCake extends Cake {
    constructor(nama) {
        super(nama);

        this._timeBake = 30;
    }
}

class cheeseCake extends Cake {
    constructor(nama) {
        super(nama);

        this._timeBake = 35;
    }
}

class Oven {
    static baking(cakes, time) {
        for (let times = 5; times <= time; times += 5) {
            for (let i = 0; i < cakes.length; i++) {
                cakes[i].isBaking(times);
                console.log(`${cakes[i].nama}, menit ke ${times} : ${cakes[i].status}`)
            }
        }
    }
}

let cakes = [];

cakes.push(new chocolateCake('Kue coklat'));
Oven.baking(cakes, 30);
console.log('\n-----------------------------------\n')
cakes = []
cakes.push(new peanutCake('Kue kacang'));
Oven.baking(cakes, 30);
console.log('\n-----------------------------------\n')
cakes = []
cakes.push(new cheeseCake('Kue keju'));
Oven.baking(cakes, 30);
console.log('\n-----------------------------------\n')
