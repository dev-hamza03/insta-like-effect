let img = document.querySelector("img");
let i = document.querySelector("i");


img.addEventListener("dblclick", () => {


    i.style.transform = "translate(-50%, -50%) rotate(0deg) scale(4)";
    i.style.opacity = 1;

    setTimeout(() => {
        i.style.top = -10 + "%";
        i.style.transform = "translate(-50%, -50%) rotate(-30deg) scale(4)";
    }, 800);

    setTimeout(() => {
        i.style.opacity = 0;
    }, 1000);

    setTimeout(() => {
        i.style.left = 50 + "%";
        i.style.top = 50 + "%";
        i.style.transform = "translate(-50%, -50%) rotate(-90deg) scale(1)";
    }, 1200);

});