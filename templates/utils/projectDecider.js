require('dotenv').config()
const axios = require("axios")
const apiUrl = process.env.API_SERVER_ROUTE

async function checkProjectExistence(projectId){
    try {
        const response = await axios.get(`${apiUrl}/projects/${projectId}`);
        res.json(response.data)
    } catch (error) {
        if (error.response && error.response.data) {
            return error.response.data;
        }
        return undefined;
    }
}

module.exports = {checkProjectExistence}