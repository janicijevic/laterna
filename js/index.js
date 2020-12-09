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
    location.href += "jelovnik.html";
}
