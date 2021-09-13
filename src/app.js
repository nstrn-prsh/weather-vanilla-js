let weatherData = new Weather("tehran");

//immediately invoked function
(function () {
     weatherData
          .getWeather()
          .then((data) => {
               console.log(data);
          })
          .catch((error) => {
               console.log(error.message);
          });
})();


