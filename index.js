// Answer These Questions:
//
// - What are essential classes?
//   Class Kue, Oven, KueCoklat, KueKacang, KueKeju
// - What attributes will each class have?
//   Kue's attributes:
//   -  _name, _timeToBake, _ingredients
//   Oven's attributes:
//   -  _cookies
// - What interface will each class provide?
//   - bake(), inputCookie()
// - How will the classes interact with each other?
//   Oven menerim bahan, dan waktu memanggang untuk menciptakan kue
// - Which classes will inherit from others, if any?
//   KueCoklat, KueKacang, KueKeju
//
// Your code here
class Kue {
  constructor(name, timeToBake) {
    this._name = name
    this._timeToBake = timeToBake
    this._status = null
    this._bakingTime = 0
  }

  get bakingTime() {
    return this._bakingTime
  }
  set bakingTime(num) {
    this._bakingTime += num
  }

  get status() {
    return this._status
  }
  set status(str) {
    this._status = str
  }

  updateStatus() {
    let keys = Object.keys(this._statusList)
    let index = keys.filter(el => this.bakingTime >= el)
    this.status = this._statusList[index[index.length - 1]]
    // console.log(this._statusList[keys[index]])
    console.log(index)
  }
}

class KueCoklat extends Kue {
  constructor(time) {
    super('Kue Coklat', time || 20)
    this._statusList = {
      10: 'Mentah',
      15: 'Hampir matang',
      20: 'Matang',
      25: 'Hangus'
    }
  }
}

class KueKacang extends Kue {
  constructor(time) {
    super('Kue Kacang', time || 30)
    this._statusList = {
      20: 'Mentah',
      25: 'Hampir matang',
      30: 'Matang',
      35: 'Hangus'
    }
  }
}

class KueKeju extends Kue {
  constructor(time) {
    super('Kue Keju', time || 35)
    this._statusList = {
      25: 'Mentah',
      30: 'Hampir matang',
      35: 'Matang',
      45: 'Hangus'
    }
    // [
    //   {'Mentah': 25},
    //   {'Hampir matang': 30},
    //   {'Matang': 35},
    //   {'Hangus': 45}
    // ]
  }
}
class Oven {
  constructor() {
    this._cookies = []
  }

  get cookies() {
    return this._cookies
  }
  
  addCookie(obj) {
    if (typeof obj === 'object') this._cookies.push(obj)
  }

  bake(num) {
    this.cookies.forEach(el => {
      el.bakingTime = num
      el.updateStatus()
    })
  }

  report() {

  }

  static prepareCookies(type, time) {
    const createCookie = {
      KueCoklat: new KueCoklat(time),
      KueKacang: new KueKacang(time),
      KueKeju: new KueKeju(time)
    }
    return createCookie[type] || undefined
  }
}

const oven1 = new Oven()
oven1.addCookie(Oven.prepareCookies('KueKeju'))
oven1.addCookie(Oven.prepareCookies('KueKacang'))
oven1.addCookie(Oven.prepareCookies('KueCoklat', 50))
oven1.cookies[1]._name = 'mutated'

console.log(oven1.cookies)
oven1.bake(33)
console.log(oven1.cookies)
