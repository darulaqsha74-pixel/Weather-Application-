let search= () =>{
    const city=document.getElementById("cityinput").value;
    const API_KEY = "985c84891594455da2f105520261210";

  let url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=5&aqi=no&alerts=no`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.getElementById("cityName").innerHTML = data.location.name;
            document.getElementById("temparature").innerHTML = `${data.current.temp_c}°C`;
            document.getElementById("wetherDescription").innerHTML = data.current.condition.text;
            document.getElementById("humudity").innerHTML = data.current.humidity+"%";
            document.getElementById("pressure").innerHTML = data.current.pressure_mb+" mb";
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
        });
}