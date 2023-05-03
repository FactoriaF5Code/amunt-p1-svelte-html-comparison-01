let name = "";

const input = document.getElementById("name-input");
const button = document.getElementById("submit-button");
const result = document.getElementById("result-text");


input.addEventListener("change", (event) => {
    name = event.target.value;
});

button.addEventListener("click", () => {
    if (name.length !== 0) {
        result.innerHTML = `El nombre introducido es ${name} y empieza por ${name.charAt(0)}`;
    } else {
        result.innerHTML = "Escribe un nombre para comenzar"
    }
});



