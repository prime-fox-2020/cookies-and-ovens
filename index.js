// Answer These Questions:
//
// - What are essential classes? 1. Kue, 2.Kue Coklat,  3.Kue Kacang, 4.Kue Keju, 5. Oven
// - What attributes will each class have? Kue matang
// - What interface will each class provide? 
// - How will the classes interact with each other?
// - Which classes will inherit from others, if any? Tiap jenis kue inherit terhadap Kue
//
//
// Your code here

class Kue {
    constructor() {

    }
}

class KueCoklat extends Kue {
    constructor() {
        super()
        this.matang = 20
    }
}

class KueKacang extends Kue {
    constructor() {
        super()
        this.matang = 30
    }
}

class KueKeju extends Kue {
    constructor() {
        super()
        this.matang = 35
    }
}

class Oven {
    constructor() {

    }
    
    masak(jenisKue, lamaMasak) {
        this.kue = jenisKue
        this.lamaMasak = lamaMasak
        // console.log(this.kue);
        switch (this.kue) {
            case "coklat":
                this.kueDimasak = new KueCoklat()
                break;
            case "kacang":
                this.kueDimasak = new KueKacang()
                break;
            case "keju":
                this.kueDimasak = new KueKeju()
                break;
            default:
                console.log(`Maaf kami tidak memproduksi kue ${this.kue}`);
                break;
        }
        // console.log(this.kueDimasak);

        for (let i = 0; i <= this.lamaMasak; i += 5) {
            if (i == 0) {
                console.log(`Kue ${this.kue}, menit ke ${i} : Kue siap dimasak`);
            } else if (i <= this.kueDimasak.matang * 0.7) {
                console.log(`Kue ${this.kue}, menit ke ${i} : Kue masih mentah`);
            } else if (i >= this.kueDimasak.matang * 0.7 && i < this.kueDimasak.matang) {
                console.log(`Kue ${this.kue}, menit ke ${i} : Kue hampir matang`);
            } else if (i == this.kueDimasak.matang) {
                console.log(`Kue ${this.kue}, menit ke ${i} : Kue sudah matang`);
            } else if (i >= this.kueDimasak.matang) {
                console.log(`Kue ${this.kue}, menit ke ${i} : Kue sudah hangus`);
            }
        }
    }
}

console.clear();
let OvenKue = new Oven()
OvenKue.masak("coklat", 45)
OvenKue.masak("keju", 25)
OvenKue.masak("kacang", 30)