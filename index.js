// Answer These Questions:

// - What are essential classes?
//      class Cookies, class Oven, class Coklat, class Kacang, class Keju
 
// - What attributes will each class have?
//      class Cookies(namaKue, menit, status), class Oven(cookie, lamaMasak, statusOven), class Coklat(namaKue, menit),
//      class Kacang(namaKue, menit), class Keju(namaKue, menit)        
 
// - What interface will each class provide?
//      class Cookies memiliki method deskrispsi untuk memberitahu informasi nama kue dan menit yang dibutuhkan
//      class Oven memiliki method masakKue() yang berfungsi untuk mensimulasikan pemasakkan kue tiap 5 menit

// - How will the classes interact with each other?
//      class Cookies menjadi parent/template bagi class Coklat, class Kacang, & class Keju
//      class Oven akan menjadi tempat mengolah class Coklat, class Kacang, & class Keju  

// - Which classes will inherit from others, if any?
//      class Coklat, class Kacang, & class Keju inherit ke class Cookies

//
// Your code here

class Cookies {
    constructor(namaKue, menit) {
        this.namaKue = namaKue
        this.menit = menit
        this.status = 'Mentah'
    }
    
    deskripsi() {
        let message = `${this.namaKue} : ${this.menit} menit`
        return message
    }
}


class Oven {
    constructor(cookie, lamaMasak) {
        this.cookie = cookie
        this.lamaMasak = lamaMasak
        this.statusOven = ''
    }

    masakKue() {
        console.log(`\nOven Sedang memasak ${this.cookie.namaKue}, ${this.cookie.status}`);
        for (let i = 0; i <= this.lamaMasak; i += 5) {
            if (i < this.cookie.menit / 2) {
                this.statusOven = 'belum matang'
                console.log(`- Menit ke ${i}: ${this.statusOven}`);
            } else if (i > this.cookie.menit / 2 && i < this.cookie.menit) {
                this.statusOven = 'hampir matang'
                console.log(`- Menit ke ${i}: ${this.statusOven}`);
            } else if (i == this.cookie.menit) {
                this.statusOven = 'matang'
                console.log(`- Menit ke ${i}: ${this.statusOven}`);
            } else if (i > this.cookie.menit) {
                this.statusOven = 'gosong'
                console.log(`- Menit ke ${i}: ${this.statusOven}`);
            } 
        }
        this.cookie.status = this.statusOven
        console.log(`Status: ${this.cookie.namaKue}, ${this.cookie.status}`);
        
    }
    
}

class Coklat extends Cookies {
    constructor (namaKue, menit) {
        super(namaKue, menit) 
    }

}

class Kacang extends Cookies {
    constructor (namaKue, menit) {
        super(namaKue, menit)
    }
}

class Keju extends Cookies {
    constructor (namaKue, menit) {
        super(namaKue, menit) 
    }
}

let kueCoklat = new Coklat('Kue Coklat', 20)
let kueKacang = new Kacang('Kue Kacang', 30)
let kueKeju = new Keju('Kue Keju', 35) 

let cookiesReadyOven = [kueCoklat, kueKacang, kueKeju]
for (let i = 0; i < cookiesReadyOven.length; i++) {
    let masukanKeOven = new Oven(cookiesReadyOven[i], 40)    
    masukanKeOven.masakKue()
}