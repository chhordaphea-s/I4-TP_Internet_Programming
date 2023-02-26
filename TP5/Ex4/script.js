function getUniList() {
    const selectedCountryEle = document.getElementById("selected-country")
    const uniListEle = document.getElementById("uni-list")
    
    var tmpselectedCountry = selectedCountryEle.value 
    // console.log(tmpselectedCountry);
    
    const loadingEle = document.getElementById("loading")
    loadingEle.hidden = false
    
    uniListEle.innerHTML = ""
    fetch("http://universities.hipolabs.com/search?country=" + tmpselectedCountry).then(async (res) => {
        const data = await res.json();
        console.log(data);

        loadingEle.hidden = true

        data.forEach(element => {
            uniListEle.innerHTML += `
            <div class="result-block">
                <h4 id="schoolname">${element.name}</h4> 
                <p id="countryname">(${element.country} - ${element.alpha_two_code})</p>
                <p id="web">🌐 ${element.web_pages}</p>
            </div>
            `
        });
    })

}