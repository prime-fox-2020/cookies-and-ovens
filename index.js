// Answer These Questions:
//
// - What are essential classes?
// - Cake and Oven (cake for something to bake and oven as the tools to bake)
// - What attributes will each class have?
// - Cake has name and minute (time for it to cook) attribute, while Oven has cake (something to bake) and duration of cooking (bakingTime) attribute
// - What interface will each class provide?
// - Cake will provide Oven with name and time for it to cook. Oven will bake the cake.
// - How will the classes interact with each other?
// - Cake will be used inside Oven
// - Which classes will inherit from others, if any?
// - Chocolate, Peanut, and Cheeze will inherit it's attribute from Cake
//
//
// Your code here



class Cake {
    constructor (name, minute) {
        this.name = name;
        this.minute = minute;
    }
}

class Oven {
    constructor (cake, bakingTime) {
        this.cake = cake;
        this.bakingTime = bakingTime;
    }

    baking () {
        for (let i = 0; i <= this.bakingTime; i+=5) {
            if (i > this.cake.minute) {
                console.log(`${this.cake.name}, menit ke ${i} : hangus`);
            }
            else if (i == this.cake.minute) {
                console.log(`${this.cake.name}, menit ke ${i} : matang`);
            }
            else if (i == this.cake.minute-5) {
                console.log(`${this.cake.name}, menit ke ${i} : hampir matang`)
            }
            else {
                console.log(`${this.cake.name}, menit ke ${i} : masih mentah`)
            }
        }
    }

}

class Chocolate extends Cake {
    constructor(name, minute) {
        super(name, minute);
    }
}

class Peanut extends Cake {
    constructor(name, minute) {
        super(name, minute);
    }
}

class Cheeze extends Cake {
    constructor(name, minute) {
        super(name, minute);
    }
}


let chocolateCake = new Chocolate('Kue Coklat', 20)
let peanutCake = new Peanut('Kue Kacang', 30)
let cheezeCake = new Cheeze('Kue Keju', 35) 

let arrOfCakes = [chocolateCake, peanutCake, cheezeCake]
for (let i = 0; i < arrOfCakes.length; i++) {
    console.log('====================================')
    let cooking = new Oven(arrOfCakes[i], 35)
    cooking.baking();
}