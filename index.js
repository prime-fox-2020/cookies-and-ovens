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
    constructor(namaKue) {
        this.kue = namaKue
    }

    cook() {
        if (this.kue === 'coklat') {
            let cookTime = 20
            for(let i = 0; i <= cookTime; i+=5) {
                if(i === cookTime){
                    console.log(`Kue ${this.kue}, menit ke ${i} : matang`)
                    console.log(`Kue ${this.kue}, menit ke ${i+5} : hangus`)
                } else if(i === cookTime-5){
                    console.log(`Kue ${this.kue}, menit ke ${i} : hampir matang`)
                } else{
                    console.log(`Kue ${this.kue}, menit ke ${i} : mentah`)
                }
            }

        }
        else if (this.kue === 'kacang') {
            let cookTime = 30
            for(let i = 0; i <= cookTime; i+=5) {
                if(i === cookTime){
                    console.log(`Kue ${this.kue}, menit ke ${i} : matang`)
                    console.log(`Kue ${this.kue}, menit ke ${i+5} : hangus`)
                } else if(i === cookTime-5){
                    console.log(`Kue ${this.kue}, menit ke ${i} : hampir matang`)
                } else{
                    console.log(`Kue ${this.kue}, menit ke ${i} : mentah`)
                }
            }
        }
        else if (this.kue === 'keju') {
            let cookTime = 35
            for(let i = 0; i <= cookTime; i+=5) {
                if(i === cookTime){
                    console.log(`Kue ${this.kue}, menit ke ${i} : matang`)
                    console.log(`Kue ${this.kue}, menit ke ${i+5} : hangus`)
                } else if(i === cookTime-5){
                    console.log(`Kue ${this.kue}, menit ke ${i} : hampir matang`)
                } else{
                    console.log(`Kue ${this.kue}, menit ke ${i} : mentah`)
                }
            }
        }
    }
}

let kue = new Kue('keju')
kue.cook()
// console.log(kue)
