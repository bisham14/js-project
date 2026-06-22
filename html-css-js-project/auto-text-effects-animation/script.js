const containeEl = document.querySelector(".containe");
const careers =["Student","Freelansar","Basketball Player","Web Developer"];

let careerIndex =0;
let careerWords =0;

textChange()

function textChange(){
    careerWords++;

containeEl.innerHTML=`
 <h1>I am a ${careers[careerIndex].slice(0,careerWords)}</h1>`

if(careerWords === careers[careerIndex].length){
careerIndex++;
careerWords=0;

}
if(careers.length === careerIndex){
    careerIndex =0;
}
 setTimeout(textChange,200);
}
