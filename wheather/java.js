let city = document.getElementById("city");
let temp = document.getElementById("temp");
let type = document.getElementById("type");
let image = document.getElementById("img");
let input = document.getElementById("inp");
let apikey = "43d9159dc0429a5e2acfafe7640fee2d";

const data = async function(search){
	let getdata = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apikey}&units=metric`);
	console.log(getdata);
	let jsondata = await getdata.json();
	console.log(jsondata);
	console.log(jsondata.name);
	if(jsondata.cod == 400){
		alert("please enter your location")
		image.src = "image/erorr2.jpg"
		document.querySelector("h2").innerHTML ="please enter write locatio";
	temp.innerHTML = "";
	type.innerHTML = "";
	}
	if(jsondata.cod == 404){
		alert("please right enter your location")
		image.src = "image/erorr2.jpg"
		city.innerHTML ="";
	temp.innerHTML = "";
	type.innerHTML = "";
	}
	city.innerHTML = jsondata.name;
	temp.innerHTML = Math.floor(jsondata.main.temp)+"°C";
	type.innerHTML = jsondata.weather[0].main;
	if(type.innerHTML == "Clouds"){
		image.src="image/clouds.png"
	}
	else if (type.innerHTML == "Clear"){
		image.src="image/clear.png"
	}
	else if (type.innerHTML == "Haze"){
		image.src="image/haze.png"
	}
	else if (type.innerHTML == "Rain"){
		image.src="image/rain.png"
	}
	else if (type.innerHTML == "Snow"){
		image.src="image/clear.png"
	}
	else if (type.innerHTML == "Strom"){
		image.src="image/clear.png"
	}
	input.value=""
	
}
function myfun(){
search=input.value;
	data(search);
}

