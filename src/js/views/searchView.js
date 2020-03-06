import {elements} from './base';

export const getInput = () => elements.searchInput.value.toLowerCase();

export const clearInput = () => {
    elements.searchInput.value = '';
};