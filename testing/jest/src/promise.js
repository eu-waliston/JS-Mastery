const axios = require("axios");

function getData(url) {
    return axios.get(url)
}

module.exports = getData;