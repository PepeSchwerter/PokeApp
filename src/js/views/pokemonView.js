import {elements, capitalizeFirstLetter} from './base';

export const renderPokemon = pokemon => {
    let type_spans;
    pokemon.types.forEach(t => {
        type_spans += `<span class="type__icon type__icon--${t.type.name} u-ml-s">${t.type.name}</span>`
    });
    const markup = `
        <div class="pokemon" id="${pokemon.id}">
            <h2 class="title">${capitalizeFirstLetter(pokemon.name)}
            ${type_spans}
            </h2>
            <p>N° ${pokemon.id}</p>
            <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" alt="${pokemon.name}" class="pokemon__image">
        </div> 
    `;
    /**
     * TODO 
     * EE vamo a calmarno for squirtle
     * Type Description
     */
    elements.pokemonContainer.insertAdjacentHTML('beforeend', markup);
};

export const clearPokemon = () => {
    elements.pokemonContainer.innerHTML = '';
} 