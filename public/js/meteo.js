fetch('/weather')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Erreur:', error);
        document.getElementById('').textContent = 'Erreur lors de la récupération des données';
    });