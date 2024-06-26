const { footer } = require('../components/footer')
const { meta } = require('../components/meta')
const { nacosScholarText } = require('../components/nacos-scholar')
const { searchBoxSection } = require('../components/searchSection')

require('dotenv').config()
const homePageContent = () => {
    return `
    <div class="content-container">
            <div class="center-container">
                    ${nacosScholarText()}
                <div>
                    ${searchBoxSection()}
                    <p>${process.env.PROJECT_DESCRIPTION}</p>
                </div>
            </div>
            <div>
                <div class="server-status">
                        <p id="server-status-text">Server Status:</p>
                        <div class="server-status-indicator"></div>
                </div>
            </div>
            ${footer()}
    </div>
    <script type="module" src="/javascripts/screens/home.js"></script>
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