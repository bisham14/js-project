function calculateBMI(){

let height= document.getElementById(`box1`).value;
let weight= document.getElementById(`box2`).value;

if(isNaN(height) || isNaN(weight) || height === 0 || weight === 0){
    document.getElementById(`result`).innerHTML="Please enter valid numbers!";
    return;
}
    let bmi = weight / ((height / 100) ** 2);

    let category="";

    if (bmi < 18.5) {
        category = "Underweight 🥺";
    } else if (bmi < 25) {
        category = "Normal Weight ✅";
    } else if (bmi < 30) {
        category = "Overweight ⚠️";
    } else {
        category = "Obese ❌";
    }

document.getElementById(`result`).innerHTML=" Your BMI is :- "+bmi.toFixed(2)+"<br>"+category;


}


