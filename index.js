// Answer These Questions:
//
// - What are essential classes?
//     Class yg perlu dibuat adalah: Kue > Coklat, Kacang, dan Keju
// - What attributes will each class have?
//     Properti yang dibutuhkan adalah waktuPanggang, status, dan panggangStopper
// - What interface will each class provide?
//     Hm, element type? strings.
// - How will the classes interact with each other?
//     Through Composition Method
// - Which classes will inherit from others, if any?
//     Coklat extends Kue
//     Kacang extends Kue
//     Keju extends Kue
//
// Your code here

class Kue {
    constructor(name, minute){
        this._waktuPanggang = 0
        this._status = ''
        this._panggangStopper = true
        this.name = name
        this.minute = minute
    }
    get panggangStopper() { 
        return this._panggangStopper
    }
    get waktuPanggang() { 
        return this._waktuPanggang
    }
    get status() { 
        return this._status
    }

    cookAll () {
        for (let i = 0; i <= this.minute + 5; i+= 5) {
            if (i < this.name.minute - 5) {
                this._status = 'mentah'
                console.log(`${this.name.name}, menit ke ${i} : ${this.status}`)
            }
            if (i === (this.name.minute - 5)) {
                this._status = 'hampir matang'
                console.log(`${this.name.name}, menit ke ${i} : ${this.status}`)
            }
            if (i == this.name.minute) {
                this._status = 'matang'
                console.log(`${this.name.name}, menit ke ${i} : ${this.status}`)
            }
            if (i >= this.name.minute + 5) {
                this._status = 'hangus'
                console.log(`${this.name.name}, menit ke ${i} : ${this.status}`)
            }
        }
    }
}

console.log(`\n`)
console.log(`=====================================`)
console.log(`Generate by each Coklat, Kacang, Keju`)
console.log(`=====================================`)
console.log(`\n`)

// ======
// Coklat
// ======

class Coklat extends Kue {     
    constructor (name, minute){
        super(name, minute)
    }
    cook (max = 20) { // input 1.1
        this._waktuPanggang += 5
        if (this._waktuPanggang < max) this._status = 'mentah';
        if (this._waktuPanggang === (max - 5)) this._status = 'hampir matang';
        if (this._waktuPanggang === max) this._status = 'matang';
        if (this._waktuPanggang >= max + 1) this._status = 'hangus';
        if (this._waktuPanggang > max + 1) this._panggangStopper = false;
        return this
    }
}

let coco = new Coklat()
do {
    coco.cook()
    console.log(`Kue cokelat, menit ke ${coco.waktuPanggang} : ${coco.status}`)
} while (coco._panggangStopper);
console.log(`\n`)

// ======
// Kacang
// ====== 

class Kacang extends Kue {
    constructor (name, minute){
        super(name, minute)
    }
    cook (max = 30) { // input 1.2
        this._waktuPanggang += 5
        if (this._waktuPanggang < max) this._status = 'mentah'
        if (this._waktuPanggang === (max - 5)) this._status = 'hampir matang'
        if (this._waktuPanggang === max) this._status = 'matang'
        if (this._waktuPanggang >= max + 1) this._status = 'hangus'
        if (this._waktuPanggang > max + 1) this._panggangStopper = false
        return this
    }
}
let peanut = new Kacang()
do {
    peanut.cook()
    console.log(`Kue kacang, menit ke ${peanut.waktuPanggang} : ${peanut.status}`)
} while (peanut._panggangStopper);
console.log(`\n`)

// ====
// Keju
// ====

class Keju extends Kue {
    constructor(name, minute) {
        super(name, minute)
    }
    cook (max = 35) { // input 1.3
        this._waktuPanggang += 5
        if (this._waktuPanggang < max) this._status = 'mentah';
        if (this._waktuPanggang === (max - 5)) this._status = 'hampir matang';
        if (this._waktuPanggang === max) this._status = 'matang';
        if (this._waktuPanggang >= max + 1) this._status = 'hangus';
        if (this._waktuPanggang > max + 1) this._panggangStopper = false;
        return this
    }
}
let cheese = new Keju()
do {
    cheese.cook()
    console.log(`Kue keju, menit ke ${cheese.waktuPanggang} : ${cheese.status}`)
} while (cheese._panggangStopper);
console.log(`\n`)


console.log(`==================================`)
console.log(`Generate by Kue's 'cookAll' method`)
console.log(`==================================`)

let chocolateCake = new Coklat('Kue Coklat', 20) // input 2.1
let peanutCake = new Kacang('Kue Kacang', 30)    // input 2.2
let cheezeCake = new Keju('Kue Keju', 35)        // input 2.3
let arrOfCakes = [chocolateCake, peanutCake, cheezeCake]
let temp = 0
for (let k = 0; k < arrOfCakes.length; k++) {
    if (temp < arrOfCakes[k].minute) {
        temp = arrOfCakes[k].minute
    }    
    console.log('\n')
    let cooking = new Kue(arrOfCakes[k], temp)
    cooking.cookAll();
}
console.log('\n')

