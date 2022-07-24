

document.getElementById("submit-btn").addEventListener("click", function () {
    var subject = document.getElementById("subject").value;
    var marks = document.getElementById("marks").value;

    var obj = document.getElementById("answer");

    if (marks >= 50) {
        obj.innerHTML = "Congratulations! you have passed <strong>" + subject + "</strong> subject";
    }
    else {
        obj.innerHTML = "Sorry! Tou have to work hard for <strong>" + subject + "</strong> subject";
    }
});