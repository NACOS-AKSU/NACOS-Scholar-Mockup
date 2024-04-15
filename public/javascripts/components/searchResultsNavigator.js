const searchResultCards = document.querySelectorAll(".search-results-card")
searchResultCards.forEach(card =>{
    card.addEventListener("click", (e)=>{
        console.log(e.target)
        console.log("routng...");
        window.location.href = "/project"
    })
})