// https://www.weatherapi.com/

// http://api.weatherapi.com/v1/current.json?key=c75e43014d424a7a92a231046251802&q=Paris

const APIKEY = "c75e43014d424a7a92a231046251802";
const URL = "http://api.weatherapi.com/v1"; // /current.json

function show(data) {
    const div = document.querySelector("div");
    div.innerHTML = `
        <p>Város: ${data.location.name}</p>
        <p>Ország: ${data.location.country}</p>
        <p>Hőmérséklet: ${data.current.temp_c} °C</p>
        <p>Szélsebesség: ${data.current.wind_kph} km/h</p>
        <p>Csapadék: ${data.current.precip_mm} mm</p>
        <p>Páratartalom: ${data.current.humidity}%</p>
        <div>
            <span>Égbolt: ???</span>
            <img>
        </div>
    `;
}

const button = document.querySelector("button");
async function handleClick() {
    const city = document.querySelector("input").value;
    try {
        const response = await fetch(`${URL}/current.json?key=${APIKEY}&q=${city}`);
        const data = await response.json();
        console.log(data);
        // response.status === 400
        if (!response.ok) {
            // throw new Error(data.error.code);
            throw new Error(data.error.message);
        }
        show(data);
    } catch (error) {
        // if (error.message === "1006") {
        //     console.log("Nincs ilyen város!");
        // }
        // alert(error.message);
        console.log(error.message);
    }
}
button.addEventListener("click", handleClick);