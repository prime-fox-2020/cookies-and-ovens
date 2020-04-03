const Kue = require('./kue')

class Keju extends Kue {
    constructor() {
        super()
        this._waktuMatang = 35
    }

    get waktuMatang() {
        return this._waktuMatang
    }
}

module.exports = Keju