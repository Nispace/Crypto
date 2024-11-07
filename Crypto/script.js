async function fetchCryptoPrices() {
    try {
        const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=1&sparkline=false");
        const data = await response.json();

        const tableBody = document.getElementById("cryptoTable").getElementsByTagName("tbody")[0];
        tableBody.innerHTML = ""; // Réinitialise le tableau

        data.forEach(coin => {
            const row = tableBody.insertRow();
            row.insertCell(0).innerText = coin.name;
            row.insertCell(1).innerText = coin.symbol.toUpperCase();
            row.insertCell(2).innerText = coin.current_price.toFixed(2) + " €";
        });
    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
    }
}

// Appel de l'API à l'ouverture de la page
fetchCryptoPrices();