const { footer } = require('../components/footer')
const { meta } = require('../components/meta')
const { nacosScholarText } = require('../components/nacos-scholar')

require('dotenv').config()
const homePageContent = (projectId) => {
    console.log(projectId);
    return ` ${nacosScholarText()}

            ${footer()}
            `
}

const data = async function (projectId) {
    return {
        title: `${process.env.PROJECT_NAME} `,
        meta: ` ${meta()}
    <link rel='stylesheet' href='/stylesheets/home.css' />
    `,
        content: homePageContent(projectId)
    }
}

module.exports = data