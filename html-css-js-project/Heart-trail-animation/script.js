const bodyEl =document.querySelector("body");

bodyEl.addEventListener("mousemove", (event)=> {
    // select postion
     const hoz =event.offsetX;
     const ver =event.offsetY;
     const spanEl =document.createElement("span");
// add new postion to new span
     spanEl.style.left = hoz + "px";
     spanEl.style.top = ver + "px";

     // add new size 
     const rendom= Math.random()*300;
     spanEl.style.height = rendom +"px";
     spanEl.style.width = rendom + "px";

     bodyEl.appendChild(spanEl);
   
     setTimeout(()=>{
       spanEl.remove();
     }, 5000);

})
