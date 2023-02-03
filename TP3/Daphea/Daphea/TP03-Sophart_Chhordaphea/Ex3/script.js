let listWrapperEle = document.getElementById("list-wrapper");
let add = document.getElementById("add");
let keY = document.getElementById("Key");
let valuE = document.getElementById("Value");
let datE = document.getElementById("Date");

function renderList() {
    listWrapperEle.innerHTML += `
    <div class="row" id="${keY.value}">
        <div style="width: 25%;">${keY.value}</div>
        <div style="width: 20%; margin-right:6em" >${valuE.value}
    </div>
    <button class="expiredButton" onclick="deleteRow(this)">
        <div> Set expired  </div>
        <div>
        <img src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-39-512.png" style="width:30px; height:30px; ">
        </div>
    </button>
</div>
    `;
}

add.addEventListener("click", () => {
    renderList();
    let pareDate = datE.value.split("-");
    let cookie =
        keY.value +
        "=" +
        valuE.value +
        "; expires=" +
        new Date(pareDate[0], pareDate[1], pareDate[2]).toUTCString();
    document.cookie = cookie;
});

function setCookie(name, value, options = {}) {
    options = {
        path: "/",
        ...options,
    };

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }

    let updatedCookie =
        encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }

    document.cookie = updatedCookie;
}

(function restoreData_Cookie() {
    let pareCookie = document.cookie.split("; ");

    for (let x of pareCookie) {
        keY.value = x.split("=")[0];
        valuE.value = x.split("=")[1];
        renderList();
    }
})();

function deleteCookie(name) {
    setCookie(name, "", {
        "max-age": -1,
    });
}

function deleteRow(currentNode) {
    let parent = currentNode.parentNode;
    deleteCookie(parent.id);
    parent.remove();
}
