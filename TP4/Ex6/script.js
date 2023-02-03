var showbtn = document.getElementById("show-btn")
var sideBar = document.getElementById("sideBar-wrapper")


function showSidebar() {
    console.log('Show')
    document.getElementById("sideBar-wrapper").style.display = 'block';
}

function dismissSidebar() {
    console.log('Dismiss')
    document.getElementById("sideBar-wrapper").style.display = 'none';
}