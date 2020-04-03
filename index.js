// Answer These Questions:
//
// - What are essential classes? Easy to manage many properties that it has  
// - What attributes will each class have? name, time, status
// - What interface will each class provide? Cookie and Ovens
// - How will the classes interact with each other? using aggregation
// - Which classes will inherit from others, if any? i got no inherit classes
//
//
// Your code here

class Cookie{
    // class cookie as cookie's name
    constructor(name){
        this.name = name
    }
}

class Ovens{
    // accept name from Class cookie
    constructor(time, nameCookie){
        this.name = nameCookie
        this.time  = time
        this.status = this.cookingStatus()
    }

    // get per 5 minutes time
    timeDivide(){
        let divide = [];

        for (let i = 5; i < this.time + 10; i += 5) {
            divide.push(i);
        }
        return divide;
    }
    
    // get the display form test code save to array
    cookingStatus(){
        const time = this.time, name = this.name, timeDivide = this.timeDivide();
        let data = [];

        for(let i = 0; i < timeDivide.length; i++){
            if(timeDivide[i] == time - 5){
                data.push(`${name.name}, menit ke ${timeDivide[i]} : hampir matang`);
            }else if(timeDivide[i] < time){
                data.push(`${name.name}, menit ke ${timeDivide[i]} : mentah`);
            }else if(timeDivide[i] == time){
                data.push(`${name.name}, menit ke ${timeDivide[i]} : matang`);
            }else{
                data.push(`${name.name}, menit ke ${timeDivide[i]} : hangus`);
            }
        }
        return data;
    }
}

// declaring cookie info and display the result
function display(){
    const cookieInfo = [{
        nama: 'Kue Coklat',
        waktu: 20   
    },
    {
        nama: 'Kue Kacang',
        waktu: 30
    },
    {
        nama: 'Kue Keju',
        waktu: 35
    },{
        nama: 'Kue Stroberi',
        waktu: 10
    }
    ];
    let result = [];

for(let i = 0; i < cookieInfo.length; i++){
    const name = new Cookie(cookieInfo[i].nama);
    const time = new Ovens(cookieInfo[i].waktu, name); // Agregation
    result.push(time.status);
}
for (let i = 0; i < result.length; i++) {
    console.log(`--------${cookieInfo[i].nama}--------`);
    for (let j = 0; j < result[i].length; j++) {
        console.log(result[i][j], '\n');
    }
}
}

// display terminal
display();