function main(city, dt, temp, minTemp, maxTemp, humidity, weatherState, weatherStateAbbr, windSpeed){
  
  console.log(city, dt, temp, minTemp, maxTemp, humidity, weatherState, weatherStateAbbr, windSpeed);


  temp = temp.toFixed(2);
  minTemp = minTemp.toFixed(2);
  maxTemp = maxTemp.toFixed(2);
  humidity = humidity.toFixed(2);
  windSpeed = windSpeed.toFixed(2);

  document.querySelector('.date').innerHTML = dt 
  document.querySelector('.city').innerHTML = city
  document.querySelector('.temprature').innerHTML = `${temp}°C`
  document.querySelector('.mn-2').innerHTML = `${minTemp}°C`
  document.querySelector('.mx-2').innerHTML = `${maxTemp}°C`
  document.querySelector('.hm-2').innerHTML = `${humidity}%`
  document.querySelector('.weather-state').innerHTML = weatherState
  document.querySelector('.ws-2').innerHTML = `${windSpeed}mph`

  document.querySelector('.img').src = `https://www.metaweather.com/static/img/weather/${weatherStateAbbr}.svg`

}

async function getWeather(){

  try{
    const result = await fetch('https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/2295402/');
    
    // console.log(result);
    const data = await result.json();
    console.log(data);
    const today = data.consolidated_weather[0];

    console.log(`Temprature in ${data.title} will remain in between ${today.min_temp} and ${today.max_temp}`);


    const city = data.title;
    const dt = today.applicable_date;
    const temp = today.the_temp;
    const minTemp = today.min_temp;
    const maxTemp = today.max_temp;
    const humidity = today.humidity;
    const weatherState = today.weather_state_name;
    const weatherStateAbbr = today.weather_state_abbr;
    const windSpeed = today.wind_speed;

    // console.log(city, dt, temp, minTemp, maxTemp, humidity, weatherState, weatherStateAbbr, windSpeed);

    main(city, dt, temp, minTemp, maxTemp, humidity, weatherState, weatherStateAbbr, windSpeed);
  }
  catch(error){
    console.log(error);
  }
}


getWeather();