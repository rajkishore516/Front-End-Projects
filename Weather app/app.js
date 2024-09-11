const apiKey="521861561c3cb4eee8d318d51722a1b0";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchIcon=document.querySelector(".search .search-icon");
const weatherCondition=document.querySelector(".ChangeWeather");

async function checkWeather(city){
    const response=await fetch(apiUrl+city+`&appid=${apiKey}`);
    var data=await response.json();
    document.getElementById("city").innerHTML=data.name;
    document.getElementById("temp").innerHTML=data.main.temp+"°C";
    document.getElementById("humid").innerHTML=data.main.humidity+"%";
    document.getElementById("speed").innerHTML=data.wind.speed+" km/hr";
    if(data.weather[0].main==="Clouds"){
        weatherCondition.src="images/clouds.png";
    }else if(data.weather[0].main==="Rain"){
        weatherCondition.src="images/rain.png";
    }else if(data.weather[0].main==="Drizzle"){
        weatherCondition.src="images/drizzle.png";
    }else if(data.weather[0].main==="Mist"){
        weatherCondition.src="images/mist.png";
    }else if(data.weather[0].main==="Snow"){
        weatherCondition.src="images/snow.png";
    }else if(data.weather[0].main==="Clear"){
        weatherCondition.src="images/clear.png";
    }
}

searchIcon.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})

checkWeather("london");

