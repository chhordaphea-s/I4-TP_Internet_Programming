var num = 0
var counterKey = "counter"

function load() {
    readFromStorage()
    display(num);
}

function increaseBtnPresse() {
    num += 1;
    display(num)
    writeDataToStorage(num)

}

function decreaseBtnPresse() {    
    num -= 1;
    display(num)
    writeDataToStorage(num)

}

function reset() {
    num = 0;
    display(num)
    writeDataToStorage(num)
}

function display(value) {
    var displayNumber = document.getElementById("displayNum")
    displayNumber.innerHTML = value;

    if (num < 0) displayNumber.style.color = "#AF2F2F"
    else displayNumber.style.color = "#008000"

}

function writeDataToStorage(value) {
    localStorage.setItem(counterKey, value);
}

function readFromStorage() {

    num = Number(localStorage.getItem(counterKey))
}

