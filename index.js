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
class Oven {
    static cook(cookTime, cakes) {
        let time = 5
        while (time <= cookTime) {
            for (let i = 0; i < cakes.length; i++) {
                if (time <= cakes[i].doneTime / 4) {
                    console.log(`${cakes[i].name}, menit ke ${time}: ${cakes[i].status}`);
                }
                else if (time < cakes[i].doneTime) {
                    cakes[i].status = 'hampir matang'
                    console.log(`${cakes[i].name}, menit ke ${time}: ${cakes[i].status}`);
                }
                else if (time === cakes[i].doneTime) {
                    cakes[i].status = 'matang (Selesai)'
                    console.log(`${cakes[i].name}, menit ke ${time}: ${cakes[i].status}`);
                }
                else {
                    cakes[i].status = 'hangus'
                    console.log(`${cakes[i].name}, menit ke ${time}: ${cakes[i].status}`);
                    // }
                }
            }
            // Kenaikan waktu per 5 menit
            time += 5
        }
    }
}

class KueCoklat {
    constructor() {
        this.name = "Kue coklat"
        this.doneTime = 20
        this.status = "mentah"
    }
}

class KueKacang {
    constructor() {
        this.name = "Kue kacang"
        this.doneTime = 30
        this.status = "mentah"
    }
}

class KueKeju {
    constructor() {
        this.name = "Kue keju"
        this.doneTime = 35
        this.status = "mentah"
    }
}
// membuat variabel dari Class
let coklat = new KueCoklat()
let kacang = new KueKacang()
let keju = new KueKeju()

// variabel isi array dari Class Baru dilempar ke kelas Oven
let cakes = [coklat, kacang, keju]

Oven.cook(40, cakes)