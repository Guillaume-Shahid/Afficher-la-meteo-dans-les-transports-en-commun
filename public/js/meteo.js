fetch('/weather')
    .then(response => response.json())
    .then(data => {
        document.getElementById('temperature').textContent = data.current.temp_c + '°C';
        document.getElementById('ville').textContent = data.location.name;
        document.getElementById('condition').textContent = data.current.condition.text;
        document.getElementById('icon').src = data.current.condition.icon;
        document.getElementById('humidity').textContent = data.current.humidity + '%';
        document.getElementById('windkm').textContent = data.current.wind_kph + 'km/h';
    })
    .catch(error => {
        console.error('Erreur:', error);
        document.getElementById('weatherData').textContent = 'Erreur lors de la récupération des données';
    });