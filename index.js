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
	constructor(bakingTime) {
		this._bakingTime = bakingTime;
		this._wellDoneCon = 'mentah';
	}
	//getter
	get bakingTime() {
		return this._bakingTime;
	}
	get wellDoneCon() {
		return this._wellDoneCon;
	}
	//setter
	set wellDoneCon(str) {
		this._wellDoneCon = str;
	}
	set bakingTime(num) {
		this._bakingTime = num;
	}
}

class Coklat extends Kue {
	constructor() {
		super(20);
	}
}

class Kacang extends Kue {
	constructor() {
		super(30);
	}
}

class Keju extends Kue {
	constructor() {
		super(35);
	}
}

class Oven {
	constructor() {
		this._kotakKue = [];
	}

	get kotakKue() {
		return this._kotakKue;
	}

	set kotakKue(arr) {
		this._kotakKue = arr;
	}

	//method

	bake(cookingDuration) {
		for (let kue of this._kotakKue) {
			for (let i = 5; i <= cookingDuration; i += 5) {
				if (i > kue.bakingTime) {
					kue.wellDoneCon = 'hangus';
				} else if (i === kue.bakingTime) {
					kue.wellDoneCon = 'matang';
				} else if (i + 5 === kue.bakingTime) {
					kue.wellDoneCon = 'hampir matang';
				} else {
					kue.wellDoneCon = 'mentah';
				}
				console.log(`Kue ${kue.constructor.name}, menit ke ${i} : ${kue.wellDoneCon}`);
			}
			console.log('-------------------------------');
		}
	}
	masukkanKue(cake) {
		if (cake === 'Kue Coklat') {
			this.kotakKue.push(new Coklat());
		} else if (cake ==='Kue Kacang') {
			this.kotakKue.push(new Kacang());
		} else if (cake === 'Kue Keju') {
			this.kotakKue.push(new Keju());
		}
	}
}

const oven = new Oven();
oven.masukkanKue('Kue Kacang');


oven.masukkanKue('Kue Coklat');


oven.masukkanKue('Kue Keju');

oven.bake(35);
