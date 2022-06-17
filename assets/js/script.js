// global var

// api call 
// w/ key


fetch ('https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=be2f9b736692d924bd1c98d748a23042' )
    .then(response => response.json())
    .then(data => {
        weatherRes(data)
    });


function weatherRes(resultObj){
    var latitude = resultObj[0].latitude;
    var longitude = resultObj[0].longitude;

    var weatherCall = 'https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude=minutely&appid=be2f9b736692d924bd1c98d748a23042'

    fetch(weatherCall)
    .then(response => response.json())
    .then(data => {

    });
}

// function 