const featuredText = document.querySelectorAll(".nacos-scholar")
featuredText.forEach(text => {
    text.addEventListener("click", () => {
        window.location.href = "/"
    })
})