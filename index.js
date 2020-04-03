// Answer These Questions:
//
// - What are essential classes? : Kue, Cokelat, Kacang, Keju, Oven
// - What attributes will each class have? Kue : status, Derived/Child kue : waktuMatang, Oven: isiOven, dan beberapa method
// - What interface will each class provide? I'm not sure I get the question, maybe their properties.
// - How will the classes interact with each other? Using extends keyword
// - Which classes will inherit from others, if any? Cokelat, Kacang, Keju inhertis ke Kue
//
//
// Your code here
const Cokelat = require('./kue/cokelat')
const Kacang = require('./kue/kacang')
const Keju = require('./kue/keju')
const Oven = require('./oven')

let cokelat = new Cokelat()
let kacang = new Kacang()
let keju = new Keju()

let oven = new Oven()

oven.masukkanKue(cokelat, kacang, keju)
oven.masak(40)

let nampan1 = oven.keluarkanKue()

console.log(`\n isi nampan1 : `, nampan1, '\n');