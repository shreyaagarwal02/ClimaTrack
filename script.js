const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8568550c34mshec45b69a6f61641p188bd4jsn4bbdf1a23368',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city)=>{
cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then(response => {
		

		console.log(response)

		cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp
		temp2.innerHTML = response.temp
		humidity.innerHTML = response.humidity
		humidity2.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		wind_speed2.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
	
	})
	.catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather(city.value)
})

getWeather("Dehradun")


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
	.then(response => response.json())
	.then(response => {
		

		console.log(response)

		cloud_pct3.innerHTML = response.cloud_pct
		temp3.innerHTML = response.temp
		humidity3.innerHTML = response.humidity
		min_temp3.innerHTML = response.min_temp
		max_temp3.innerHTML = response.max_temp
		wind_speed3.innerHTML = response.wind_speed
		wind_degrees3.innerHTML = response.wind_degrees
		sunrise3.innerHTML = response.sunrise
		sunset3.innerHTML = response.sunset
	
	})
	.catch(err => console.error(err));

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
	.then(response => response.json())
	.then(response => {
		

		console.log(response)

		cloud_pct4.innerHTML = response.cloud_pct
		temp4.innerHTML = response.temp
		humidity4.innerHTML = response.humidity
		min_temp4.innerHTML = response.min_temp
		max_temp4.innerHTML = response.max_temp
		wind_speed4.innerHTML = response.wind_speed
		wind_degrees4.innerHTML = response.wind_degrees
		sunrise4.innerHTML = response.sunrise
		sunset4.innerHTML = response.sunset
	
	})
	.catch(err => console.error(err));

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow', options)
	.then(response => response.json())
	.then(response => {
		

		console.log(response)

		cloud_pct5.innerHTML = response.cloud_pct
		temp5.innerHTML = response.temp
		humidity5.innerHTML = response.humidity
		min_temp5.innerHTML = response.min_temp
		max_temp5.innerHTML = response.max_temp
		wind_speed5.innerHTML = response.wind_speed
		wind_degrees5.innerHTML = response.wind_degrees
		sunrise5.innerHTML = response.sunrise
		sunset5.innerHTML = response.sunset
	
	})
	.catch(err => console.error(err));

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
	.then(response => response.json())
	.then(response => {
		

		console.log(response)

		cloud_pct6.innerHTML = response.cloud_pct
		temp6.innerHTML = response.temp
		humidity6.innerHTML = response.humidity
		min_temp6.innerHTML = response.min_temp
		max_temp6.innerHTML = response.max_temp
		wind_speed6.innerHTML = response.wind_speed
		wind_degrees6.innerHTML = response.wind_degrees
		sunrise6.innerHTML = response.sunrise
		sunset6.innerHTML = response.sunset
	
	})
	.catch(err => console.error(err));
