//step one: get city from input box
// click the search button to find city
//use data to find the forecast for that city

var cityEl = document.getElementById("city");
var searchBtn = window.document.getElementById("searchBtn");
var forecastEl = document.getElementById("forecast")

//input > do some work > output
function doWork(name, task) {
    console.log("starting to get the weather");
    console.log(name + " " + task);
}

searchBtn.addEventListener("click", function (e) {
    console.log("searching weather for city of " + cityEl.value);
    getWeatherByCity(cityEl.value);

})

function getWeatherByCity(city) {
    console.log("getting weather by city");
    console.log(city)
    // create a url for the api call 
    var url = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=962459bff62624b6a3a7912cff61ed1f"
    // make api calls with either fetch or ajax
    fetch(url)
        .then(function (response) {
            console.log(response);
            return response.json()
        })
        .then(function (data) {
            console.log(data)
            renderForeCast(data)
            
        })
    // return data for api call 
    // return ""

}
// render forcast
function renderForeCast(data) {
    console.log("rendering 5 day forecast");
    console.log(data);
    forecastEl.innerHTML = "";
    var forecastData = data.list.slice(0, 5);
    console.log(forecastData);


    for (let i = 0; i < forecastData.length; i++) {
        let forecast = forecastData[i];
        forecastEl.innerHTML += `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">${new Date(forecast.dt*1000).toLocaleDateString()}</h5>
    <p class="card-text">Temp ${forecast.main.temp_max} F</p>
    <p class="card-text">Humidity ${forecast.main.humidity} %</p>
    </div>
    </div>
    `

    }
}

