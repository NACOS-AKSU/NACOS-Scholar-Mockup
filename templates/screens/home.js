const { footer } = require('../components/footer')
const { meta } = require('../components/meta')
const { nacosScholarText } = require('../components/nacos-scholar')
const { searchBoxSection } = require('../components/searchSection')

require('dotenv').config()
const homePageContent = () => {
    return `<div class="center-container">
                    ${nacosScholarText()}
                    <div>
                    ${searchBoxSection()}
                    <p>${process.env.PROJECT_DESCRIPTION}</p>                
                </div>
            </div>
            <div class="server-status">
                <p>Server Status</p>
                <div class="server-status-indicator"></div>
            </div>
            ${footer()}
            <script type="module" src="/javascripts/serverStatus.js"></script>
            `
}

const data = {
    title: `${process.env.PROJECT_NAME}`,
    meta: ` ${meta()}   
            <link rel='stylesheet' href='/stylesheets/home.css' />
    `,
    content: homePageContent()
}

module.exports = data