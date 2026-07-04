const dayEl =document.querySelector("#day");
const hourEl =document.querySelector("#hour");
const minEl =document.querySelector("#minute");
const secEl =document.querySelector("#second");

const newYear =new Date("Jan 1, 2027 00:00:00").getTime();

updateCount();

function updateCount(){

    const now =new Date().getTime();
    const rem = newYear - now;

     const sec =1000;
     const min =sec*60;
     const hr = min * 60;
     const day =hr * 24;


     const d = Math.floor(rem / day);
     const h = Math.floor((rem % day)/ hr);
     const m = Math.floor((rem % hr)/ min);
     const s = Math.floor((rem % min)/ sec);
     
     dayEl.innerText =d;
     hourEl.innerText =h;
     minEl.innerText =m;
     secEl.innerText =s;
     setTimeout(updateCount,1000);

}