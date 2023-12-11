const express = require('express');
const app = express();

const config = require('./conf.json');
const city = config.city;

const apiKey = process.env.apiKey;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Bienvenue sur mon application météo!');
});

app.get('/weather', (req, res) => {
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no&lang=fr`;

    import('node-fetch')
        .then(({ default: fetch }) => fetch(url))
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors de la récupération des données météo');
            }
            return response.json();
        })
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            res.status(500).send('Erreur lors de la récupération des données météo');
        });
});

app.listen(5011, function () {
    console.log('Server is running on port 5011');
});
