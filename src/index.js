import {Storage} from './storage'
import {UI} from './ui'
import {Weather} from './weather'
import controlCity from './regexp'

//variables
let store = new Storage();
let city = store.getCityInLocaleStorage();

let weatherData = new Weather(`${store.city}`);
let ui = new UI();

//event listeners

//baraye inke findWeather() invoke beshe
document.addEventListener("DOMContentLoaded", () => {
     findWeather();
});
//changing the city
document.querySelector("#city").addEventListener("input", controlCity);
document.querySelector("#w-change-btn").addEventListener("click", changeCity);

//functions

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

//check konim ke toye input meghdare dorost benevise
controlCity()

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
