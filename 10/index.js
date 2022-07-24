const display = document.getElementById("display");
const keys = document.getElementsByClassName("key");
var expression = "";
var answer = "";

console.log(keys);

function displayExp(exp) {
    display.innerHTML = exp;
}

for (let key of keys) {
    if (key.innerHTML == "=") { //for "="
        key.addEventListener("click", function () {
            answer = eval(expression);
            expression = "";
            displayExp(answer);
        })
        continue;

    }
    else if (key.innerHTML == "AC") { //for "AC"
        key.addEventListener("click", function () {
            expression = "";
            display.innerHTML = "0";
        })
        continue;
    }
    else if (isNaN(key.innerHTML)) { //for "operators"
        key.addEventListener("click", function () {
            if (answer != "" && expression == "") {
                expression = answer;
                expression += key.innerHTML;
                displayExp(expression);
            }
            else {
                expression += key.innerHTML;
                displayExp(expression);
            }
        })
        continue;
    }

    //for numbers
    key.addEventListener("click", function () {
        if (answer != "" && expression == "") {
            expression = "";
            expression += key.innerHTML;
            displayExp(expression);
        }
        else {
            expression += key.innerHTML;
            displayExp(expression);
        }
    })
}