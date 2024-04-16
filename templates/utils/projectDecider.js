require('dotenv').config()
const axios = require("axios")
const apiUrl = process.env.API_SERVER_ROUTE
const {screenContent} = require("../components/projectScreenContent")

async function checkProjectExistence(projectId) {
    try {
        const response = await axios.get(`${apiUrl}/projects/${projectId}`);
        return response
    } catch (error) {
        if (error.response && error.response.data) {
            return error.response.data;
        }
        return undefined;
    }
}


async function projectContent(projectId) {
    let content = ``
    const response = await checkProjectExistence(projectId)
    
    if (!response) {
        content += `<div class="info"><p>An Error Occured! #001</p></div>`
        return {title:"Error -",content}
    }

    if(response.isSuccess == false){
        content += `<div class="info"><p>${response.message}</p></div>`
        return {title:"", content}
    }

    content += screenContent(response.data.data)
    return {title:response.data.data.title, content}
}
module.exports = { checkProjectExistence, projectContent }