const containerEl = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
    const creatElement = document.createElement("div")
    creatElement.classList.add("color-container");
    containerEl.inner
    containerEl.appendChild(creatElement);

}
const containerEls =document.querySelectorAll(".color-container");

generateColors();

function generateColors(){
  containerEls.forEach( (eachContainer) =>{
    const random = randomColor();
    eachContainer.style.backgroundColor ="#"+ random;
    eachContainer.innerText= "#"+random;

 eachContainer.addEventListener("click", () => {
    containerEl.style.backgroundColor = "#" + random;
})

  })
}   

function randomColor(){
    const char = "0123456789abcdef";
    const colorLength =6;
    let colorCode="";
    for (let index = 0; index < colorLength; index++) {
        const random = Math.floor(Math.random()* char.length);
        colorCode += char.substring(random ,random+1);
    }
   return colorCode;
     
}