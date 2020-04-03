// Answer These Questions:
//
// - What are essential classes? 
//      Kelas Kue dan inherit dari kelas Kue yaitu Cokelat, Kacang, dan Keju
// - What attributes will each class have? 
//      Matang (berapa menit untuk kue matang)
// - What interface will each class provide? 
//      Di kelas parent Kue, memiliki method cook()
//      yang berfungsi menampilkan proses pematangan kue
// - How will the classes interact with each other?
//      Interaksi sebagai parent dan child, dan juga menggunakan konsep polymorph
// - Which classes will inherit from others, if any?
//      Kelas kue mewariskan ke kelas Cokelat, Kacang dan Keju 
//      yang memiliki penambahan atribut name dan memiliki method cook()
//
//
// Your code here
class Kue {

    constructor(minute) {
        this._matang = minute;
    }

    get matang() {
        return this._matang;
    }

    cook(name, minute) {
        let timer = 5;
        let kondisi = '';
        while (timer <= minute) {
            if (timer < this.matang / 2) kondisi = 'mentah';
            else if (timer < this.matang * 3 / 4) kondisi = 'setengah matang';
            else if (timer <= this.matang * 4 / 5) kondisi = 'hampir matang';
            else if (timer == this.matang) kondisi = 'matang sempurna';
            else if (timer > this.matang * 4 / 5 && minute < this.matang * 5 / 4) kondisi = 'matang';
            else kondisi = 'hangus';

            console.log(`Kue ${name} | menit ke ${timer} : ${kondisi}`);
            timer += 5;            
        }
        console.log(`------------- Kue Selesai -------------`);
        console.log(`Kue ${name} | dimasak ${minute} menit | kondisi : ${kondisi}`);
    }

}

class Cokelat extends Kue {

    constructor() {
        super(20)
        this._name = 'cokelat';
    }

    get name() {
        return this._name;
    }

    cook(minute) {
        super.cook(this.name, minute);
    }

}

class Kacang extends Kue {

    constructor() {
        super(30)
        this._name = 'kacang';
    }

    get name() {
        return this._name;
    }

    cook(minute) {
        super.cook(this.name, minute);
    }
    
}

class Keju extends Kue {

    constructor() {
        super(35)
        this._name = 'keju';
    }

    get name() {
        return this._name;
    }

    cook(minute) {
        super.cook(this.name, minute);
    }
    
}

const cokelat = new Cokelat();
const kacang = new Kacang();
const keju = new Keju();

cokelat.cook(25);
console.log();
kacang.cook(28);
console.log();
keju.cook(35);
