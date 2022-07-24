

document.getElementById("form").addEventListener("mouseout", function () {
    let num = document.getElementById("num").value;
    let disc = (num / 100) * 20;
    let total = parseInt(num) + disc;
    console.log(total);
    document.getElementById("20%").innerHTML = "20% of value: " + disc;
    document.getElementById("total").innerHTML = "Total: " + num + " + " + disc + " = " + total;
});