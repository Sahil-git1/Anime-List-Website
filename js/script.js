// Theme toggle functionality
const themeSwitch = document.getElementById('theme-switch');
const themeStyle = document.getElementById('theme-style');
const themeIcon = document.querySelector('.theme-toggle label i');

themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
        themeStyle.removeAttribute('disabled');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeStyle.setAttribute('disabled', 'true');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
});

// Render anime list
function renderAnimeList(animes) {
    const animeListContainer = document.getElementById('anime-list');
    animeListContainer.innerHTML = '';

    animes.forEach((anime, index) => {
        const animeItem = document.createElement('div');
        animeItem.classList.add('anime-item');
        animeItem.innerHTML = `
            <img src="${anime.image}" alt="${anime.title}">
            <div class="anime-item-content">
                <h2>${index + 1}. ${anime.title} (${anime.year})</h2>
                <p>${anime.plot}</p>
            </div>
        `;
        animeListContainer.appendChild(animeItem);
    });
}

// Search functionality
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredAnimes = animeData.filter(anime => 
        anime.title.toLowerCase().includes(searchTerm) || 
        anime.plot.toLowerCase().includes(searchTerm)
    );
    renderAnimeList(filteredAnimes);
});

// Sort functionality
const sortSelect = document.getElementById('sort');
sortSelect.addEventListener('change', () => {
    const sortBy = sortSelect.value;
    let sortedAnimes = [...animeData];
    
    switch(sortBy) {
        case 'title':
            sortedAnimes.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'year':
            sortedAnimes.sort((a, b) => b.year - a.year);
            break;
        default:
            break;
    }
    
    renderAnimeList(sortedAnimes);
});

window.addEventListener('load', () => renderAnimeList(animeData));