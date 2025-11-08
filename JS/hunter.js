
zone = document.getElementById("hunter-zone");
let id;
zone.addEventListener('mouseenter', () => {
    clearInterval(id);
    id = setInterval(() => {

    }, (() => {
        zone.style.width += 5;
        if (zone.style.width >= '250px') {
            clearInterval(id);  
        }
        else {
            clearInterval(id);  
        }
    }, 20));
})