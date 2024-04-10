const searchBoxSection = () => {
    return `<div class="search-box-section">
                <form method="GET" action="/search">
                    <input type="text" class="primary-input" name="query"/>
                    <button class="btn btn-primary">Search</button>
                </form>
            </div>`
}

module.exports = {searchBoxSection}