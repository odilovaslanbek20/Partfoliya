let yosh = document.querySelector(".yosh");
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

