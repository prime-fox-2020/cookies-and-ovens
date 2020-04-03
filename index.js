// Answer These Questions:
//
// - What are essential classes?
//  1.Class Kue
//  2. Class KueCoklat
//  3. Class KueKeju
//  4. Class KueKacang
// - What attributes will each class have?
//  nama
//  waktuMatang 
//  status 
//  bahan
//  waktuMasak
// - What interface will each class provide?
//  this.nama = namaKue
//  this.waktuMatang =waktu
//  this.status =status
//  this.bahan=`Tepung, Margarin, Gule, Telur, Pengembang`
//  this.waktuMasak= null
// - How will the classes interact with each other?
//  Class Kue berlaku Sebagai parent untuk Class KueCoklat, Class KueKacang, Class KueKeju
// - Which classes will inherit from others, if any?
//  Class KueCoklat, Class KueKacang, Class KueKeju diwarisi dari Class Kue
//
//
// Your code here


class Kue {
    constructor(namaKue, waktu, status){
        this.nama = namaKue
        this.waktuMatang =waktu
        this.status =status
        this.bahan=`Tepung, Margarin, Gule, Telur, Pengembang`
        this.waktuMasak= null
    }

    tambahanBahan(bahanKhusus){
        this.bahan+=`, ${bahanKhusus}`
    }

    cooking(){
        this.waktuMasak +=5
        if(this.waktuMasak< this.waktuMatang-5){
            console.log(`${this.nama}, menit ke ${this.waktuMasak} : ${this.status}`)
        }else if(this.waktuMasak< this.waktuMatang){
            this.status = `Hampir Matang`
            console.log(`${this.nama}, menit ke ${this.waktuMasak} : ${this.status}`)
        }else if(this.waktuMasak == this.waktuMatang){
            this.status = `Matang`
            console.log(`${this.nama}, menit ke ${this.waktuMasak} : ${this.status}`)
        }else if(this.waktuMasak > this.waktuMatang){
            this.status = `Hangus`
            console.log(`${this.nama}, menit ke ${this.waktuMasak} : ${this.status}`)
        }
    }

}

class KueCoklat extends Kue{
    constructor(namaKue, waktu, status,bahan){
        super(namaKue, waktu, status,bahan)
    }
    tambahanBahan(bahanKhusus){
        super.tambahanBahan(bahanKhusus)
    }
    cooking(){
        super.cooking()
    }
    
}

class KueKeju extends Kue{
    constructor(namaKue, waktu, status,bahan){
        super(namaKue, waktu, status,bahan)
    }
    tambahanBahan(bahanKhusus){
        super.tambahanBahan(bahanKhusus)
    }
    cooking(){
        super.cooking()
    }
    
}

class KueKacang extends Kue{
    constructor(namaKue, waktu, status,bahan){
        super(namaKue, waktu, status,bahan)
    }
    tambahanBahan(bahanKhusus){
        super.tambahanBahan(bahanKhusus)
    }
    cooking(){
        super.cooking()
    }
    
}

let kueCoklat = new KueCoklat ('Kue Cokelat',20,'Mentah')
kueCoklat.tambahanBahan('Perasa Cokelat')

let kueKeju = new KueCoklat ('Kue Keju',30,'Mentah')
kueKeju.tambahanBahan('Perasa Cokelat')

let kueKacang = new KueCoklat ('Kue Kacang',35,'Mentah')
kueKacang.tambahanBahan('Perasa Cokelat')

const namaKue = [kueCoklat,kueKeju,kueKacang]

for (let i = 0; i < namaKue.length; i++) {
    console.log(`\n ================= Pemasakan ${namaKue[i].nama} ===================`)
    for (let j = 0; j < 8 ; j++) {
        namaKue[i].cooking();
    }
}



