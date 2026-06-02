let guesses = [];
let attempts = 0;
const maxAttempts = 10;
const secretNumber = Math.floor(Math.random() * 100) + 1;


const guessNum = document.querySelector(".usser");
 document.querySelector("#submit_button").addEventListener("click",() =>{
const input =document.querySelector(".usser");
const value =parseInt(input.value);


 if (isNaN(value) || value < 1 || value > 100) {
         document.querySelector(".guesses").innerHTML="Please enter a number between 1 and 100";
        return;
    }

    if (attempts >= maxAttempts) {
        document.querySelector(".guesses").innerHTML="No attempts remaining! Click Reset.";
        return;
    }
    guesses.push(value);
    attempts++;

    document.querySelector(".guesses").textContent="Previous guesses: " + guesses.join(", ");
    document.querySelector(".remain").textContent="Guesses Remaining: " +(maxAttempts-attempts);

     if (value === secretNumber) {
        document.querySelector(".result").innerHTML = "🎉 Correct! You guessed it in " + attempts + " attempts!";
    } else if (attempts >= maxAttempts) {
        document.querySelector(".result").innerHTML = "❌ Game Over! The number was " + secretNumber;
    } else if (value < secretNumber) {
        document.querySelector(".result").innerHTML = "📈 Too low! Try higher.";
    } else {
        document.querySelector(".result").innerHTML = "📉 Too high! Try lower.";
    }
    input.value = "";


});

document.getElementById("reset_button").addEventListener("click", () => {
    location.reload();
});
