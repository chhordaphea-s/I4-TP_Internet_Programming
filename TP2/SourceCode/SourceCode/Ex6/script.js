let addBookButton = document.getElementById("add-btn");

var allBooks = [
    {
        "name": "Book I1",
        "price": "1000",
        "category": "Codding"
    },
    {
        "name": "Book I2",
        "price": "1200",
        "category": "Codding"
    },
    {
        "name": "Book I3",
        "price": "1300",
        "category": "Codding"
    },
    {
        "name": "Book I4",
        "price": "1400",
        "category": "Codding"
    },
    {
        "name": "Book I5",
        "price": "1500",
        "category": "Codding"
    },
    {
        "name": "Book I6",
        "price": "1600",
        "category": "Codding"
    }
];


function displayAllBooks() {
    document.getElementById("book-container").innerHTML = "";
    var index = 0;
    allBooks.forEach(book => {
        console.log(book);
        renderABook(book, index);
        index++;
    });
}

function renderABook(book, index) {
    var bookContainer = document.getElementById("book-container");
    
    bookContainer.innerHTML += `
        <div class="book">
            <div class="book-top">
                <button class="book-btn" onclick="deleteButton(${index});">Delete</button>
                <button class="book-btn" onclick="updateName(${index});">Change Name</button>
            </div>
            <div class="bookIconContainer">
                <svg class="bookIcon" viewBox="0 0 90 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_22_4)">
                        <path
                            d="M0 68.4092C0 71.7266 2.1882 73.0211 4.57903 73.0211C5.95678 73.0211 7.13191 72.2117 8.67173 71.2812C13.1292 68.2472 18.6402 66.3864 24.2728 66.427C30.108 66.4671 35.9027 68.6113 40.4411 72.9805C42.2242 74.5986 43.5209 75.1247 45.0201 75.1247C46.4791 75.1247 47.816 74.5986 49.5588 72.9805C54.0971 68.6519 59.8918 66.4671 65.7675 66.427C71.4 66.3864 76.8706 68.2472 81.328 71.2812C82.8679 72.2117 84.043 73.0211 85.4613 73.0211C87.8116 73.0211 90 71.7266 90 68.4092V13.5119C90 12.8242 89.9593 12.2578 89.5137 11.5701C85.907 5.29959 76.7491 0 65.6052 0C56.7714 0 49.1127 3.51957 45.0201 8.4955C40.9274 3.51957 33.2282 0 24.4349 0C13.2508 0 4.09274 5.29959 0.486268 11.5701C0.0810442 12.2578 0 12.8242 0 13.5119V68.4092ZM6.52409 64.9704V14.4424C9.80637 9.70915 16.9383 6.51324 24.4349 6.51324C32.1341 6.51324 38.8608 9.74962 41.7379 14.6851V65.6581C37.6046 62.3813 31.1616 59.9136 24.4349 59.9136C17.384 59.9136 10.8194 61.8958 6.52409 64.9704ZM48.2621 65.6581V14.6851C51.1389 9.74962 57.9063 6.51324 65.6052 6.51324C73.0614 6.51324 80.1936 9.70915 83.4758 14.4424V64.9704C79.1803 61.8958 72.6158 59.9136 65.6052 59.9136C58.8383 59.9136 52.3954 62.3813 48.2621 65.6581Z"
                            fill="#808080" />
                    </g>
                    <defs>
                        <clipPath id="clip0_22_4">
                            <rect width="90" height="75.2055" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <div class="bookInfo">
                <div class="book-row-container">
                    <label for="name-book-label">Name: </label>
                    <p class="value">${book.name}</p>
                </div>
                <div class="book-row-container">
                    <label for="price-book-labell">Price: </label>
                    <p class="value">${book.price}</p>
                    <p class="value">riel</p>
                </div>
                <div class="book-row-container">
                    <label for="category-book-label">Category: </label>
                    <p class="value">${book.category}</p>
                </div>
            </div>
        </div>
    `;

}


function addBook() {
    console.log("Add Book Button Clicked");

    let nameInputed = document.getElementById("name-input");
    let categoryInput = document.getElementById("category-input");
    let priceInput = document.getElementById("price-input");


    var newBook = {
        "name": nameInputed.value,
        "price": priceInput.value,
        "category": categoryInput.value
    };

    allBooks.push(newBook);
    displayAllBooks();
}

function deleteButton(index) {
    allBooks.splice(index, 1);
    displayAllBooks();
}

function updateName(index) {

    // text popup function
    var name = prompt("Enter your new name here: ", allBooks[index].name);

    allBooks[index].name = name;
    displayAllBooks();
}


