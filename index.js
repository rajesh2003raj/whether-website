const api_key="195b3267483a31a7f1c23ae2ebc9f8d8";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="


const searchbox=document.querySelector('.search input');
 const searchbtn=document.querySelector('.search button');
 const weatherIcon=document.querySelector(".weather_icon"  );

async function showWhether(city){
   //let city="new york";
    const response= await fetch(apiurl+city+ `&appid=${api_key}`);
    if(response.status==404){
        document.querySelector('.error').style.display="block";
        document.querySelector('.weather').style.display="none";
    }
    else{

    
    const data=await response.json();
     
    document.querySelector('.city').innerHTML=data.name;
    document.querySelector('.temp').innerHTML=Math.round(data.main.temp )+"°C" ;
    document.querySelector('.humidity').innerHTML=data.main.humidity + "%";
    document.querySelector('.wind').innerHTML=data.wind.speed +"km/h";
    
    if(data.weather[0].main=="clouds"){
    weatherIcon.src="images/clouds.png";
    } else if(data.weather[0].main=="clear"){
        weatherIcon.src="images/clear.png";
    } else if(data.weather[0].main=="Rain"){
        weatherIcon.src="images/rain.png";
    }
     else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="images/drizzle.png";
     }
     else if(data.weather[0].main=="Mist"){
        weatherIcon.src="images/mist.png";
     }
     document.querySelector('.weather').style.display="block";
     document.querySelector('.error').style.display="none";
    }
    

    

 
   

}
searchbtn.addEventListener("click",()=>{
    showWhether(searchbox.value);


})



