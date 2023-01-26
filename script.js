let navBar = document.querySelector(".navBar")
let button = document.querySelector(".button")
let switches = document.querySelector(".switch")
let contain = document.querySelector(".contain")
let image = document.querySelector(".image")
let name  = document.querySelector(".name")
switches.addEventListener("click", (e) => {
    if (button.textContent == "on") {
        button.innerHTML = "off"
        
        button.classList.add("addTheme")
        contain.classList.add("darkTheme")
    } else if (button.textContent == "off") {
        button.innerHTML = "on"
        button.classList.remove("addTheme")
        contain.classList.remove("darkTheme")
       
    }
})
let i ;
window.addEventListener("scroll", (e) => {
    let top = document.documentElement.scrollTop;
    let height = window.innerHeight;
    let scrolled = Math.floor(top / height * 100);
    image.style.filter=`blur(${scrolled}px)`
    name.style.transform=`scale(${scrolled}%)`
     
    if (scrolled >= 50) {
        navBar.style.height = "5%"
       
    } else {
        navBar.style.height = "10%"
         
    }
    document.querySelector(".line").style.width = scrolled + "%"
})




