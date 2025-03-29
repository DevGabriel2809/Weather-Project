const username = "Nexy";

async function searchCity() {
    let query = document.getElementById("searchBox").value;

    if (query.length < 3) return; // Evita buscas desnecessárias

    let url = `http://api.geonames.org/searchJSON?q=${query}&maxRows=5&username=${username}`;

    let response = await fetch(url);
    let data = await response.json();

    let cityList = document.getElementById("cityList");
    cityList.innerHTML = ""; // Limpa a lista antes de adicionar novos resultados

    data.geonames.forEach(city => {
        let li = document.createElement("li");
        li.textContent = `${city.name}, ${city.countryCode}`;
        li.onclick = () => selectCity(city);
        cityList.appendChild(li);
    });
}

function selectCity(city) {
    document.querySelector(".locate").textContent = city.name;
    document.querySelector(".Locate-country").textContent = city.countryCode;
    document.getElementById("cityList").innerHTML = ""; // Esconde a lista após a seleção
}
