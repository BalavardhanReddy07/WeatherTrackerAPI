const apiKey="074043a4decd1c2ce59ebfd96ba66aca"; 
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="; 
const searchbox=document.querySelector(".search input"); 
const searchbtn=document.querySelector(".search button");  
const weatherIcon=document.querySelector(".Weather-icon")
async function checkWeather(city){
    const response=await fetch(apiUrl+city+`&appid=${apiKey}`);  
    if(response.status === 404 ){
        document.querySelector(".error").style.display="block";
        document.querySelector(".Weather").style.display="none";
    } 
    else{


                const data= await response.json()
            console.log(data) 
            document.querySelector(".city").innerHTML=data.name; 
            document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C" ;
            document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
            document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";  
            // document.querySelector(".humidity").innerHTML=weatherIcon.src="./images.clear.png";


            console.log(data.weather[0])
            if(data.weather[0].main== "clouds"){ 
                    weatherIcon.src="images/clouds.png"
            
             }  
            else if(data.weather[0].main=="Clear"){
                weatherIcon.src="images/clear.png";
            }
            else if(data.weather[0].main=="Rain"){
                weatherIcon.src="images/rain.png";
            }
            else if(data.weather[0].main=="Drizzle"){
                weatherIcon.src="images/drizzle.png";
            }
            else if(data.weather[0].main=="Mist"){
                weatherIcon.src="images/mist.png";
            } 
            else if(data.weather[0].main=="snow"){
                weatherIcon.src="images/snow.png";
            } 
            else{
               weatherIcon.src="images/snow.png";
            }




            document.querySelector(".Weather").style.display="block";  
            document.querySelector(".error").style.display="none";
    }


} 

searchbtn.addEventListener("click",()=>{
    // console.log(searchbox.value);
    checkWeather(searchbox.value);
})
// &appid=074043a4decd1c2ce59ebfd96ba66aca

// console.log("hello")