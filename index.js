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
    constructor(waktu) {
        this.jenisKue = []
        this.waktu = waktu
    }

    newKue(rasa, waktuMatang) {
        this.jenisKue.push(new Kue(rasa, waktuMatang))
    }

    reportStatus() {
        for (var i = 0; i < this.jenisKue.length; i++) {
            let elapsedTime = 0
            let waktu = this.waktu
            while (waktu >= 0) {
                if (elapsedTime < this.jenisKue[i].waktuMatang - 10) {
                    this.jenisKue[i].status = 'mentah'
                    console.log(`Kue ${this.jenisKue[i].rasa},menit ke ${elapsedTime}: ${this.jenisKue[i].status}`)
                } else if (elapsedTime < this.jenisKue[i].waktuMatang - 5) {
                    this.jenisKue[i].status = 'hampir matang '
                    console.log(`Kue ${this.jenisKue[i].rasa},menit ke ${elapsedTime}: ${this.jenisKue[i].status}`)
                } else if (elapsedTime == this.jenisKue[i].waktuMatang) {
                    this.jenisKue[i].status = 'matang'
                    console.log(`Kue ${this.jenisKue[i].rasa},menit ke ${elapsedTime}: ${this.jenisKue[i].status}`)
                } else if (elapsedTime > this.jenisKue[i].waktuMatang + 5) {
                    this.jenisKue[i].status = 'hangus'
                    console.log(`Kue ${this.jenisKue[i].rasa},menit ke ${elapsedTime}: ${this.jenisKue[i].status}`)
                }
                elapsedTime += 5
                waktu -= 5
            }
        }
    }

}
class Kue {
    constructor(rasa, waktuMatang) {
        this.rasa = rasa
        this.status = 'mentah'
        this.waktuMatang = waktuMatang
    }
}
let panggang = new Oven(35)
panggang.newKue('coklat', 20)
panggang.newKue('kacang', 30)
panggang.newKue('keju', 35)
//panggang.newKue('strawberry',40)

console.log(panggang)
panggang.reportStatus();


