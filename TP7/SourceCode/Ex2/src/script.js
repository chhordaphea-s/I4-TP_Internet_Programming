//MARK: Element
// Left-side 
const dataListEle = document.getElementById("dataList")
// Right-side 
const nameDetailProduct = document.getElementById("selectedName")
const dateDetailProduct = document.getElementById("date")
const descriptionDetailProduct = document.getElementById("detailInfo")
const beerImageProdect = document.getElementById("beerImage")

let allPage = 1;
const pageSize = 20;

let dataLoading = false;

const localDataArray = [];

function init() {

    if (isHaveLocalData()) {
        readLocalStorage()
        renderAllData()
    } else {
        fetchData()
    }
}

function fetchData() {
    console.log("Fetch Data")

    fetch(`https://api.punkapi.com/v2/beers?page=${allPage}&per_page=${pageSize}`).then(async (res) => {
        let data = await res.json()
        console.log(data);

        data.forEach(element => {
            localDataArray.push(element)
        });

        renderAllData()
        writeLocalStorage()
    })
}

function renderAllData() {
    localDataArray.forEach(element => {
        dataListEle.innerHTML += `
        <div id="dataCell" onclick="clickHandling(${element.id})">
            <img src="http://cleanswifter.com/wp-content/uploads/2016/07/beer.png" alt="" srcset="">
            <div id="info">
                <h2>${element.name}</h2>
                <p>${element.description}</p>
            </div>
        </div>
        `        
    });

    dataLoading = true
}

function writeLocalStorage() {
    let localData = JSON.stringify(localDataArray)
    localStorage.setItem("beerLocalData", localData)
}

function readLocalStorage() {
    console.log("Read Local Data")

    let local = localStorage.getItem("beerLocalData")
    let data = JSON.parse(local)

    console.log(data)

    data.forEach(element => {
        localDataArray.push(element)
    })
}

function isHaveLocalData() {
    let local = localStorage.getItem("beerLocalData")
    let data = JSON.parse(local)

    if (data === null) return false
    else return true
}



function clickHandling(selecrtedID) {
    
    localDataArray.forEach(element => {
        if (element.id === selecrtedID) {
            renderDetailData(element)
        }
    });

}

function renderDetailData(data) {
    console.log("Clicked Data: ", data)

    beerImageProdect.src = data.image_url
    nameDetailProduct.innerHTML = data.name
    dateDetailProduct.innerHTML = data.first_brewed
    descriptionDetailProduct.innerHTML = data.description
}


dataListEle.addEventListener("scroll", (event) => {
    const pageNumberEle = document.getElementById("pageNumber")

    const { scrollTop, clientHeight, scrollHeight } = dataListEle;

    // console.log(scrollWrapper.scrollTop)

    if (clientHeight + scrollTop >= scrollHeight * 0.95) {
        allPage += 1;
        if (dataLoading) {
            fetchData();
            console.log("Loading new page")
        }
        dataLoading = false
    }

})


init();
