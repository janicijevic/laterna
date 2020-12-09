// document.querySelector("body").onload = ()=>{
//     setTimeout(()=>{
//         document.querySelectorAll(".text-side").forEach(elem => {
//             elem.style.opacity = 1;
//         })
//     }, 300);
// };

// document.querySelector("body").()=>{

// };
var links = document.querySelectorAll("a");
for (let i=0; i<links.length; i++){
    links[i].onclick = event => {
        event.preventDefault();
        window.scrollTo({
            top: document.querySelector(links[i].hash).offsetTop,
            left: 0,
            behavior: 'smooth'
        })
    }
}

function goToJelovnik(){
    var loc = location.href;
    var res = loc.match(/index\.html/);
    if (res[0] == "index.html"){
        location.href = loc.replace("index.html", "jelovnik.html")
    }
}