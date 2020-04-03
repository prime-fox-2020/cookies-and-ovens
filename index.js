// Answer These Questions:
//
// - What are essential classes?
//      Kue, Coklat, Kacang, Keju, Oven
// - What attributes will each class have?
//      Kue, Coklat, Kacang, Keju: jenisKue, butuhWaktu, status
//      Oven: isi, waktu, status
// - What interface will each class provide?
//      Oven dapat menampilkan isi kue yang sedang dimasak. Dan setiap 5 menit menampilkan status kematangan kue tersebut
// - How will the classes interact with each other?
//      Kue adalah parent dari Coklat, Kacang, Keju
//      Children dari Kue adalah aggregation untuk Oven
// - Which classes will inherit from others, if any?
//      Coklat, Kacang, Keju mewarisi Kue


// Your code here

class Kue{
    constructor(jenisKue, butuhWaktu, status = 'mentah'){
        this.jenisKue = jenisKue
        this.butuhWaktu = butuhWaktu
        this.status = status
    }
}

class Coklat extends Kue{
    constructor(){
        super('Coklat', 25)
    }
}
  
class Kacang extends Kue{
    constructor(){
        super('Kacang', 30)
    }
}
  
class Keju extends Kue{
    constructor(){
        super('Keju', 35)
    }
}

class Oven{
    constructor(isi){
        this.isi = isi
    }

    masak(time){
        for(let i = 5; i <= time; i += 5){
            if(i < this.isi.butuhWaktu / 2){
                this.isi.status = 'mentah'
            }else if (i > this.isi.butuhWaktu / 2 && i < this.isi.butuhWaktu){
                this.isi.status = 'hampir matang'
            }else if (i == this.isi.butuhWaktu){
                this.isi.status = 'matang'
            }else if (i > this.isi.butuhWaktu){
                this.isi.status = 'hangus'
            }
            console.log(`Kue ${this.isi.jenisKue}, menit ke ${i}: ${this.isi.status}`)
        }
        return ''
    }
}

let kueCoklat = new Coklat()
let kueKacang = new Kacang()
let kueKeju = new Keju()

let oven = new Oven(kueCoklat)
console.log(oven.masak(30))