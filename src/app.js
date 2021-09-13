let weatherData = new Weather("tehran");
let ui = new UI();

//iife
(function () {
     weatherData
          .getWeather()
          .then((data) => {
               // console.log(data);
               ui.setWeatherInfo(data);
          })
          .catch((error) => {
               console.log(error.message);
          });
})()
