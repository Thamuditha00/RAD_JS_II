

document.getElementById("submit-btn").addEventListener("click", function () {
    var num = document.getElementById("num").value;
    if (num < 0) {
        alert("No roots for negative numbers");
    }
    else {
        alert("Root is " + Math.sqrt(num));
    }

});