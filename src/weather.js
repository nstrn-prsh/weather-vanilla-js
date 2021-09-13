class Weather {
     constructor(city) {
          this.apiKey = "da28305644bb81f082cf15b0cb69a774";
          this.city = city;
     }
 
     async getWeather() {
          let responseWeather = await fetch(
               `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`
          );
          if (responseWeather.ok) {
               let weatherData = await responseWeather.json();
               return weatherData;
          } else {
               alert("this city doesn't exist!");
               throw new Error(responseWeather.status);
          }
     }
 
     //baraye search
     changeCity(city) {
          this.city = city;
     }
 }
 