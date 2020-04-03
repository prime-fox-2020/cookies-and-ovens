// // Answer These Questions:
// //
// // - What are essential classes? Kue, KueCoklat, KueKeju, KueKacang, Masak
// // - What attributes will each class have? waktu matang, status
// // - What interface will each class provide? 
// // - How will the classes interact with each other?
// // - Which classes will inherit from others, if any? KueCoklat, KueKacang, KueKeju extends ke class Kue
// //
// //
// // Your code here

class Kue {
    constructor() {
        this._waktuMatang = 0
        this.status = 'mentah'
    }

    get waktuMatang () {
        return this._waktuMatang
    }

    set waktuMatang(param) {
        this._waktuMatang = param
    }
}

class KueCoklat extends Kue { 
    constructor() {
        super()
        this.rasa = 'coklat'
        this.waktuMatang = 20
    }
}

class KueKacang extends Kue { 
    constructor() {
        super()
        this.rasa = 'Kacang'
        this.waktuMatang = 30
    }
}

class KueKeju extends Kue { 
    constructor() {
        super()
        this.rasa = 'keju'
        this.waktuMatang = 35
    }
}

class Masak{
    constructor () {
        this.kue = ''
    }

    pilihRasa(rasa) {
        this.kue = rasa
    }

    panggang(durasi) {
        let time = 1
        while(time <= durasi){
            if(time < (this.kue.waktuMatang*0.50)) {
                this.kue.status = 'Mentah'
            } else if(time < this.kue.waktuMatang) {
                this.kue.status = 'Hampir Matang'
            } else if(time == this.kue.waktuMatang) {
                this.kue.status = 'Matang'
            } else if(time > this.kue.waktuMatang) {
                this.kue.status = 'Hangus'
            }
            if(time % 5 == 0) {
                console.log(`Kue ${this.kue.rasa}, menit ke ${time} : ${this.kue.status}`)
            }
            time++
        }
    }
}


// pilih rasa Kue
let coklat = new KueCoklat
let keju = new KueKeju
let kacang = new KueKacang

let rino = new Masak()
rino.pilihRasa(coklat)
rino.panggang(25)

rino.pilihRasa(keju)
rino.panggang(40)

rino.pilihRasa(kacang)
rino.panggang(30)
