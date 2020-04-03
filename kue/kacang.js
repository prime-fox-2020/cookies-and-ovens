const Kue = require('./kue')

class Kacang extends Kue {
    constructor() {
        super()
        this._waktuMatang = 30
    }

    get waktuMatang() {
        return this._waktuMatang
    }
}

module.exports = Kacang