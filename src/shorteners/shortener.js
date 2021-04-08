const axios = require("axios")

module.exports.Shortener = class Shortener {
    constructor(shortener) {
        this.shortener = shortener
    }

    shorten(longLink) {
        return new Promise((resolve, reject) => {
            const shortener = this.shortener
            axios.post("https://shawty-backend.herokuapp.com/shorten", { link: longLink, shortener: shortener })
                .then(result => {
                    resolve(result.data.shortened)
                })
                .catch(err => reject(err))
        })
    }
}