require('dotenv').config()
const axios = require("axios")
const apiUrl = process.env.API_SERVER_ROUTE


const pingBackend = async (req, res) => {
    try {
        const response = await axios.get(`${apiUrl}`);
        res.json(response.data)
    } catch (error) {
        if (error.response && error.response.data) {
            return error.response.data;
        }
        return undefined;
    }
};

module.exports = { pingBackend }