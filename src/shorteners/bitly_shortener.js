const axios = require("axios")

module.exports = class BitlyShortener {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    shorten(url) {
        return new Promise((resolve, reject) => {
            axios.post("https://api-ssl.bitly.com/v4/shorten", { long_url: url }, {
                headers: {
                    "Authorization": "Bearer " + this.apiKey,
                    "Content-Type": "application/json"
                }
            })
                .then(result => {
                    resolve(result.data.link)
                })
                .catch(err => reject(err))
        })
    }
}