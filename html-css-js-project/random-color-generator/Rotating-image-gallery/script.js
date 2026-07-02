const containeEl = document.querySelector('.img-container');
const prevEl = document.querySelector('.btn-prev');
const nextEl = document.querySelector('.btn-next');

let x = 0;
let timer;

prevEl.addEventListener("click", () => {
    x += 45;
    clearTimeout(timer);
    updateGall();
});

nextEl.addEventListener("click", () => {
    x -= 45;
     clearTimeout(timer);
    updateGall();
});

function updateGall() {
    containeEl.style.transform = `perspective(1600px) rotateY(${x}deg)`;
     timer = setTimeout ( () =>{
        x -= 45;
        updateGall();
    },3000)
}
updateGall()