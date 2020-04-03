/*
// Answer These Questions:
//
// - What are essential classes?
        Class yang dibutuhkan ada 4, yaitu 1 class utama bernama kue, dan 3 class inherit/child
// - What attributes will each class have?
        Attribut yang dimiliki setiap class adalah nama kue, durasi masak, dan waktu matang
// - What interface will each class provide?
        Class kue memiliki methode cook, methode ini akan berjalan 1x setiap objek memanggil metode ini.
        Output metode ini bergantung dari apakah waktu memasak melebihi waktu yang ditentukan atau tidak
// - How will the classes interact with each other?
        Class kue bertindak dengan menjadi class parent dari ketiga class
// - Which classes will inherit from others, if any?
        Class yang menjadi inheritance adalah kelas kue coklat, kue kacang, dan kue keju

    Class utama adalah kue dengan 
      - attribut : 
        - nama kue, durasi masak, waktu matang
      - method :
        - masak
    Class inherit adalah kue coklat, kue kacang dan kue keju
    
*/
// Your code here

'use strict'

class Cookie{
    constructor(name, timeDur, timeCook){
        this._name = name
        this._time = 0
        this._timeDur = timeDur
        this._timeCook = timeCook
    }

    get name(){
        return this._name
    }
    get time(){
        return this._time
    }
    get timeDur(){
        return this._timeDur
    }
    get timeCook(){
        return this._timeCook
    }

    cook(){
        this._time += this._timeDur
        if (this._time <= this._timeDur*3){
            console.log(`${this._name}, menit ke ${this._time} : mentah`)
        } 
        else if (this._time <= (this._timeCook - this._timeDur)){
            console.log(`${this._name}, menit ke ${this._time} : hampir matang`)
        }
        else if (this._time == this._timeCook){
            console.log(`${this._name}, menit ke ${this._time} : matang`)
        } 
        else if (this._time > this._timeCook){
            console.log(`${this._name}, menit ke ${this._time} : gosong`)
        }
    }
}

class Chocolate extends Cookie{
    constructor(name, timeDur, timeCook){
        super (name, timeDur, timeCook) 
    }
}

class Cheese extends Cookie{
    constructor(name, timeDur, timeCook){
        super (name, timeDur, timeCook)
    }
}

class Nut extends Cookie{
    constructor(name, timeDur, timeCook){
        super(name, timeDur, timeCook)
    }
}

let kueCoklat = new Chocolate('kue coklat',4,20)

for (let a = 0; a<6; a++){
    kueCoklat.cook()
}

let kueKacang = new Nut('kue kacang',3,15)

for (let a = 0; a<6; a++){
    kueKacang.cook()
}