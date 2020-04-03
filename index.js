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


class Oven {
    constructor() {
      this._cake = null;
    }
  
    set cook(cakeName) {
      return this._cake = cakeName
    }
  
    bake(time){
      let donenessLevel = ['Mentah', 'Hampir Matang', 'Matang','Hangus']
      let bakeTime = this._cake._bakeTime
  
      for (let i = 0; i <= time; i += 5){
        if (i >= 0 && i < bakeTime / 2){
          console.log(`Kue kamu, menit ke ${i} ${donenessLevel[0]}`)
        }
        else if (i === bakeTime - 5){
          console.log(`Kue Kamu, menit ke ${i} ${donenessLevel[1]}`)
        }
        else if (i === bakeTime){
          console.log(`Kue Kamu, menit ke ${i} ${donenessLevel[2]}`)
        }
        else {
          console.log(`Kue Kamu, menit ke ${i} ${donenessLevel[3]}!!!`)
        }
  
        console.log("--------------------------------------------------------")
      }
    }
  }
  
  class Cookie {
    constructor() {
      this._bakeTime = 10;
    }
  }
  
  class ChocolateCake extends Cookie {
    constructor() {
      super();
      this._bakeTime = 20;
    }
  }
  
  class NutCake extends Cookie {
    constructor() {
      super();
      this._bakeTime = 30;
    }
  }
  
  class CheeseCake extends Cookie {
    constructor() {
      super();
      this._bakeTime = 35;
    }
  }
  
  let oven = new Oven()
  let coklat = new ChocolateCake()
  
  oven.cook = coklat
  oven.bake(45)
  console.log(oven._cake)
  console.log(oven._cake._bakeTime)
