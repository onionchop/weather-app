// global var

// api call 
// w/ key


fetch ('https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${limit}&appid=${weatherKey}' )
    .then(response => response.json())
    .then(data => {
        weatherRes(data)
    });


function weatherRes(resultObj){
    var latitude = resultObj[0].lat;
    var longitude = resultObj[0].lon;

    var weatherFetch = 'https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude=minutely&appid=be2f9b736692d924bd1c98d748a23042'

    fetch(weatherFetch)
    .then(response => response.json())
    .then(data => {
        weatherCall(data)
    });
}

function weatherCall(resultObj){
    $("#city").text(userInput);

    $("#date").text()
}