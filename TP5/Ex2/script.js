function getGender() {
    const inputnameEle = document.getElementById("input")
    const nameEle = document.getElementById("name")
    const sexEle = document.getElementById("sex")
    const percentEle = document.getElementById("percent")

    var tmpName = inputnameEle.value

    fetch("https://api.genderize.io?name=" + tmpName).then(async (res) => {
        const data = await res.json()
        console.log(data);

        nameEle.innerHTML = data.name[0].toUpperCase() + data.name.slice(1)
        sexEle.innerHTML = data.gender[0].toUpperCase() + data.gender.slice(1)
        percentEle.innerHTML = data.probability*100 + "%"
        
    })

}