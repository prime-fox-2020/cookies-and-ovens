const Cokelat = require('./kue/cokelat')
const Kacang = require('./kue/kacang')
const Keju = require('./kue/keju')

class Oven {
  constructor() {
    this.isiOven = []
  }

  masukkanKue(...p_kue) {
    this.isiOven.push(...p_kue)
  }

  masak(p_durasi) {

    this.isiOven.forEach((kue) => {
      for (let i = 5; i < p_durasi; i += 5) {
        if (i === 5) console.log(`\n`);

        if (i > kue.waktuMatang) {
          kue.status = 'hangus'
          console.log(`Kue ${kue.constructor.name}, menit ke ${i} : ${kue.status}`);
        }
        else if (i === kue.waktuMatang) {
          kue.status = 'matang'
          console.log(`Kue ${kue.constructor.name}, menit ke ${i} : ${kue.status}`);
        }
        else if (i === kue.waktuMatang - 5) {
          kue.status = 'hampir matang'
          console.log(`Kue ${kue.constructor.name}, menit ke ${i} : ${kue.status}`);
        }
        else if (i < kue.waktuMatang) {
          console.log(`Kue ${kue.constructor.name}, menit ke ${i} : ${kue.status}`);
        }
      }
    })
  }

  keluarkanKue() {
    let nampan = this.isiOven.splice(0, this.isiOven.length)

    console.log(`\n Semua kue dikeluarkan, oven sudah kosong`)

    return nampan
  }
}

module.exports = Oven