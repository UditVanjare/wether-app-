const BASE_URL = 'http://api.weatherapi.com/v1'
const API_KEY = '<your wetherapi api key>'



// default
 async function  getDefaultLocation (){
          const result = await navigator.geolocation.getCurrentPosition((position)=>{
            const latitude= position.coords.latitude
            const longitude= position.coords.longitude
            const cityName = `${latitude},${longitude}`

            getdata(cityName)
          },()=>{
            console.log(error)
          })
        }
         
 
getDefaultLocation()

// onclick
document.querySelector('#s').addEventListener('click',() => {
const cityName = document.querySelector('#t').value
getdata(cityName)
})


async function getdata(cityName) {
    try {
        
        url= `${BASE_URL}/current.json?key=${API_KEY}=${cityName}&aqi=yes`
        let response = await fetch(url)
        
         if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
         }

         const data = await response.json();
         document.querySelector(".temp").innerHTML = `${data.current.feelslike_c}`
         document.querySelector(".city").innerHTML = `in ${data.location.name}`
         document.querySelector(".windspeed").innerHTML = ` ${data.current.wind_kph} kph`
         document.querySelector("#humy").innerHTML = ` ${data.current.humidity}`
         console.log(data)
         return data;
        } 
    catch (error) {
         alert("please inter a valid city name ")
    }
}
// testing

async function getLocationByIP() {

    try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        
    } catch (error) {
        console.log(error)
    }
}