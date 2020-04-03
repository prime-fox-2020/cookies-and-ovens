const Kue = require('./kue')

class Cokelat extends Kue {
    constructor() {
        super()
        this._waktuMatang = 20
    }

    get waktuMatang() {
        return this._waktuMatang
    }
}

module.exports = Cokelat