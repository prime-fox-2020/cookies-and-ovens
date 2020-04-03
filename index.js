// Answer These Questions:
//
// - What are essential classes?
// Cookie, and Oven

// - What attributes will each class have?
// Cookie: time (waktu yang dibutuhkan), status.
// Oven: container (penampung kue), timer (waktu yang diatur)

// - What interface will each class provide?
// Oven have method that get the object of cookie, and push it to container.
// Oven have cook method, get input number to set the timer, return status of cookie
// Cookie have method to set status, based on how long the cookie is cooked

// - How will the classes interact with each other?
// Oven needs to be filled before cooking

// - Which classes will inherit from others, if any?
// KueCoklat, KueKacang, KueKeju
//
// Your code here

class Oven {
  constructor() {
    this.container = [];
    this.timer = 0;
  }

  input(cookie) {
    switch (cookie) {
      case 'coklat':
        this.container.push(new KueCoklat);
        break;
      case 'kacang':
        this.container.push(new KueKacang);
        break;
      case 'keju':
        this.container.push(new KueKeju);
        break;
    }
  }

  cook(timer) {
    this.timer = timer;
    for (let i = 0; i < this.container.length; i++) {
      for (let j = 0; j <= this.timer; j+=5) {
        this.container[i].changeStatus(j);
        if (j != 0)
        console.log(`${this.container[i].jenis}, menit ke ${j} : ${this.container[i].status}`);
      }
      console.log('');
    }
  }
}

class Cookie {
  constructor() {
    this.time = 0;
    this.status = 'mentah';
  }

  changeStatus(timeNow) {
    if (timeNow+5 == this.time) {
      this.status = 'hampir matang';
    } else if (timeNow == this.time) {
      this.status = 'matang';
    } else if (timeNow-5 == this.time) {
      this.status = 'hangus';
    }
  }
}

class KueCoklat extends Cookie {
  constructor() {
    super();
    this.time = 20;
    this.jenis = 'Kue Coklat';
  }
}

class KueKacang extends Cookie {
  constructor() {
    super();
    this.time = 30;
    this.jenis = 'Kue Kacang';
  }
}

class KueKeju extends Cookie {
  constructor() {
    super();
    this.time = 35;
    this.jenis = 'Kue Keju';
  }
}

//example
const oven = new Oven;
oven.input('coklat');
oven.input('keju');
oven.input('kacang');
// console.log(oven.container);
oven.cook(30);