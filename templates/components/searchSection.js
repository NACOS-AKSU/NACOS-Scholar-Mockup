const searchBoxSection = (searchQuery) => {
    return `<div class="search-box-section">
                <form method="GET" action="/search">
                    <input type="text" class="primary-input" name="query" value="${searchQuery ? searchQuery : ""}" placeholder="Search by title, keywords or supervisor"/>
                    <button class="btn btn-primary">Search</button>
                </form>
            </div>`
}

module.exports = { searchBoxSection }