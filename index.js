// Answer These Questions:
//
// - What are essential classes? Cookies, KueCoklat, KueKacang, KueKeju, and Oven
// - What attributes will each class have? Cookies = name; KueCoklat = name, time; KueKacang = name, time; KueKeju = name, time; and Oven = cookie, time, status
// - What interface will each class provide? class Oven mempunyai method timeDevide() dan cooking()
// - How will the classes interact with each other? class Cookies menjadi parent dari class KueCoklat, class KueKacang, dan class KueKeju; dan diolah di Oven.  
// - Which classes will inherit from others, if any? class KueCoklat, class KueKacang, dan class KueKeju inherit ke class Cookies
//
//
// Your code here

class Cookies {
    constructor(name){
        this.name = name
    }
}

class KueCoklat extends Cookies{
    constructor(name, time = 20){
        super(name)
        this.time = time
    }
}

class KueKacang extends Cookies{
    constructor(name, time = 30){
        super(name)
        this.time = time
    }
}


class KueKeju extends Cookies{
    constructor(name, time = 35){
        super(name)
        this.time = time
    }
}

class Oven {
    constructor(cookie, time, status = ''){
        this.cookie = cookie
        this.time = time
        this.status = status
    }

    timeDivide(){
        let divide = [];

        for (let i = 5; i < this.time + 5; i += 5) {
            divide.push(i);
        }
        return divide;
    }

    cooking() {        
        let timeDivide = this.timeDivide()
        for (let i = 0; i < timeDivide.length; i++) {
            if (timeDivide[i] == this.cookie.time - 5) {
                this.status = 'hampir matang'
                console.log(`${this.cookie.name}, menit ke ${timeDivide[i]} : ${this.status}`);
            }else if(timeDivide[i] < this.cookie.time){
                this.status = 'mentah'
                console.log(`${this.cookie.name}, menit ke ${timeDivide[i]} : ${this.status}`);
            }else if(timeDivide[i] == this.cookie.time){
                this.status = 'matang'
                console.log(`${this.cookie.name}, menit ke ${timeDivide[i]} : ${this.status}`);
            }else{
                this.status = 'hangus'
                console.log(`${this.cookie.name}, menit ke ${timeDivide[i]} : ${this.status}`);
            }
        }
        this.cookie.cooked = this.status
        console.log(`Status: ${this.cookie.name}, ${this.cookie.cooked}`);
    }
}

let kueCoklat = new KueCoklat('Kue Coklat')
let kueKacang = new KueKacang('Kue Kacang')
let kueKeju = new KueKeju('Kue Keju') 

let coklatOven = new Oven(kueCoklat, 30)
coklatOven.cooking()

let kacangOven = new Oven (kueKacang, 30)
kacangOven.cooking()

let kejuOven = new Oven(kueKeju, 30)
kejuOven.cooking()

