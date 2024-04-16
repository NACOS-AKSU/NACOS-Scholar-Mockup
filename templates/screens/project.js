const { footer } = require('../components/footer')
const { meta } = require('../components/meta')
const { nacosScholarText } = require('../components/nacos-scholar')
const { projectContent } = require('../utils/projectDecider')

require('dotenv').config()
const projectPageContent = async (projectId) => {
    let projectContentGotten = await projectContent(projectId)
    return {
        title: projectContentGotten.title,
        content: ` ${nacosScholarText()}
        ${projectContentGotten.content}
        ${footer()}
        `
    }
}

const data = async function (projectId) {
    const projectInformation = await projectPageContent(projectId)
    return {
        title: `${projectInformation.title}${process.env.PROJECT_NAME} `,
        meta: ` ${meta()}
        <link rel='stylesheet' href='/stylesheets/project.css' />
        `,
        content: projectInformation.content
    }
}

module.exports = data