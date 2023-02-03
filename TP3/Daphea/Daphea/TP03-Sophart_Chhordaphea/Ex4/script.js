var books = [
    {
        'name':'C programming',
        'category':'programming',
        'price':'50000'
    },
    {
        'name':'C++ programming',
        'category':'programming',
        'price':'50000'
    },
    {
        'name':'C# programming',
        'category':'programming',
        'price':'50000'
    },
    {
        'name':'Java programming',
        'category':'programming',
        'price':'50000'
    },
    {
        'name':'JavaScript programming',
        'category':'programming',
        'price':'50000'
    }

];

if(localStorage.getItem("books")===null){
    localStorage.setItem("books",JSON.stringify(books));
}


var books = JSON.parse(localStorage.getItem("books"));

function listing(){
    var index = 0;
    document.getElementById('list_book').innerHTML = "";
    books.forEach(book => {
        document.getElementById('list_book').innerHTML += 
            `<div class="item">
                <div class="button" >
                    <button onclick="deleteBook(${index});">Delete</button>
                    <button onclick="updateBook(${index});">Change name</button>
                </div>
                <div class="image">
                    <svg width="90" height="76" viewBox="0 0 90 76" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <div class="book_info">
                    <span>Name: ${book?.name}</span><br>
                    <span>Price: ${book?.price} riels</span><br>
                    <span>Category: ${book?.category}</span>
                </div>
            </div>`;
        index++;
    })
}

function addBook(){
    let id = books.length;
    let name = document.getElementById('name').value;
    let category = document.getElementById('category').value;
    let price = document.getElementById('price').value;
    let book = {
        'name'      :   name,
        'category'  :   category,
        'price'     :   price
    };
    books.push(book);
    localStorage.setItem("books",JSON.stringify(books));
    listing();
}

function updateBook(index){
    var dialog = document.getElementById('updateDialog');    
    dialog.show();    
    document.getElementById('hide').onclick = function() {    
        dialog.close();    
    };
    document.getElementById('submit').onclick = function() {
        let name = document.getElementById('nameD').value;
        let category = document.getElementById('categoryD').value;
        let price = document.getElementById('priceD').value;
        let book = {
            'name'      :   name,
            'category'  :   category,
            'price'     :   price
        };

        books.splice(index, 1, book);
        localStorage.setItem("books", JSON.stringify(books));
        listing(); 
        dialog.close();
    }
}

function deleteBook(index){
    books.splice(index,1);
    localStorage.setItem("books", JSON.stringify(books));
    listing();
}

    

    