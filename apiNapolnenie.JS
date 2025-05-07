async function fetchCountries() {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const countries = await response.json();

        const countryList = document.getElementById('country-list');
        countries.forEach(country => {
            const listItem = document.createElement('li');

            const flagImg = document.createElement('img');
            flagImg.src = country.flags.png; 
            flagImg.alt = `Флаг страны ${country.name.common};`;
            flagImg.style.width = '50px'; 
            flagImg.style.marginRight = '10px';  
        
            listItem.textContent = `${country.name.common} - ${country.capital ? country.capital[0] : 'Нет столицы'};`;

            listItem.prepend(flagImg);

            countryList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
    }
}
fetchCountries();