const startEl =document.querySelector("#start");
const timerEl =document.querySelector("#timer");
const stopEl =document.querySelector("#stop");
const resetEl =document.querySelector("#reset");

let interval;
let timeLeft =1500;

function updateTimer(){
let min = Math.floor(timeLeft/60);
let sec = Math.floor(timeLeft%60);
let fomat = `${min.toString().padStart(2 ,0)} : 
${sec.toString().padStart(2 ,0)} `
  
timerEl.innerHTML =fomat;
}

function startTimer(){
    interval = setInterval( () => {
     timeLeft--;
    updateTimer();
    if( timeLeft === 0){
        clearInterval(interval);
        alert("Time's up!")
        timeLeft =1500;
        updateTimer();
    }
    },1000)
}



startEl.addEventListener("click" , () =>{
startTimer();
})
stopEl.addEventListener("click" , () =>{
  clearInterval(interval);
  updateTimer();

})
resetEl.addEventListener("click" , () =>{
timeLeft =1500;
updateTimer();

})