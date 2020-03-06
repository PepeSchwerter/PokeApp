/* css */
"use strict"
import '../sass/main.scss';
import Search from './models/Search';
import * as searchView from './views/searchView';
import * as pokemonView from './views/pokemonView';
import {elements} from './views/base';

//https://pokeres.bastionbot.org/images/pokemon/132.png -- IMAGE
//https://pokeapi.co/api/v2/pokemon/pikachu -- POKEMON


//---Global state of the app---
const state = {
};

const controlSearch = async () => {
    const query = searchView.getInput();

    if(query){
        state.search = new Search(query);
        searchView.clearInput();
        await state.search.getResults();
        pokemonView.clearPokemon();
        pokemonView.renderPokemon(state.search.result);
    }
};

elements.searchForm.addEventListener('submit', e => {
    //Cancel the default form behavior (reload the page)
    e.preventDefault();
    controlSearch();
});