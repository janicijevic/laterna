var links = document.querySelectorAll("a");
var navHeight = document.querySelector(".nav").offsetHeight;
for (let i=0; i<links.length; i++){
    links[i].onclick = event => {
        event.preventDefault();
        window.scrollTo({
            top: document.querySelector(links[i].hash).offsetTop-navHeight,
            left: 0,
            behavior: 'smooth'
        })
    }
}

function goToMain(){
    var loc = location.href;
    var res = loc.match(/jelovnik\.html/);
    if (res[0] == "jelovnik.html"){
        location.href = loc.replace("jelovnik.html", "")
    }
}
