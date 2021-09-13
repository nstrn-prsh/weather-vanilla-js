//akharin location ron az toye local storage bekhoone
export class Storage {
     constructor(city) {
          this.default_city = "tehran";
          this.city = city;
     }
 
     //to in method age meghdare localeStorage khali bood ye meghdare default vase city dar nazar migirim
     //dar gheire in sorate akharin meghdari ke to localeStorage darim ro gharar midim
     getCityInLocaleStorage() {
          localStorage.getItem("city")
               ? (this.city = localStorage.getItem("city"))
               : (this.city = this.default_city);
          // return this.city
     }
 
     setCityToLocalStorage(city) {
          localStorage.setItem("city", city);
     }
 }
 