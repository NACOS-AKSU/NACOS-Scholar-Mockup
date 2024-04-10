require('dotenv').config()
const axios = require("axios")
const apiUrl = process.env.API_SERVER_ROUTE


const searchProjects = async (route, postData)=>{
    try {
        const response = await axios.post(`${apiUrl}${route}`, postData)
        return response.data
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {searchProjects}