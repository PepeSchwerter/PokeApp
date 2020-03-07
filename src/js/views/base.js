export const elements = {

    searchInput: document.querySelector('.search__input'),
    searchForm: document.querySelector('.search'),
    pokemonContainer: document.querySelector('.pokemon-container')
}

export const capitalizeFirstLetter = word => word.replace(/^\w/, c => c.toUpperCase());

export const renderLoader = parent => {
    const loader = `
    <div class="loader">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: rgb(255, 255, 255); display: block; shape-rendering: auto;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <circle cx="50" cy="50" fill="none" stroke="currentColor" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138" transform="rotate(321.487 50 50)">
                <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
            </circle>
        </svg>
    </div>`;
    parent.insertAdjacentHTML('beforeend', loader);
};

export const clearLoader = () => {
    const loader = document.querySelector('.loader');
    if (loader) loader.parentElement.removeChild(loader);
};