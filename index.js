// Answer These Questions:
//
// - What are essential classes?
// - What attributes will each class have?
// - What interface will each class provide?
// - How will the classes interact with each other?
// - Which classes will inherit from others, if any?
 

class Cookie{
    constructor(waktu){
        this._waktu = waktu
    }

    get waktu(){
        return this._waktu
    }

    set waktu(num){
        this._waktu = num
    }
}

class Cokelat extends Cookie{
    constructor(){
        super(20)
    }
}

class Kacang extends Cookie{
    constructor(){
        super(30)
    }
}

class Keju extends Cookie{
    constructor(){
        super(35)
    }
}

class Oven{
    constructor(){
        this._array = []
    }

    get array(){
        return this._array
    }

    set array(obj){
        this._array = obj
    }
    
    Cook(waktu){
        for (let cake of this._array) {
            for (let i = 5; i <= waktu; i+=5) {
                if(cake._waktu - i == 5){
                    console.log(`Kue ${cake.constructor.name}, menit ke ${i} : hampir matang`)
                }else if(i < cake._waktu){
                    console.log(`Kue ${cake.constructor.name}, menit ke ${i} : mentah`)
                }else if(i == cake._waktu){
                    console.log(`Kue ${cake.constructor.name}, menit ke ${i} : matang`)
                }else if(i > cake._waktu){
                    console.log(`Kue ${cake.constructor.name}, menit ke ${i} : hangus`)
                }
            }  
        }
    }


    rasaKue(rasa) {
        if (rasa == "Kue Cokelat") {
            this._array.push(new Cokelat())
        } else if (rasa == "Kue Kacang") {
            this._array.push(new Kacang())
        } else if (rasa == "Kue Keju") {
            this._array.push(new Keju())
        }
    }
}

let masak = new Oven();
masak.rasaKue("Kue Cokelat")
masak.rasaKue("Kue Kacang")
masak.rasaKue("Kue Keju")
masak.Cook(40)

