function scrolltoelement(elementSelector, instance = 0){
    const element = document.querySelectorAll(elementSelector);
    if(element.length > 0){
        element[instance].scrollIntoView({behavior: "smooth"});
    }
}

const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const link4 = document.getElementById("link4");

link2.addEventListener("click", ()  =>{
    scrolltoelement(".prc");
})

link3.addEventListener("click", ()  =>{
    scrolltoelement(".habilidades");
})

link4.addEventListener("click", ()  =>{
    scrolltoelement(".cv");
})