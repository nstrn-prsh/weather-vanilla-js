let weatherData = new Weather("tehran");
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
}
