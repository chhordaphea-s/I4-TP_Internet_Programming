let pageNumber = 1;
const numberPerPage = 20;
let dataLoading = false;
let currentPage = 1;

let scrollWrapper = null;

let pageHeight = null;


function fetchData() {
    scrollWrapper = document.getElementById("scoller-wrapper");
    const loading = document.getElementById("loading");

    loading.hidden = false;

    fetch(
        `https://api.instantwebtools.net/v1/passenger?page=${pageNumber}&size=${numberPerPage}`
    ).then(async (response) => {
        let datas = await response.json();

        loading.hidden = true;

        datas.data.forEach((element) => {
            scrollWrapper.innerHTML += renderData(element);
        });
        pageNumber++;
        dataLoading = true
    });
}

function renderData(data) {
    let dataCell = `
    <div class="data">
        <h6>✈️: </h6>
        <h6>${data.airline[0].name} - ${data.airline[0].country}</h6>
        <br>
        <p>🙂: </p>
        <p>${data.name}</p>
    </div>
    `;
    return dataCell;
}

function containerScroll() {
    const pageNumberEle = document.getElementById("pageNumber")

    const { scrollTop, clientHeight, scrollHeight } = scrollWrapper;
    if (pageHeight == null) {pageHeight = scrollHeight}

    // console.log(scrollWrapper.scrollTop)

    if (clientHeight + scrollTop >= scrollHeight * 0.95) {
        pageNumber += 1;
        if (dataLoading) {
            fetchData(pageNumber);
            console.log("loading")
        }
        dataLoading = false
    }

    let page = Math.round((scrollTop) / pageHeight) + 1

    pageNumberEle.innerHTML = `Page: ${page}`
    console.log(page)
}
