const btnEl= document.querySelector(".btn")

btnEl.addEventListener("mouseover",(event) =>{
 const xpos =(event.pageX - btnEl.offsetLeft);
 const ypos =(event.pageY - btnEl.offsetTop);

btnEl.style.setProperty("--x", xpos + "px")
btnEl.style.setProperty("--y", ypos + "px")

})

