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

class Cake{
    constructor(flavour, time){
        this._flavour = flavour
        this._timeCooked = time
        this._cooking = 0
        this._cooked = false
        this._inOven = false
        this._batter = false
    }

    get flavour(){
        return this._flavour
    }
    get timeCooked(){
        return this._timeCooked
    }
    get cooking(){
        return this._cooking
    }
    get cooked(){
        return this._cooked
    }
    get inOven(){
        return this._inOven
    }
    get batter(){
        return this._batter
    }
    
    set flavour(val){
        this._flavour = val
    }
    set timeCooked(val){
        this._timeCooked = val
    }
    set cooking(val){
        this._cooking = val
    }
    set cooked(val){
        this._cooked = val
    }
    set inOven(val){
        this._inOven = val
    }
    set batter(val){
        this._batter = val
    }

    makeBatter(){
        if(this.flavour !== undefined){
            this.batter = true
            console.log(`Oh look! Your ${this.flavour} flavoured cake batter looks delicious! Now put it in the oven.`)
        } else {
            console.log("But how about the flavour? There's nothing called 'Flavourless Cake'!")
        }
    }

    toOven(){
        if(this.batter === true){
            this.inOven = true
            console.log('Now all set! lets bake your cake!')
        } else {
            console.log('make the batter first!')
        }
    }

    baking(timer){
        if(timer % 5 !== 0){
            return console.log('Please set the time with a multiple of 5')
        } else if(timer === undefined){
            return console.log('Please set the time')
        }
        if(this.inOven === true && this.timeCooked !== undefined){
            let conditions = this.timeCooked/3
            for(let a = 0; a <= timer; a += 5){
                if(a <= conditions){
                    console.log(`${this.flavour} cake, Minute: ${a} | Not yet! Still uncooked`)
                } else if(a <= conditions*2){
                    console.log(`${this.flavour} cake, Minute: ${a} | Half cooked!`)
                } else if(a < this.timeCooked){
                    console.log(`${this.flavour} cake, Minute: ${a} | Nearly done!`)
                } else if(a === this.timeCooked){
                    console.log(`${this.flavour} cake, Minute: ${a} | Aaaaaand its done!`)
                } else if(a > this.timeCooked){
                    console.log(`${this.flavour} cake, Minute: ${a} | The Cake is burning! Someone call the Firefighter!`)
                }
            }
        } else {
            console.log('Put the cake batter into the oven first')
        }
    }
}

class ChocolateCake extends Cake{
    constructor(){
        super()
        this._flavour = 'Chocolate'
        this._timeCooked = 20
    }

    makeBatter(){
        super.makeBatter()
    }

    toOven(){
        super.toOven()
    }

    baking(timer){
        super.baking(timer)
    }
}

class PeanutCake extends Cake{
    constructor(){
        super()
        this._flavour = 'Peanut'
        this._timeCooked = 30
    }

    makeBatter(){
        super.makeBatter()
    }

    toOven(){
        super.toOven()
    }

    baking(timer){
        super.baking(timer)
    }
}

class CheeseCake extends Cake{
    constructor(){
        super()
        this._flavour = 'Cheese'
        this._timeCooked = 35
    }

    makeBatter(){
        super.makeBatter()
    }

    toOven(){
        super.toOven()
    }

    baking(timer){
        super.baking(timer)
    }
}

let chocoCake = new CheeseCake()
chocoCake.makeBatter()
chocoCake.toOven()
chocoCake.baking(40)