const panel = document.getElementsByClassName("fixedPanel")[0];
window.addEventListener("scroll",function () {
    if (pageYOffset > 100){
        panel.classList.add("fixedPanel-active");
    }
    else {
        panel.classList.remove("fixedPanel-active");
    }
});

const nextBtn = document.getElementsByClassName("nextBtn")[0];
const prevBtn = document.getElementsByClassName("prevBtn")[0];
const topImg = document.getElementsByClassName("topImg")[0];
const botImg = document.getElementsByClassName("botImg")[0];
const dark = document.getElementsByClassName("darkGround")[0];
nextBtn.addEventListener("click",function () {
    topImg.classList.add('nextTop');
    dark.classList.add("nextDark");
    botImg.classList.add("nextBot");
    setTimeout(()=>{
        topImg.classList.remove('nextTop');
        dark.classList.remove("nextDark");
        botImg.classList.remove("nextBot");
    },2001)
})
prevBtn.addEventListener("click",function () {
    topImg.classList.add("prevTop");
    dark.classList.add("prevDark");
    botImg.classList.add("prevBot");
    setTimeout(()=>{
        topImg.classList.remove("prevTop");
        dark.classList.remove("prevDark");
        botImg.classList.remove("prevBot");
    },2001)
})

const burgerBtn = document.getElementById("burgerMenu");
const burgerNav = document.getElementById("burgerNav");
burgerBtn.addEventListener("click",function () {
    burgerNav.classList.add("nav-active");
});
const closeBurger = document.getElementById('close');
document.onclick = function (e) {
    if (e.target === burgerBtn || e.target === burgerNav) return;
    burgerNav.classList.remove('nav-active');
};