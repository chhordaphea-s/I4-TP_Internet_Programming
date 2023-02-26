function getNationality() {
    const inputnameEle = document.getElementById("input")
    const containerEle = document.getElementById("container")

    var tmpName = inputnameEle.value 

    fetch("https://api.nationalize.io?name=" + tmpName).then(async (res) => {
        const data = await res.json()
        console.log(data);

      
        data.country.forEach(element => {
            containerEle.innerHTML += `
            <div class="result-block">
                <h4 id="nationality">${element.country_id}</h4>
                <h4 id="percent">${parseFloat(element.probability*100).toFixed(1) + "%"}</h4>
            </div>
            `
        });


    })
}