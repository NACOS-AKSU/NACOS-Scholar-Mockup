const { footer } = require('../components/footer')
const { meta } = require('../components/meta')
const { nacosScholarText } = require('../components/nacos-scholar')

require('dotenv').config()
const searchResultsPageContent = () => {
    return `${nacosScholarText()}
                <div>
                </div>
            ${footer()}
            `
}

const data = {
    title: `${process.env.PROJECT_NAME}`,
    meta: `${meta()}
        <link rel='stylesheet' href='/stylesheets/home.css' />
    `,
    content: searchResultsPageContent()
}

module.exports = data