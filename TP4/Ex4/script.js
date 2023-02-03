var strColor = "NaN"

var colors = []

function generate() {
    colorGenerator()
    console.log(strColor)
    
    colors.push(strColor);
    console.log(colors)
    
    displayCodeColor()
    writeData() 
}

function colorGenerator() {
    const color = Math.floor(Math.random()*16777215).toString(16);
    strColor = "#" + color;

}

function displayCodeColor() {
    var view = document.getElementById("colorDiaplayer")
    view.style.backgroundColor = strColor

    document.getElementById("colorHax").innerHTML = strColor

    document.getElementById("color-container").innerHTML = ""
    
    colors.forEach(element => {
        document.getElementById("color-container").innerHTML += `
        <div class="element">
            <div class="color" style="background-color:${element}"></div>
                <p class="color-item">${element}</p>
            </div>
        </div>
        `
    });
}

function writeData() {
    localStorage.setItem("colors", JSON.stringify(colors));
}

function getDataFromStorage() {
    // var data  = 
    colors = JSON.parse(localStorage.getItem("colors"))

    strColor = colors[colors.length-1]
    displayCodeColor()
    
}

function reset() {
    colors = []
    strColor = "NaN"
    writeData()

    displayCodeColor()
}