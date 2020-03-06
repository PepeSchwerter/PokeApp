export const elements = {

    searchInput: document.querySelector('.search__input'),
    searchForm: document.querySelector('.search'),
    pokemonContainer: document.querySelector('.pokemon-container')
}

export const capitalizeFirstLetter = word => word.replace(/^\w/, c => c.toUpperCase());

export const renderLoader = parent => {
    const loader = `real_loader_gif`;
}