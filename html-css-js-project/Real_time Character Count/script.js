const textarea = document.getElementById("textarea");
const totalCounter = document.getElementById("Total-counter");
const remainingCount = document.getElementById("Remaining-count");

textarea.addEventListener("keyup", () => {
  update();
});

function update(){
    
    totalCounter.innerText = textarea.value.length;
    remainingCount.innerText = textarea.getAttribute("maxlength") -
     textarea.value.length;
}