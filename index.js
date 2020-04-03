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

"use strict"

class Cake {
  constructor(time = 0) {
    this.time = time
    this.bake = 40
  }
  baking(){
      this.time += 5
  }
}


class Coklat extends Cake {
  constructor(time) {
      super(time)
      this.name = 'coklat'
      this.done = 20
      this.status = 'mentah'
  }
  bakeProcess(){
    if (this.time > 10 && this.time < 20){
      this.status = 'hampir matang'
    }
    if (this.time == 20){
      this.status = 'matang'
    }
    if (this.time > 20){
      this.status = 'gosong'
    }
  }
}

class Kacang extends Cake {
  constructor(time) {
      super(time)
      this.name = 'coklat'
      this.done = 30
      this.status = 'mentah'
  }
  bakeProcess(){
    if (this.time > 15 && this.time < 30){
      this.status = 'hampir matang'
    }
    if (this.time == 30){
      this.status = 'matang'
    }
    if (this.time > 30){
      this.status = 'gosong'
    }
  }
}

class Keju extends Cake {
  constructor(time) {
      super(time)
      this.name = 'coklat'
      this.done = 35
      this.status = 'mentah'
  }
  bakeProcess(){
    if (this.time > 20 && this.time < 35){
      this.status = 'hampir matang'
    }
    if (this.time == 35){
      this.status = 'matang'
    }
    if (this.time > 35){
      this.status = 'gosong'
    }
  }
}

let coklat = new Coklat()
let kacang = new Kacang()
let keju = new Keju()

console.log(`-----------Anda mulai memasak kue coklat-----------\n`)

while (coklat.time < coklat.bake){
  coklat.bakeProcess(coklat.baking())
  console.log(`Kue ${coklat.name}, menit ke ${coklat.time} : ${coklat.status} `)
}

console.log(`\n-----------Anda siap memasak kue kacang-----------\n`)

while (kacang.time < kacang.bake){
  kacang.bakeProcess(kacang.baking())
  console.log(`Kue ${kacang.name}, menit ke ${kacang.time} : ${kacang.status} `)
}

console.log(`\n-----------Anda siap memasak kue keju-----------\n`)

while (keju.time < keju.bake){
  keju.bakeProcess(keju.baking())
  console.log(`Kue ${keju.name}, menit ke ${keju.time} : ${keju.status} `)
}