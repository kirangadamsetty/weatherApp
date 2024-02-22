let placeEl = document.getElementById("place");
let temperatureEl = document.getElementById("temperature");
let cloudEl = document.getElementById("cloud");
let inputEl = document.getElementById("input-value");
let enterEl = document.getElementById("enter");
let apik = "3045dd712ffe6e702e3245525ac7fa38";
let minimumEl = document.getElementById("minimum");
let maximumEl = document.getElementById("maximum");


function convertion(val) {
    return (val - 273).toFixed(2);
}
enterEl.addEventListener("click", () => {
    if (inputEl.value !== "") {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputEl.value}&appid=${apik}`)
            .then((response) => {
                return response.json();
            }).then((jsonData) => {
                placeEl.textContent = jsonData.name;
                temperatureEl.textContent = convertion(jsonData.main.temp);
                maximumEl.textContent = convertion(jsonData.main.temp_min);
                minimumEl.textContent = convertion(jsonData.main.temp_max);

            });
    } else {
        alert("Enter Your Location");
    }
});