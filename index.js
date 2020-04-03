// kue coklat 20
// kue kacang 30
// kue keju 35

class Kue {
    constructor(menitan){
    /// tambahin parameter nama kue
        this.kue=""
        this.menit = menitan
        this.status = "";
    }

    kondisisemuakue(){
        let semuakue = [newKue1,newKue2,newKue3]
        return semuakue

    }
}

class Coklat extends Kue {
    constructor(){
        super(20)
    }
}

class Kacang extends Kue {
    constructor(a){
        super(a)
    }
}

class Keju extends Kue{
    constructor(a){
        super(a)
    }
}

class Oven {
    constructor(Kue){
        this.cake = Kue
    }
    bake(menit){
        for(var i = 0 ; i<menit ; i+=5){
            console.log(`Kue ${this.cake}, menit ke ${i}, `)
        }

    }
}


let command = Number(process.argv.slice(2,10))
let menitan = command

const newkue = new Kue(menitan)
const newKue1 = new Kue1(menitan)
const newKue2 = new Kue2(menitan)
const newKue3 = new Kue3(menitan)


if(menitan < 5){
    console.log("Masukan Value Menit diatas 5 menit ; ex = <node index.js 6>")
} else {
    console.log(newkue.kondisisemuakue())
}



// console.log(newkue)