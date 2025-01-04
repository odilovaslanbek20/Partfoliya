let yosh = document.querySelector(".year");
let yil = 2008; 
let oy = 12;    
let kun = 20;   

let date = new Date();
let yil1 = date.getFullYear();
let oy1 = date.getMonth() + 1;
let kun1 = date.getDate();   

let age = yil1 - yil;

if (oy1 < oy || (oy1 === oy && kun1 < kun)) {
    age--;
}

yosh.textContent = age;
// ======================================================================

let bars = document.querySelector(".nav__bars");
let ext = document.querySelector(".nav__ext");
let list = document.querySelector(".nav__list");

bars.addEventListener("click", () => {
    if(!list.classList.toggle("active")){
        list.classList.remove("active")
    }else{
        list.classList.add("active")
    }
})

ext.addEventListener("click", () => {
    if(!list.classList.toggle("active")){
        list.classList.remove("active")
    }else{
        list.classList.add("active")
    }
})