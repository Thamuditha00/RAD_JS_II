
var inputs = document.getElementsByTagName("input");
var labels = document.getElementsByTagName("label");
console.log(inputs);

for (let input of inputs) {
    input.addEventListener("click", function () {
        for (let element of inputs) {
            if (element != this) {
                element.toggleAttribute("disabled");
                for (let label of element.labels) {
                    label.classList.toggle("disabled");
                }
            }
        }
    })
}

