function getAnActivity() {
    const activityEle = document.getElementById("activity")
    const typeEle = document.getElementById("type")
    const participantsEle = document.getElementById("participant")
    const priceEle = document.getElementById("price")
    const linkEle = document.getElementById("link")

    fetch("https://www.boredapi.com/api/activity").then(async (res) => {
        let data = await res.json()
        console.log(data)

        activityEle.innerHTML = data.activity
        typeEle.innerHTML = data.type
        participantsEle.innerHTML = data.participants
        priceEle.innerHTML = data.price
        linkEle.innerHTML = data.link
    })
}