function controlCity() {
    let city = document.querySelector("#city").value;
    let regexp = /^\b[a-zA-Z]+$/gi;
    if (regexp.test(city) == false) {
         let newCityDiv = document.querySelector("#new-city");
         let errorMsg = document.createElement("span");
         errorMsg.innerHTML = `<p>write a city name!</p>`;
         newCityDiv.appendChild(errorMsg);
         setTimeout(() => {
              errorMsg.textContent = null;
         }, 5000);
         newCityDiv.appendChild(errorMsg);
    }
}

export default controlCity