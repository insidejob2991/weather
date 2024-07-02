const apikey="77d6b5de042547459ab84258240207";
const weatherform=document.querySelector("input");
const search=document.querySelector("button");
const to_update=document.getElementById("weatherInfo");
search.addEventListener('click',(e)=>{
    e.preventDefault();
    const location=document.getElementById("locationInput").value.trim(); if (location) {
        getWeather(location);
      }
    });
    function getWeather(location){
        fetch(
`https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${location}&aqi=no`
        )
        .then((response)=>{
            if (!response.ok) {
                throw new Error("Network response was not ok");
              }
           return response.json()})
           .then((data)=>{
            console.log(data);
            //document.getElementById("location").innerHTML=data.location.name;
            display(data);
           })
           .catch((error)=>{
            console.error("Error fetching weather data:", error);
           })
    }
    function display(data){
        const temp_c=data.current.temp_c;
        const temp_f=data.current.temp_f;
        const humidity=data.current.humidity;
        const wind=data.current.wind_kph;
        const lo=data.location.name;
        to_update.innerHTML=
            `<h1>${lo}</h1>
            <p style="color:#82F168">Temperature in Celcius: ${temp_c}°C</p>
            <p style="color:#82F168">Temperature in Farahnieght: ${temp_f}°F</p>
            <p style="color:#82F168">Humidity: ${humidity}%</p>
            <p style="color:#82F168">Wind: ${wind}km/h</p>`

        


    }



