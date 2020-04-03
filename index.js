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
    constructor(){
        this._waktuPanggang = 0
        this._status = ''
        this._panggangStopper = true
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
}

// ======
// Coklat
// ======

class Coklat extends Kue {
    cook (max = 20) {
        this._waktuPanggang += 5
        if (this._waktuPanggang < max) {
            this._status = 'mentah'
        }
        if (this._waktuPanggang === (max - 5)) {
            this._status = 'hampir matang'
        }
        if (this._waktuPanggang === max) {
            this._status = 'matang'
        }
        if (this._waktuPanggang >= max + 1) {
            this._status = 'hangus'
        }
        if (this._waktuPanggang > max + 1) {
            this._panggangStopper = false
        }
        return this
    }
}
let coco = new Coklat()
console.log(`\n`)
do {
    coco.cook()
    console.log(`Kue cokelat, menit ke ${coco.waktuPanggang} : ${coco.status}`)
} while (coco._panggangStopper);
console.log(`\n`)

// ======
// Kacang
// ====== 

class Kacang extends Kue {
    cook (max = 30) {
        this._waktuPanggang += 5
        if (this._waktuPanggang < max) {
            this._status = 'mentah'
        }
        if (this._waktuPanggang === (max - 5)) {
            this._status = 'hampir matang'
        }
        if (this._waktuPanggang === max) {
            this._status = 'matang'
        }
        if (this._waktuPanggang >= max + 1) {
            this._status = 'hangus'
        }
        if (this._waktuPanggang > max + 1) {
            this._panggangStopper = false
        }
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
    cook (max = 35) {
        this._waktuPanggang += 5
        if (this._waktuPanggang < max) {
            this._status = 'mentah'
        }
        if (this._waktuPanggang === (max - 5)) {
            this._status = 'hampir matang'
        }
        if (this._waktuPanggang === max) {
            this._status = 'matang'
        }
        if (this._waktuPanggang >= max + 1) {
            this._status = 'hangus'
        }
        if (this._waktuPanggang > max + 1) {
            this._panggangStopper = false
        }
        return this
    }
}
let cheese = new Keju()
do {
    cheese.cook()
    console.log(`Kue keju, menit ke ${cheese.waktuPanggang} : ${cheese.status}`)
} while (cheese._panggangStopper);
console.log(`\n`)