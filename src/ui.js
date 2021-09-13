export class UI {
     constructor() {
          //h1
          this.locationWeather = document.querySelector("#w-location");
          //h3
          this.condition = document.querySelector("#w-condition");
          //img
          this.icon = document.querySelector("#w-icon");
          //h3
          this.temp = document.querySelector("#w-temp");
          //li
          this.humidity = document.querySelector("#w-humidity");
          this.visibility = document.querySelector("#w-visibility");
          this.feelsLike = document.querySelector("#w-feels-like");
          this.wind = document.querySelector("#w-wind");
          //button
          this.saveLocationBtn = document.querySelector("#change-location");
          //form input
          this.textCity = document.querySelector("#city");
          //background
          this.bgColor = document.querySelector(".card-body");
     }

     //weatherData az api miad
     setWeatherInfo(weatherData) {
          //country and city
          this.locationWeather.textContent = `${weatherData.name} - ${weatherData.sys.country}`;
          for (let index of weatherData.weather) {
               //condition
               this.condition.textContent = `${index.description}`;
               //icon
               this.icon.setAttribute(
                    "src",
                    `http://openweathermap.org/img/wn/${index.icon}@2x.png`
               );
          }
          //temperature
          this.temp.textContent = 
          `${(weatherData.main.temp / 10).toFixed(1)}\u00b0C`;
          //feels like
          this.feelsLike.textContent =
          ` Feels Like: ${Math.ceil(weatherData.main.feels_like / 10)}\u00b0C`;
          //humidity
          this.humidity.textContent = 
          `Humidity: ${weatherData.main.humidity}%`;
          //visibility
          this.visibility.textContent = 
          `Visibility:  ${weatherData.visibility / 1000} km`;
          //wind
          this.wind.textContent = 
          `Wind Speed:  ${weatherData.wind.speed} km/h`;

          //background color
          weatherData.main.temp / 10 >= 30
               ? (this.bgColor.style.backgroundColor = "#FAC898")
               : (this.bgColor.style.backgroundColor = "#AEC6CF");
     }
}
