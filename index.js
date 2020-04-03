/*Answer These Questions:
- What are essential classes?
    Class parent yang digunakan adalah class Kue
    Sedangkan Class child yang digunakan adalah class Kue yang diberikan rasa misalkan KueCoklat
    Class bahan untuk menyimpan rasa yang digunakan dari class child kue
- What attributes will each class have?
    Class Kue hanya akan memiliki atribut lama panggang yaitu bakingTime
    Class child Kue yang diberikan rasa akan memiliki atribut tambahan flavor dimana hal ini akan dikontruksi dengan konsep composition dengan instance dari class Bahan
- What interface will each class provide?
    Class memiliki method untuk mengecek progress pangang kue dengan input parameter interval pengecekan yang diinginkan, interval ini sebaiknya merupakan kelipatan
    dari bakingTime untuk memastikan bahwa saat kue sudah matang pada menit yang sama dengan inputan lama kue untuk dipanggang
- How will the classes interact with each other?
    class Kue akan bertindak sebagai parent dari class KueRasa lainnya. class child KueRasa akan bergantung pada class Bahan
- Which classes will inherit from others, if any?
    class KueRasa inherit dari class Kue
*/

/*RELEASE 0 - 1 */

// class Kue{
//     constructor(bakingTime, lamaBaking){
//         this.bakingTime = bakingTime
//         this.lamaBaking = lamaBaking
//     }
//     bakingProgress(interval){
//         let time = 0
//         let status
//         while(time < this.lamaBaking){
//             time += interval
//             //Asumsi bahwa status kue hampir matang saat waktu panggang telah melebih 2/3 dari waktu kue seharusnya matang
//             if(time <=  2/3*this.bakingTime) status = 'mentah'
//             else if(time >= 2/3*this.bakingTime && time < this.bakingTime) status = 'hampir matang' 
//             else if(time === this.bakingTime) status = 'matang'
//             else status = 'hangus'
//             if(this.flavor == undefined){
//                 console.log(`Kue biasa, menit ke-${time} : ${status}`)
//             }
//             else{
//                 console.log(`Kue ${this.flavor.rasa}, menit ke-${time} : ${status}`)
//             }
//         }
//     }
// }
// class KueCoklat extends Kue{
//     constructor(bakingTime, lamaBaking, flavor){
//         super(bakingTime, lamaBaking)
//         this.flavor = new Bahan('cokelat')
//     }
// }
// class KueKacang extends Kue{
//     constructor(bakingTime, lamaBaking, flavor){
//         super(bakingTime, lamaBaking)
//         this.flavor = new Bahan('kacang')
//     }
// }
// class KueKeju extends Kue{
//     constructor(bakingTime, lamaBaking, flavor){
//         super(bakingTime, lamaBaking)
//         this.flavor = new Bahan('keju')
//     }
// }
// class Bahan{
//     constructor(rasa){
//         this.rasa = rasa
//     }
// }

// let kueCoklat = new KueCoklat(20, 25)
// kueCoklat.bakingProgress(5)
// console.log('\n')

// let kueKacang = new KueKacang(25, 30)
// kueKacang.bakingProgress(5)
// console.log('\n')

// let kueKeju = new KueKeju(30, 35)
// kueKeju.bakingProgress(5)


/* RELEASE 2 
    Refactor code di atas dengan satu kelas dengan menggunakan static method dari kelas Kue dengan menerima input flavor
*/
class Kue{
    constructor(bakingTime, lamaBaking, flavor){
        this.bakingTime = bakingTime
        this.lamaBaking = lamaBaking
        this.flavor = flavor
    }
    bakingProcess(interval){
        let time = 0
        let status
        while(time < this.lamaBaking){
            time += interval
            //Asumsi bahwa status kue hampir matang saat waktu panggang telah melebih 2/3 dari waktu kue seharusnya matang
            if(time <=  2/3*this.bakingTime) status = 'mentah'
            else if(time >= 2/3*this.bakingTime && time < this.bakingTime) status = 'hampir matang' 
            else if(time === this.bakingTime) status = 'matang'
            else status = 'hangus'
            if(this.flavor == undefined){
                console.log(`Kue biasa, menit ke-${time} : ${status}`)
            }
            else{
                console.log(`Kue ${this.flavor}, menit ke-${time} : ${status}`)
            }
        }
    }
    static bakingCakeWithFlavor(bakingTime, flavor){
        return new Kue(bakingTime, flavor)
    }
}

Kue.bakingCakeWithFlavor(20,25,'coklat').bakingProcess(5)
console.log('\n')
Kue.bakingCakeWithFlavor(25,30,'kacang').bakingProcess(5)
console.log('\n')
Kue.bakingCakeWithFlavor(30,35,'keju').bakingProcess(5)