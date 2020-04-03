// Answer These Questions:
//
// - What are essential classes?
//  ** it's core of the code, and i built with some class

// - What attributes will each class have?
//  ** type 'cake' and 'cookTime'

// - What interface will each class provide?
//  ** data input from a user, data from another object, or anything that's not inside that very same object. 

// - How will the classes interact with each other?
//  ** with instance method

// - Which classes will inherit from others, if any?
//  ** Cake class is a Parent, and Kue... is a child
//
// Your code here


class Cake {
  constructor(type, cookTime) {
    this.type = type
    this.cookTime = cookTime
  }
}

class KueCoklat extends Cake {
  constructor(type, cookTime) {
    super(type, cookTime)
  }
}

class KueKacang extends Cake {
  constructor(type, cookTime) {
    super(type, cookTime)
  }
}
class KueKeju extends Cake {
  constructor(type, cookTime) {
    super(type, cookTime)
  }
}

class Oven {
  constructor(cake){
    this.cake = cake
    this.status = 'mentah'
  }


  turnOn(time) {
    for (let i = 0; i <= time; i += 5) {
      if (i === this.cake.cookTime - 5) {
        this.status = 'hampir matang'
      }
      else if(i === this.cake.cookTime) {
        this.status = 'matang'
      }
      else if(i >= this.cake.cookTime) {
        this.status = 'hangus'
      }
      console.log(`${this.cake.type}, menit ke ${i} : ${this.status}`)
    }
    console.log(`=================================================`);
  }
}

let kueCoklat = new KueCoklat('Kue Coklat', 20)
let kueKacang = new KueKacang('Kue Kacang', 30)
let kueKeju = new KueKeju('Kue Keju', 35)

let oven1 = new Oven(kueCoklat)
oven1.turnOn(35)

console.log('\n')

let oven2 = new Oven(kueKacang)
oven2.turnOn(40)

console.log('\n')

let oven3 = new Oven(kueKeju)
oven3.turnOn(50)