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


class Cookies {
  constructor() {
    this.type = [];
    this.duration = [];
    this.durationCookie = 0;
    this.tipe = ["Coklat", "Keju", "Kacang"]
    this.durasiCookie = [20, 15, 10];
    this.statusCookie = ["mentah","hampir matang","matang", "gosong"];
  }

  inputKue (jenis, durasi) {
    this.type.push(jenis);
    this.duration.push(durasi);
  }


  cookCookie() {
    let cookingTime = null;
    if (this.type === this.tipe[0]) {
      this.durationCookie = this.durasiCookie[0];
    }
    else if (this.type === this.tipe[1]) {
      this.durationCookie = this.durasiCookie[1];
    }
    else{
      this.durationCookie = this.durasiCookie[2];
    }

    for (let j = 0; j <= this.duration; j+= 5) {
      if (j < this.durationCookie) {
        console.log(`Kue ${this.type}, menit ke ${j} : ${this.statusCookie[0]}`);
      }
      else if (j == this.durationCookie - 5) {
        console.log(`Kue ${this.type}, menit ke ${j} : ${this.statusCookie[1]} `);
      }
      else if (j == this.durationCookie) {
        console.log(`Kue ${this.type}, menit ke ${j} : ${this.statusCookie[2]}`);
      }
      else if (j >= this.durationCookie + 5) {
        console.log(`Kue ${this.type}, menit ke ${j} : ${this.statusCookie[3]} `);
      }
    }
  }
}


let kue = new Cookies();
//masukkan nama kue, durasi,
kue.inputKue ("Keju", 30);
kue.cookCookie();
