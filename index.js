// Answer These Questions:
//
// - What are essential classes?
// Kue, Coklat, Kacang, Keju
// - What attributes will each class have?
// waktuMemanggang, waktuRealTime, statusKue
// - What interface will each class provide?
// - How will the classes interact with each other?
// - Which classes will inherit from others, if any?
// Kue is the Parents of Coklat, Kacang, Keju
//
//
// Your code here

class Kue{
  constructor(waktuPanggang){
    this._waktuPanggang = waktuPanggang;
    this._statusKematangan = "mentah";
  }
  //getter
  get waktuPanggang(){
    return this._waktuPanggang;
  }
  get statusKematangan(){
    return this._statusKematangan;
  }
  //setter
  set waktuPanggang(val){
    this._waktuPanggang = val;
  }
  set statusKematangan(val){
    this._statusKematangan = val;
  }
}

class Coklat extends Kue{
  constructor(){
    super(20);
  }
}
class Kacang extends Kue{
  constructor(){
    super(30);
  }
}
class Keju extends Kue{
  constructor(){
    super(35);
  }
}

class Oven{
  constructor(){
    this._kue = [];
  }
  get kue(){
    return this._kue;
  }
  set kue(val){
    this._kue = val;
  }
  //method
  bake(lamaCooking){
    for(let cake of this.kue){
      for(let i = 5; i <= lamaCooking; i += 5){
        if(i > cake.waktuPanggang){
          cake.statusKematangan = "hangus";
        }else if(i === cake.waktuPanggang){
          cake.statusKematangan = "matang";
        }else if(i + 5 === cake.waktuPanggang){
          cake.statusKematangan = "hampir matang";
        }else if(i === cake.waktuPanggang * 2){
          cake.statusKematangan = "abu";
        }else cake.statusKematangan = "mentah";
        console.log(`Kue ${cake.constructor.name}, menit ke ${i} : ${cake.statusKematangan}`);
      }
      console.log("-------------------------------------");
    }
  }
  
  inputCake(cake){
    switch(cake){
      case "Kue Coklat":
        this.kue.push(new Coklat());
        break;
      case "Kue Kacang":
        this.kue.push(new Kacang());
        break;
      case "Kue Keju":
        this.kue.push(new Keju());
        break;
    }
  }


  //Just for Fun
  showCakes(){
    console.log("--------------All Cakes---------------");
    for(let cake of this.kue){
      console.log(`Kue ${cake.constructor.name} | kematangan: ${cake.statusKematangan}`);
    }
  }
  showOverCooked(){
    console.log("--------------Hangus---------------");
    for(let cake of this.kue){
      if(cake.statusKematangan === "hangus"){
        console.log(`Kue ${cake.constructor.name} | kematangan: ${cake.statusKematangan}`);
      }
    }
  }
  showUnderCooked(){
    console.log("--------------Mentah---------------");
    for(let cake of this.kue){
      if(cake.statusKematangan === "mentah"){
        console.log(`Kue ${cake.constructor.name} | kematangan: ${cake.statusKematangan}`);
      }
    }
  }
  showWellCooked(){
    console.log("--------------Matang---------------");
    for(let cake of this.kue){
      if(cake.statusKematangan === "matang"){
        console.log(`Kue ${cake.constructor.name} | kematangan: ${cake.statusKematangan}`);
      }
    }
  }
}


const oven = new Oven();
oven.inputCake("Kue Coklat");
oven.inputCake("Kue Kacang");
oven.inputCake("Kue Keju");

oven.bake(25);

oven.showCakes();

// oven.showOverCooked();
// oven.showUnderCooked();
// oven.showWellCooked();