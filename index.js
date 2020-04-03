// Answer These Questions:
//
// - What are essential classes?
//   --> class Cookies, class Coklat, class Kacang, class Keju, class Oven
// - What attributes will each class have?
//   --> class Cookies, class Coklat, class Kacang, class Keju memiliki atribut yaitu cakeName dan time
//       class Oven memiliki attribute cookie, cookieTeime, statusCooking
// - What interface will each class provide?
//   --> pada class Oven akan menampilkan status dari namaCake yang sedang diolah oleh method Cooking()
// - How will the classes interact with each other?
//   --> class Cookies merupakan parent dari class Coklat, class Kacang dan class Keju
//       dan class Oven akan mengolah data dari class Coklat, class Kacang dan class Keju yang sudah termasuk class parenntnya
// - Which classes will inherit from others, if any?
//   --> class Coklat, class Kacang, class Keju merupakan inheritance dari class Cookies karena ketiga class tersebut 
//      melakukan extends
//
// Your code here

class Cookies {
    constructor(cakeName, Time) {
        this.cakeName = cakeName
        this.Time = Time
    }
}
class Coklat extends Cookies {
    constructor (cakeName, Time) {
        super(cakeName, Time) 
    }
}
class Kacang extends Cookies {
    constructor (cakeName, Time) {
        super(cakeName, Time)
    }
}
class Keju extends Cookies {
    constructor (cakeName, Time) {
        super(cakeName, Time) 
    }
}
class Oven {
    constructor(cookie, cookieTime) {
        this.cookie = cookie
        this.cookieTime = cookieTime
        this.statusCooking = ''
    }

    Cooking() {
        console.log('\n')
        console.log(`${this.cookie.cakeName} :`)
        for (let i = 5; i <= this.cookieTime; i += 5) {
            if(i === 5) {
                this.statusCooking = 'Mentah'
            } else if (i < this.cookie.Time / 2) {
                this.statusCooking = 'belum matang'
            } else if (i > this.cookie.Time / 2 && i < this.cookie.Time) {
                this.statusCooking = 'hampir matang'
            } else if (i == this.cookie.Time) {
                this.statusCooking = 'matang'
            } else if (i > this.cookie.Time) {
                this.statusCooking = 'hangus'
            } 
            console.log(`${this.cookie.cakeName}, menit ke ${i}: ${this.statusCooking}`);
        }
        console.log(`Status: ${this.cookie.cakeName}, ${this.statusCooking}`);
    }
}

let coklatt = new Coklat('Kue Coklat', 20)
let kacang = new Kacang('Kue Kacang', 30)
let keju = new Keju('Kue Keju', 35) 

let readyToCook = [coklatt, kacang, keju]
for (let i = 0; i < readyToCook.length; i++) {
    let cooking = new Oven(readyToCook[i], 30)    
    cooking.Cooking()
}