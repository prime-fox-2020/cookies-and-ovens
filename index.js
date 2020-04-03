// Answer These Questions:
//
// - What are essential classes?
    // oven dan cookies
// - What attributes will each class have?
    // oven: kue dan waktu masak
    // cookies: jenis kue dan waktu masak yang diinginkan
// - What interface will each class provide?
    // oven mempunyai fungsi memasak yang membutuhkan kue dan waktu masak
    // cookies membutuhkan input jenis kue dan waktu masak
// - How will the classes interact with each other?
    // oven butuh cookies sebelum memasak
// - Which classes will inherit from others, if any?
    // oven and cookies
//
//
// Your code here

class Cook {
    constructor(setWaktu) {
        this.seWaktu = setWaktu;
    }

    cook() {
        for (let a = 5; a <= this.setWaktu; a += 5) {
            if (this.waktuMatang - a >= 10) {
                console.log(`Kue ${this.jenisKue}, menit ke: ${a} mentah`);
            } else if (this.waktuMatang - a == 5) {
                console.log(`Kue ${this.jenisKue}, menit ke: ${a} hampir matang`);
            } else if (a == this.waktuMatang) {
                console.log(`Kue ${this.jenisKue}, menit ke: ${a} matang`);
            } else {
                console.log(`Kue ${this.jenisKue}, menit ke: ${a} hangus`);
            }
            
        }
    }
}

class Cookies extends Cook {
    constructor(jenisKue, setWaktu) {
        super(setWaktu);
        this.jenisKue = jenisKue;
        this.setWaktu = setWaktu;
        this.waktuMatang = this.jenis(jenisKue);
    }

    jenis(jenisKue) {
        if (jenisKue == 'coklat') {
            return 20;
        } else if (jenisKue == 'keju') {
            return 35;
        } else if (jenisKue == 'kacang') {
            return 30;
        }
    }


}

let a = new Cookies("coklat", 25); //Input kue apa dan lama memasak
let b = new Cookies("keju", 30);
let c = new Cookies("kacang", 30);
console.log("-----MASAK Coklat, 25 menit-----");
a.cook();
console.log("-----MASAK Keju, 35 menit-----");
b.cook();
console.log("-----MASAK Kacang, 25 menit-----");
c.cook();