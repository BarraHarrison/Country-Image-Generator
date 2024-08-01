document.addEventListener("DOMContentLoaded", function() {
    const countryInput = document.getElementById("countryInput");
    const searchButton = document.getElementById("searchButton");
    const countryInfo = document.getElementById("countryInfo");

    const UNSPLASH_ACCESS_KEY = 'zE9SiiMyCl5TxAqvpUIphoUSd72HIHrQFBmwUAm4hAg';

    async function fetchCountryImages(query) {
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${UNSPLASH_ACCESS_KEY}&per_page=30`);
        const data = await response.json();
        return data.results;
    }

    async function searchCountry() {
        const query = countryInput.value.trim().toLowerCase();
        const result = countries.find(country => country.country.toLowerCase() === query);

        if (result) {
            countryInfo.innerHTML = `<h1>Country: ${result.country}</h1><h3>Capital: ${result.city}</h3>`;
            const images = await fetchCountryImages(result.country);
            displayImages(images);
        } else {
            countryInfo.innerHTML = "<h3>Country not found. Please try again.</h3>";
        }
    }

    searchButton.addEventListener("click", searchCountry);

    countryInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            searchCountry();
        }
    });

    function displayImages(images) {
        const imageContainer = document.createElement('div');
        imageContainer.className = 'image-container';
        images.forEach(image => {
            const linkElement = document.createElement('a'); // Create an anchor element
            linkElement.href = image.links.html; // Set the href to the image's page on Unsplash
            linkElement.target = '_blank'; // Open the link in a new tab
            const imgElement = document.createElement('img');
            imgElement.src = image.urls.small;
            imgElement.alt = image.alt_description;
            imgElement.className = 'country-image';
            linkElement.appendChild(imgElement); // Append the image to the anchor element
            imageContainer.appendChild(linkElement); // Append the anchor element to the container
        });
        countryInfo.appendChild(imageContainer);
    }
});




