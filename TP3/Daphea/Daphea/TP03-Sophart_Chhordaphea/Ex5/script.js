var email = "gic@gmail.com";
var password = "Gic123";

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function login(){

  var date = new Date();
    date.setTime(date.getTime()+(30*1000));
    document.cookie="email=gic@gmail.com;expires="+date.toUTCString();
    

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    

    if(this.email === email && this.password === password && document.cookie === "email=gic@gmail.com") {
        location.href="./home.html" ;
    }
}

function logout(){
    location.href = "./Login.html";
}


function cookieExpired(){
    var cookieValue = getCookie("email");
    if(cookieValue != "gic@gmail.com"){
        location.href = "./Login.html";
    }
}