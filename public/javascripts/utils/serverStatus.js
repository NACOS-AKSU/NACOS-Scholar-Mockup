const indicator = document.querySelector(".server-status-indicator")
const indicatorText = document.getElementById("server-status-text")

export async function pingApi() {
    try {
        const response = await fetch("/ping-api")
        const data = await response.json()
        if (data.isSuccess == true) {
            indicator.style = "background-color:#5cb85c"
            return
        }
        indicator.style = "background-color:#f0ad4e"
    } catch (error) {
        console.log(error);
        indicator.style = "background-color:#d9534f"
    }
}
