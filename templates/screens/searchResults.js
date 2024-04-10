const { footer } = require('../components/footer')
const { meta } = require('../components/meta')
const { nacosScholarText } = require('../components/nacos-scholar')
const { searchBoxSection } = require('../components/searchSection')

require('dotenv').config()
const searchResultsPageContent = (searchQuery) => {
    return `${nacosScholarText()}
            ${searchBoxSection(searchQuery)}
                <div>
                </div>
            ${footer()}
            `
}

const data = (searchQuery) => {
    return {
        title: `${process.env.PROJECT_NAME}`,
        meta: `${meta()}
        <link rel='stylesheet' href='/stylesheets/search-results.css' />
    `,
        content: searchResultsPageContent(searchQuery)
    }
}
module.exports = data