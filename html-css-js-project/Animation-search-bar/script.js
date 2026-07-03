const conEL= document.querySelector(".search-bar");
const magnifierEL= document.querySelector(".magnifier");

magnifierEL.addEventListener("click" , () =>{
    conEL.classList.toggle("active")
})