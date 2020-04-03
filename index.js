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
class Kue {
    constructor(name) {
        this._name = name
    }
    get name() {
        return this._name
    }
    set name(param) {
        this._name = param
    }
}

class Coklat extends Kue {
    constructor(name) {
        super(name)
        this._done = 20
    }

    get done() {
        return this._done
    }
    set done(param) {
        this._done = param
    }

    bake(time) {
        //baking time
        let status = ['mentah', 'hampir matang', 'matang', 'hangus']
        for (let i = 5; i <= time; i += 5) {
            if (i < this.done - 5) {
                console.log(`${this.name}, menit ke ${i} : ${status[0]}`)
            } else if (i >= this.done - 5 && i < this.done) {
                console.log(`${this.name}, menit ke ${i} : ${status[1]}`)
            } else if (i >= this.done && i < this.done + 5) {
                console.log(`${this.name}, menit ke ${i} : ${status[2]}`)
            } else if (i >= this.done + 5) {
                console.log(`${this.name}, menit ke ${i} : ${status[3]}`)
            }
        }
    }
}

class Kacang extends Kue {
    constructor(name) {
        super(name)
        this._done = 30
    }

    get done() {
        return this._done
    }
    set done(param) {
        this._done = param
    }

    bake(time) {
        //baking time
        let status = ['mentah', 'hampir matang', 'matang', 'hangus']
        for (let i = 5; i <= time; i += 5) {
            if (i < this.done - 5) {
                console.log(`${this.name}, menit ke ${i} : ${status[0]}`)
            } else if (i >= this.done - 5 && i < this.done) {
                console.log(`${this.name}, menit ke ${i} : ${status[1]}`)
            } else if (i >= this.done && i < this.done + 5) {
                console.log(`${this.name}, menit ke ${i} : ${status[2]}`)
            } else if (i >= this.done + 5) {
                console.log(`${this.name}, menit ke ${i} : ${status[3]}`)
            }
        }
    }
}

class Keju extends Kue {
    constructor(name) {
        super(name)
        this._done = 35
    }

    get done() {
        return this._done
    }
    set done(param) {
        this._done = param
    }

    bake(time) {
        //baking time
        let status = ['mentah', 'hampir matang', 'matang', 'hangus']
        for (let i = 5; i <= time; i += 5) {
            if (i < this.done - 5) {
                console.log(`${this.name}, menit ke ${i} : ${status[0]}`)
            } else if (i >= this.done - 5 && i < this.done) {
                console.log(`${this.name}, menit ke ${i} : ${status[1]}`)
            } else if (i >= this.done && i < this.done + 5) {
                console.log(`${this.name}, menit ke ${i} : ${status[2]}`)
            } else if (i >= this.done + 5) {
                console.log(`${this.name}, menit ke ${i} : ${status[3]}`)
            }
        }
    }
}

const kueCoklat = new Coklat('Kue Coklat')
const kueKacang = new Kacang('Kue Kacang')
const kueKeju = new Keju('Kue Keju')

console.log(kueCoklat.bake(25))
console.log(kueKacang.bake(35))
console.log(kueKeju.bake(40))