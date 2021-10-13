/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const apiKey = "f909614ec47c0514210c5a1dcc829f6f";

const form = document.getElementById("formSearchCity");
const input = document.getElementById("inputCity");

form.addEventListener("submit", (event) =>{
    event.preventDefault(); //La pagina no se recarga
    const cityName = input.value; //traemos el valor del input (cityName)
    weatherInformation(cityName); //Llamamos a la funcion weatherInformation y le enviamos el nombre de la ciudad
    
});

function weatherInformation (cityName) {
    window
        .fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`) //llamamos a la api
        .then((data) => data.json()) //volvemos la data en formato JSON
        .then(data => {
            renderWeather(data); //llamamos a la funcion que va a renderizar
        })
};

function renderWeather(data) {
    const app = getElementById("app");
    app.append(data);
}


