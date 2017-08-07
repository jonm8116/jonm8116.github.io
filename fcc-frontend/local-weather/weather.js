		//SET GLOBAL VAR FOR TEMPERATURE
		var initialTemp = 0;
	
		$(document).ready(function() {
			/*	THE ICON ARRAY WILL CONTAIN LINKS TO DIFFERENT IMAGES
				FOR EACH PARTICULAR WEATHER ICON
				THE KEY FOR THIS ICON IS:
				INDEX:			ICON TYPE:
				0				CLOUDS
				1				RAIN
				2				SUNNY
				3				SNOW
				4				THUNDER STORM
				5				HAZARDOUS
			*/
			var arrOfWeatherIcons = ["https://image.flaticon.com/icons/png/128/149/149209.png",
			"https://image.flaticon.com/icons/png/128/131/131041.png",
			"https://image.flaticon.com/icons/png/128/25/25290.png",
			"https://image.flaticon.com/icons/png/128/275/275722.png",
			"https://image.flaticon.com/icons/png/512/481/481468.png",
			"https://image.flaticon.com/icons/png/512/481/481440.png"];
		
			var lat = 0;
			var lon = 0;
			var weatherString = "";
			navigator.geolocation.getCurrentPosition(function(position){
				lat = position.coords.latitude;
				lon = position.coords.longitude;
				console.log("latitude" + position.coords.latitude);
				console.log("longitude" + position.coords.longitude);
				
				//lon = lon -50;	//debug statement
									//
				var apiCallString = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + "b0fd30f9894c1a2d70de6bcd9e5766c0";
				 $.getJSON( apiCallString, function( data ) {
					
					for(var i=0; i<data.weather.length; i++){
						if(i==data.weather.length-1){
							weatherString += data.weather[i].description;
						} else{
							weatherString += data.weather[i].description + ', ';
						}
					}
					$('#town-name').html(data.name);
					initialTemp = Math.round(data.main.temp-273);
					console.log(initialTemp);
					$('#temp').html('Temperature: ' + initialTemp + ' degrees Celcius' + '<br/>');
					$('#text-content').html('Weather: '+ weatherString + '<br/>'
									+ "Humidity: " + data.main.humidity);
					
					//THESE STATEMENTS WILL BE USED TO ADD THE CORRESPONDING 
					//ICON TO THE CORRECT WEATHER
					//weatherString = weatherString.toLowerCase();
					
					if(weatherString.includes("rain")){
						var iconDiv = document.getElementById("icon");
						iconDiv.innerHTML = "<img src='" + arrOfWeatherIcons[1] + "' id='icon-pic' />"; 
					}
					else if(weatherString.includes("clouds")){
						var iconDiv = document.getElementById("icon");
						iconDiv.innerHTML = "<img src='" + arrOfWeatherIcons[0] + "' id='icon-pic' />"; 						
					}
					else if(weatherString.includes("sunny") || weatherString.includes("sun") || weatherString.includes("clear")){
						var iconDiv = document.getElementById("icon");
						iconDiv.innerHTML = "<img src='" + arrOfWeatherIcons[2] + "' id='icon-pic' />"; 
					} else if(weatherString.includes("snow")){
						var iconDiv = document.getElementById("icon");
						iconDiv.innerHTML = "<img src='" + arrOfWeatherIcons[3] + "' id='icon-pic' />";
					} else if(weatherString.includes("storm")){
						var iconDiv = document.getElementById("icon");
						iconDiv.innerHTML = "<img src='" + arrOfWeatherIcons[4] + "' id='icon-pic' />";
					}
				});
				console.log(apiCallString);
			});
			console.log("latitude" + lat);
			console.log("longitude" + lon);
		});
		
		var isCelsius = true;
		
		function changeTemp(){
			if(isCelsius){
				initialTemp = Math.floor(initialTemp * (9/5) + 32);
				document.getElementById("temp").innerHTML = "Temperature: " + initialTemp + ' degrees Fahrenheit';
				isCelsius = false;
				document.getElementById("temp-button").innerHTML = "<a href= '#' onClick = 'changeTemp();false;'>C</a>";
			} else{
				initialTemp = Math.floor((initialTemp-32) * (5/9));
				document.getElementById("temp").innerHTML = "Temperature: " + initialTemp + ' degrees Celsius';
				isCelsius = true;
				document.getElementById("temp-button").innerHTML = "<a href= '#' onClick = 'changeTemp();false;'>F</a>";
			}
		}