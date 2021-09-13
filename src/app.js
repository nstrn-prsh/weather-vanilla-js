//variables
let store = new Storage();
let city = store.getCityInLocaleStorage();

let weatherData = new Weather(`${store.city}`);
let ui = new UI();

//baraye inke findWeather() invoke beshe
document.addEventListener("DOMContentLoaded", () => {
     findWeather();
});
//changing the city
document.querySelector("#w-change-btn").addEventListener("click", changeCity);

function findWeather() {
     weatherData
          .getWeather()
          .then((data) => {
               // console.log(data);
               ui.setWeatherInfo(data);
          })
          .catch((error) => {
               console.log(error.message);
               localStorage.clear();
          });
}

//az input city meghdaresho migirim
//va be method changeCity to class weather miferestim
function changeCity() {
     let city = document.querySelector("#city").value;
     weatherData.changeCity(city);
     findWeather();

     //inputo khali mikonim
     document.querySelector("#city").value = null;
          //city ro set konim
          store.setCityToLocalStorage(city);
}
