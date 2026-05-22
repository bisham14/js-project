const input = document.querySelector("input");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        let value = button.textContent;

        if      (value === "C")   input.value = "";
        else if (value === "=")   input.value = eval(input.value);
        else if (value === "x")   input.value += "*";
        else if (value === "1/x") input.value = 1 / parseFloat(input.value);
        else if (value === "%")   input.value = parseFloat(input.value) / 100;
        else                      input.value += value;
    });
});