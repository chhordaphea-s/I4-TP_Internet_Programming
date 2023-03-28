var selectedBookID;

function loadBook() {

    const bookContainerElement = document.getElementById("book-container")
    const loadingElement = document.getElementById("loadingView")

    loadingElement.hidden = false
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => {
        return response.json()
    })
    .then((myjson) => {
        console.log(myjson)
        
        loadingElement.hidden = false

 
        for (let index = 0; index < 100; index++) {
            const book = myjson[index];
            
            loadingElement.hidden = true

            bookContainerElement.innerHTML += `
            <div class="book">
                <div class="bookIconContainer">
    
                <img src="${book.thumbnailUrl}" alt="Book Cover" class="bookIcon">
                    
                </div>
                <div class="bookInfo">

                    <p class="bookTitle">${book.title}</p>

                    <div class="book-row-container">
                        <label for="price-book-labell">AlbumID: </label>
                        <p class="value">0 Reil</p>
                    </div>
                    <div class="book-row-container">
                        <label for="category-book-label">Category: </label>
                        <p class="value"> ${book.albumId} </p>
                    </div>

                    <a href="/detail?id=${book.id}" class="book-row-container"">See</a>

                </div>
            </div>
            `
            
        }
        
    })
}

function loadDetailBook() {
    // Get the user ID from the URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const bookID = urlParams.get('id');


    const titleElement = document.getElementById("titleBook")
    const categoryElement = document.getElementById("category")
    const thumbnailElement = document.getElementsByClassName("bookIcon")[0]
    
    fetch("https://jsonplaceholder.typicode.com/photos/" + bookID)
    .then((response) => {
        return response.json()
    })
    .then((myjson) => {
        console.log(myjson)

        titleElement.innerHTML = myjson.title
        categoryElement.innerHTML = myjson.albumId
        thumbnailElement.src = myjson.thumbnailUrl
    })

}