require('dotenv').config()
const axios = require("axios")
const apiUrl = process.env.API_SERVER_ROUTE


const pingBackend = async (req, res) => {
    try {
        console.log("Pinging...");
        const response = await axios.get(`${apiUrl}`);
        console.log(`Request Response: ${response}`);
        const data = response.data
        console.log(data);
        res.json(data)
    } catch (error) {
        if (error.response && error.response.data) {
            return error.response.data;
        }
        return undefined;
    }
};

module.exports = { pingBackend }