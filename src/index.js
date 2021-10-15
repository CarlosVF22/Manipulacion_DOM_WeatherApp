/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const apiKey = "f909614ec47c0514210c5a1dcc829f6f";
const form = document.querySelector(".containerSearch form");
const input = document.querySelector(".containerSearch input");
const list = document.querySelector(".app .container .cities");
const searchedCities = [];

form.addEventListener("submit",(event) =>{ //escuchamos los eventos
    event.preventDefault(); //la pagina no se recargue de nuevo
    let inputValue = input.value; //obtenemos el valor (cityName) del input
    searchedCities.push(inputValue.toLowerCase());//agregamos la ciudad buscada a un array 
    console.log(searchedCities);

    

    //ajax here
    //utilizamos promesas
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=metric`;
    fetch(url) //pasamos la url a la cual queremos acceder al fetch, este metodo devuelve una promesa que contiene la respuesta
        .then(response => response.json())//convertimos las respuesta a formato json
        .then(data => { //podemos manipular la data, en la data esta la informacion de la respuesta de la API
            const li = document.createElement("li");
            const markup = //creamos la estructura que sera añadida al html
            `<div class="card p-3 text-white bg-gray-500 rounded-sm shadow-lg m-1">
                <h2 class="city-name">
                    <span>${data.name}</span>
                    <sup>${data.sys.country}</sup>
                </h2>
                <div class="city-temp">
                    ${Math.round(data.main.temp)}
                    <sup>°C</sup>
                    <figure>
                        <img class="city-icon" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
                    </figure>
                </div>
            </div>`;
            li.innerHTML = markup; //agregamos la estructura creada en el markup a la etiqueta "li"
            list.appendChild(li);
            form.reset(); //limpiamos el buscador del formulario
            form.focus();
        }) 

        .catch((error) =>{console.log(error)}) //cacheamos los erorres

    
    
    

});


