// Answer These Questions:
//
// - What are essential classes?
// - What attributes will each class have?
// - What interface will each class provide?
// - How will the classes interact with each other?
// - Which classes will inherit from others, if any?
//
//
// Your code here
class Kue {
    constructor(waktu, target, rasa){
        this.waktu=waktu
        this.target=target
        this.rasa=rasa
    }
    proses(cek){
        let time =0
        let cook=''
        do {
            time+=cek
            if(time<=(0.5*this.waktu)){
                cook='mentah'
            }else if (time>=(0.5*this.waktu)&&time<this.target){
                cook='hampir matang'
            }else if (time==this.target){
                cook='matang'
            }else if (time>this.target){
                cook='hangus'
            }
            if(this.rasa==undefined){
                console.log(`Kue ini , menit ke-${time} : ${cook}`)
            }else{
                console.log(`Kue ${this.rasa}, menit ke-${time} : ${cook}`)
            }
        } while (time<this.waktu);
    }
}

class Coklat extends Kue{
    constructor(waktu,target,rasa){
        super(waktu,target,rasa)
    }
}

class Kacang extends Kue{
    constructor(waktu,target,rasa){
        super(waktu,target,rasa)
    }
}

class Keju extends Kue {
    constructor(waktu,target,rasa){
        super(waktu,target,rasa)
    }
}

const coklat= new Coklat(25,20,'coklat')
coklat.proses(5)


const kacang= new Kacang(35,30,'kacang')
kacang.proses(5)

const keju= new Keju(40,35,'keju')
keju.proses(5)