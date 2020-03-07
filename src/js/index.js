/* css */
"use strict"
import '../sass/main.scss';
import Pokemon from './models/Pokemon';
import * as pokemonView from './views/pokemonView';
import {elements, renderLoader, clearLoader} from './views/base';

//https://pokeres.bastionbot.org/images/pokemon/132.png -- IMAGE
//https://pokeapi.co/api/v2/pokemon/pikachu -- POKEMON


//---Global state of the app---
const state = {
};

const controlSearch = async () => {
    const query = pokemonView.getInput();

    if(query){
        state.pokemonSearch = new Pokemon(query);
        pokemonView.clearInput();
        pokemonView.clearPokemon();
        renderLoader(elements.pokemonContainer);
        await state.pokemonSearch.getResults();
        clearLoader();
        pokemonView.renderPokemon(state.pokemonSearch);
    }
};

elements.searchForm.addEventListener('submit', e => {
    //Cancel the default form behavior (reload the page)
    e.preventDefault();
    controlSearch();
});