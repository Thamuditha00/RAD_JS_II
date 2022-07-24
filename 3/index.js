

document.getElementById("submit-btn").addEventListener("click", function () {
    var nameValue = document.getElementById("name").value;
    var birthday = document.getElementById("birthday").value;
    var d = new Date(birthday);
    var currd = new Date();
    var age = currd.getFullYear() - d.getFullYear();
    alert(nameValue + "'s age is " + age + " Years");
});