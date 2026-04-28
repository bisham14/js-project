 let countInc= document.getElementById("doWork");
 let saveEl= document.getElementById("save-el");

let count=0;

function increment(){
    count +=1;
     countInc.textContent=count;
}

function save(){
saveEl.textContent += count+ " - " ;
    count=0;
    countInc.textContent =count;

}




