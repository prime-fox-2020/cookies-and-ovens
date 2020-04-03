// kue coklat 20
// kue kacang 30
// kue keju 35

class Kue {
    constructor(kue,menit){
    /// tambahin parameter nama kue
        this.kue = kue
        this.menit = menit
        this.status = "mentah";
    }

    kondisisemuakue(){
        let semuakue = [newKue1,newKue2,newKue3]
        return semuakue

    }
}

class Coklat extends Kue {
    constructor(kue,menit){
        super(kue,menit)
    }
}

class Kacang extends Kue {
    constructor(kue,menit){
        super(kue,menit)
    }
}

class Keju extends Kue{
    constructor(kue,menit){
        super(kue,menit)
    }
}

class Oven {
    constructor(kue,timer){
        this.kue = kue
        this.timer = timer
        this.statusOven = ''

    }
    masakKue() {
        console.log(`\nOven Sedang memasak ${this.kue.kue}, ${this.kue.status}`);
        console.log(`waktu matang ${this.kue.menit} menit`)
        for (let i = 0; i <= this.timer; i += 5) {
            if (i < this.kue.menit / 2) {
                this.statusOven = 'masih mentah'
                console.log(`- Menit ${i}: ${this.statusOven}`);
            } else if (i > this.kue.menit / 2 && i < this.kue.menit) {
                this.statusOven = 'hampir matang'
                console.log(`- Menit ${i}: ${this.statusOven}`);
            } else if (i == this.kue.menit) {
                this.statusOven = 'matang'
                console.log(`- Menit ${i}: ${this.statusOven}`);
            } else if (i > this.kue.menit) {
                this.statusOven = 'gosong'
                console.log(`- Menit ${i}: ${this.statusOven}`);
            } 
        }
        this.kue.status = this.statusOven
        console.log(`Status: ${this.kue.kue}, ${this.kue.status}`);

    }
}


let timer = Number(process.argv.slice(2,10))

const newkue = new Kue()
const newCoklat = new Coklat("kue coklat",20)
const newKacang = new Kacang("kue kacang",30)
const newKeju = new Keju("kue keju",35)

let ovenreport = [newCoklat,newKacang,newKeju]

if(timer == [] || timer < 20){
    console.log(`masukin command minimal 20, contoh index.js 20`)
}else{
    ovenreport.forEach(el => {
        const newOven = new Oven(el,timer)
        newOven.masakKue()
    });
}

